"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

interface ImageGalleryProps {
  images: string[];
  contain?: number[];
  alts?: string[];
}

const isVideo = (src: string) => /\.(mp4|webm|mov|ogg)$/i.test(src);
const isSvg = (src: string) => /\.svg$/i.test(src);

/**
 * Breaks out of the prose measure so project work can be seen at a
 * usable size, then returns the reader to the column.
 */
export default function ImageGallery({ images, contain = [], alts = [] }: ImageGalleryProps) {
  const reduced = useReducedMotion();

  const frame = (index: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-8% 0px" },
    transition: { duration: 0.8, delay: index * 0.07, ease: EASE },
  });

  const frameStyle = {
    borderColor: "var(--line)",
    background: "var(--surface)",
  };

  return (
    <div className="gallery my-14 flex flex-col gap-5">
      {images.length > 0 && (
        <motion.figure
          {...frame(0)}
          className="relative aspect-[16/9] overflow-hidden rounded-[3px] border"
          style={frameStyle}
        >
          {isVideo(images[0]) ? (
            <video
              src={images[0]}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-contain"
            />
          ) : (
            <Image
              src={images[0]}
              alt={alts[0] ?? ""}
              fill
              className={isSvg(images[0]) || contain.includes(0) ? "object-contain p-6" : "object-cover"}
              sizes="(max-width: 1200px) 100vw, 1184px"
            />
          )}
        </motion.figure>
      )}

      {images.length > 1 && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {images.slice(1).map((src, index) => {
            const useContain = isSvg(src) || contain.includes(index + 1);
            return (
              <motion.figure
                key={`${src}-${index}`}
                {...frame(index + 1)}
                className="relative aspect-[16/10] overflow-hidden rounded-[3px] border"
                style={frameStyle}
              >
                {isVideo(src) ? (
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                ) : (
                  <Image
                    src={src}
                    alt={alts[index + 1] ?? ""}
                    fill
                    className={useContain ? "object-contain p-6" : "object-cover"}
                    sizes="(max-width: 768px) 100vw, 588px"
                  />
                )}
              </motion.figure>
            );
          })}
        </div>
      )}
    </div>
  );
}
