"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

/**
 * Workhorse scroll-reveal wrapper. Wraps children in a fade + translate
 * that fires once when scrolled into view.
 */
export default function Reveal({
  children,
  as: Component = motion.div,
  variants = fadeUp,
  delay = 0,
  className,
  ...props
}) {
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={variants}
      custom={delay}
      {...props}
    >
      {children}
    </Component>
  );
}
