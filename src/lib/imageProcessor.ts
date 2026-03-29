// ─── IMAGE PROCESSOR ───────────────────────────────────────────
// Homogenize user-uploaded images: color temperature, quality, sizing
// Works entirely client-side with Canvas API — no server needed
//
// Usage:
//   import { processImage, processImageBatch } from "@/lib/imageProcessor";
//   const processed = await processImage(file, { temperature: "warm", quality: 0.85 });
//   <img src={processed.dataUrl} />

export interface ImageProcessOptions {
  /** Color temperature preset */
  temperature?: "warm" | "cool" | "neutral" | "cinematic" | "golden" | "moonlight";
  /** Max dimension (width or height) in px. Maintains aspect ratio */
  maxSize?: number;
  /** JPEG quality 0-1 (default 0.85) */
  quality?: number;
  /** Output format */
  format?: "image/jpeg" | "image/webp" | "image/png";
  /** Brightness adjustment -100 to 100 (default 0) */
  brightness?: number;
  /** Contrast adjustment -100 to 100 (default 0) */
  contrast?: number;
  /** Saturation adjustment -100 to 100 (default 0) */
  saturation?: number;
  /** Apply vignette darkening at edges */
  vignette?: boolean;
  /** Apply film grain overlay */
  grain?: boolean;
}

export interface ProcessedImage {
  dataUrl: string;
  blob: Blob;
  width: number;
  height: number;
  originalName: string;
}

// ─── TEMPERATURE PRESETS (RGB multipliers) ─────────────────────

const TEMPERATURE_PRESETS: Record<string, { r: number; g: number; b: number; brightness: number; contrast: number }> = {
  warm:      { r: 1.08, g: 1.02, b: 0.92, brightness: 5,  contrast: 5 },
  cool:      { r: 0.92, g: 0.98, b: 1.10, brightness: 0,  contrast: 5 },
  neutral:   { r: 1.00, g: 1.00, b: 1.00, brightness: 0,  contrast: 0 },
  cinematic: { r: 1.04, g: 0.98, b: 0.94, brightness: -5, contrast: 15 },
  golden:    { r: 1.12, g: 1.05, b: 0.85, brightness: 8,  contrast: 8 },
  moonlight: { r: 0.88, g: 0.95, b: 1.15, brightness: -8, contrast: 12 },
};

// ─── CORE PROCESSOR ────────────────────────────────────────────

export const processImage = async (
  file: File,
  options: ImageProcessOptions = {}
): Promise<ProcessedImage> => {
  const {
    temperature = "neutral",
    maxSize = 1920,
    quality = 0.85,
    format = "image/webp",
    brightness = 0,
    contrast = 0,
    saturation = 0,
    vignette = false,
    grain = false,
  } = options;

  // Load image
  const img = await loadImage(file);
  
  // Calculate dimensions
  const { width, height } = calculateDimensions(img.width, img.height, maxSize);

  // Create canvas
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  // Draw base image
  ctx.drawImage(img, 0, 0, width, height);

  // Get pixel data
  const imageData = ctx.getImageData(0, 0, width, height);
  const pixels = imageData.data;

  // Apply temperature
  const temp = TEMPERATURE_PRESETS[temperature];
  const totalBrightness = brightness + temp.brightness;
  const totalContrast = contrast + temp.contrast;

  // Process each pixel
  const contrastFactor = (259 * (totalContrast + 255)) / (255 * (259 - totalContrast));

  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i];
    let g = pixels[i + 1];
    let b = pixels[i + 2];

    // Temperature
    r = Math.min(255, r * temp.r);
    g = Math.min(255, g * temp.g);
    b = Math.min(255, b * temp.b);

    // Brightness
    r = Math.min(255, Math.max(0, r + totalBrightness));
    g = Math.min(255, Math.max(0, g + totalBrightness));
    b = Math.min(255, Math.max(0, b + totalBrightness));

    // Contrast
    r = Math.min(255, Math.max(0, contrastFactor * (r - 128) + 128));
    g = Math.min(255, Math.max(0, contrastFactor * (g - 128) + 128));
    b = Math.min(255, Math.max(0, contrastFactor * (b - 128) + 128));

    // Saturation
    if (saturation !== 0) {
      const gray = 0.299 * r + 0.587 * g + 0.114 * b;
      const sat = 1 + saturation / 100;
      r = Math.min(255, Math.max(0, gray + sat * (r - gray)));
      g = Math.min(255, Math.max(0, gray + sat * (g - gray)));
      b = Math.min(255, Math.max(0, gray + sat * (b - gray)));
    }

    pixels[i] = r;
    pixels[i + 1] = g;
    pixels[i + 2] = b;
  }

  ctx.putImageData(imageData, 0, 0);

  // Vignette
  if (vignette) {
    applyVignette(ctx, width, height);
  }

  // Grain
  if (grain) {
    applyGrain(ctx, width, height);
  }

  // Export
  const blob = await canvasToBlob(canvas, format, quality);
  const dataUrl = canvas.toDataURL(format, quality);

  return {
    dataUrl,
    blob,
    width,
    height,
    originalName: file.name,
  };
};

