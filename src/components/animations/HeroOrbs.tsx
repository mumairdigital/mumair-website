"use client";

import { motion } from "framer-motion";

export function HeroOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-purple-700 opacity-20"
        style={{ filter: "blur(100px)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-violet-600 opacity-15"
        style={{ filter: "blur(80px)" }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-purple-500 opacity-10"
        style={{ filter: "blur(60px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
