"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

interface ClipImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  direction?: "from-right" | "from-left" | "from-bottom" | "diagonal";
}

const clipPaths = {
  "from-right": "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
  "from-left": "polygon(0 0, 0 0, 0 100%, 0 100%)",
  "from-bottom": "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
  diagonal: "polygon(0 0, 100% 0, 100% 0, 0 0)",
};

const clipPathsEnd = {
  "from-right": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  "from-left": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  "from-bottom": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  diagonal: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
};

export default function ClipImage({
  src,
  alt,
  aspectRatio = "16/10",
  className = "",
  direction = "from-right",
}: ClipImageProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
      initial={{ clipPath: clipPaths[direction] }}
      whileInView={{ clipPath: clipPathsEnd[direction] }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.3, y: "10%" }}
        whileInView={{ scale: 1, y: "0%" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={assetPath(src)}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </motion.div>
  );
}
