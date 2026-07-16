"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedStat({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [spring, suffix]);

  return (
    <div>
      <motion.div className="font-display text-4xl text-text md:text-5xl">
        <span ref={ref}>0{suffix}</span>
      </motion.div>
      <div className="mt-2 font-mono text-xs uppercase tracking-wide text-muted">
        {label}
      </div>
    </div>
  );
}
