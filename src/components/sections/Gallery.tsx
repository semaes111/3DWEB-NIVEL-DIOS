import { motion } from "framer-motion";
import { useState } from "react";

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800", alt: "Digital Earth", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600", alt: "Abstract Light", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600", alt: "Neural Network", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600", alt: "Mountain Vista", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600", alt: "Gaming Setup", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800", alt: "Data Dashboard", span: "col-span-2 row-span-1" },
  { src: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600", alt: "Keyboard Art", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600", alt: "Code Screen", span: "col-span-1 row-span-1" },
];

const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-general text-sm uppercase tracking-[0.3em] text-accent/60 mb-4">
            Showcase
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Visual <span className="gradient-text">Gallery</span>
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.alt}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className={`${img.span} group relative overflow-hidden rounded-xl border border-white/5 hover:border-accent/20 cursor-pointer transition-all duration-500`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm font-display font-semibold">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-primary/95 backdrop-blur-xl flex-center cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={selectedImage.replace("w=600", "w=1400").replace("w=800", "w=1400")}
              alt="Gallery preview"
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
            />
            <p className="absolute bottom-8 text-white/30 text-sm font-general">Click anywhere to close</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