// ─── BATCH PROCESSOR ───────────────────────────────────────────
// Process multiple images with identical settings for visual consistency

export const processImageBatch = async (
  files: File[],
  options: ImageProcessOptions = {}
): Promise<ProcessedImage[]> => {
  const results: ProcessedImage[] = [];
  for (const file of files) {
    const processed = await processImage(file, options);
    results.push(processed);
  }
  return results;
};

// ─── HELPERS ───────────────────────────────────────────────────

const loadImage = (file: File): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

const calculateDimensions = (
  origW: number,
  origH: number,
  maxSize: number
): { width: number; height: number } => {
  if (origW <= maxSize && origH <= maxSize) return { width: origW, height: origH };
  const ratio = Math.min(maxSize / origW, maxSize / origH);
  return {
    width: Math.round(origW * ratio),
    height: Math.round(origH * ratio),
  };
};

const applyVignette = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.max(cx, cy);
  const gradient = ctx.createRadialGradient(cx, cy, radius * 0.4, cx, cy, radius * 1.2);
  gradient.addColorStop(0, "rgba(0,0,0,0)");
  gradient.addColorStop(1, "rgba(0,0,0,0.45)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);
};

const applyGrain = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
  const imageData = ctx.getImageData(0, 0, w, h);
  const pixels = imageData.data;
  for (let i = 0; i < pixels.length; i += 4) {
    const noise = (Math.random() - 0.5) * 20;
    pixels[i] = Math.min(255, Math.max(0, pixels[i] + noise));
    pixels[i + 1] = Math.min(255, Math.max(0, pixels[i + 1] + noise));
    pixels[i + 2] = Math.min(255, Math.max(0, pixels[i + 2] + noise));
  }
  ctx.putImageData(imageData, 0, 0);
};

const canvasToBlob = (
  canvas: HTMLCanvasElement,
  format: string,
  quality: number
): Promise<Blob> => {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob!), format, quality);
  });
};

// ─── QUICK PRESETS ─────────────────────────────────────────────

export const IMAGE_PRESETS = {
  hero: { maxSize: 1920, quality: 0.9, temperature: "cinematic" as const, vignette: true },
  card: { maxSize: 800, quality: 0.85, temperature: "warm" as const },
  gallery: { maxSize: 1200, quality: 0.88, temperature: "neutral" as const },
  thumbnail: { maxSize: 400, quality: 0.8, temperature: "warm" as const },
  team: { maxSize: 600, quality: 0.85, temperature: "golden" as const, vignette: true },
  darkMode: { maxSize: 1920, quality: 0.9, temperature: "moonlight" as const, contrast: 10, grain: true },
} as const;
