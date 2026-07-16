"use client";

import { motion } from "framer-motion";
import { EASE, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const line = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

/**
 * Line-level clip/translate reveal for hero + section headlines.
 * Pass an array of strings, one per line.
 */
export default function SplitText({ lines, className, as: Tag = "h1", delay = 0 }) {
  return (
    <Tag className={cn("overflow-hidden", className)}>
      <motion.span
        className="block"
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.12, delay)}
      >
        {lines.map((text, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span className="block" variants={line}>
              {text}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
