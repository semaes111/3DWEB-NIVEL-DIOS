import { useState, useEffect, useCallback } from "react";
import { getTheme, applyTheme, loadThemeFonts, getAllThemeIds, type Theme } from "@/lib/themes";

/**
 * Hook to manage theme state and switching.
 *
 * Usage:
 *   const { theme, themeId, setThemeId, allThemeIds } = useTheme("saas");
 *
 *   // Switch theme:
 *   setThemeId("restaurant");
 *
 *   // Access current theme data:
 *   theme.colors.accent  // "#C9A962" for restaurant
 *   theme.meta.heroStyle // "video" for restaurant
 */
export const useTheme = (initialThemeId: string = "saas") => {
  const [themeId, setThemeId] = useState(initialThemeId);
  const [theme, setTheme] = useState<Theme>(getTheme(initialThemeId));

  const switchTheme = useCallback((newId: string) => {
    const newTheme = getTheme(newId);
    setThemeId(newId);
    setTheme(newTheme);
    applyTheme(newTheme);
    loadThemeFonts(newTheme);
  }, []);

  // Apply initial theme on mount
  useEffect(() => {
    const t = getTheme(initialThemeId);
    applyTheme(t);
    loadThemeFonts(t);
  }, [initialThemeId]);

  return {
    theme,
    themeId,
    setThemeId: switchTheme,
    allThemeIds: getAllThemeIds(),
  };
};
