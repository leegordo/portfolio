"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageGalleryProps {
  images: string[];
  contain?: number[];
}

const isVideo = (src: string) => /\.(mp4|webm|mov|ogg)$/i.test(src);
const isSvg = (src: string) => /\.svg$/i.test(src);

export default function ImageGallery({ images, contain = [] }: ImageGalleryProps) {
  return (
    <div className="flex flex-col gap-6 my-12">
      {/* First item - Full Width (image or video) */}
      {images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#111111] border border-white/10 flex items-center justify-center"
        >
          {isVideo(images[0]) ? (
            <video
              src={images[0]}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-contain"
            />
          ) : (
            <Image
              src={images[0]}
              alt="Gallery image 1"
              fill
              className={isSvg(images[0]) || contain.includes(0) ? "object-contain" : "object-cover"}
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          )}
        </motion.div>
      )}

      {/* Grid for subsequent images */}
      {images.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.slice(1).map((src, index) => {
            const useContain = isSvg(src) || contain.includes(index + 1);
            return (
              <motion.div
                key={src + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#111111] border border-white/10 flex items-center justify-center"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 2}`}
                  fill
                  className={useContain ? "object-contain p-6" : "object-cover"}
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
