"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="flex flex-col gap-6 my-12">
      {/* First image - Full Width */}
      {images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10"
        >
          <Image
            src={images[0]}
            alt="Gallery image 1"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </motion.div>
      )}

      {/* Grid for subsequent images */}
      {images.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.slice(1).map((src, index) => (
            <motion.div
              key={src + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white/5 border border-white/10"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 2}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
