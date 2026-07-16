"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 300, damping: 30, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 300, damping: 30, mass: 0.5 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(canHover);
    if (!canHover) return;

    const move = (e) => {
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };
    const over = (e) => {
      setHovering(!!e.target.closest("a, button, [role='button']"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="cursor-dot" style={{ x: dotX, y: dotY }} />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY, marginLeft: -11, marginTop: -11 }}
        animate={{ scale: hovering ? 1.6 : 1, opacity: hovering ? 0.6 : 1 }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}
