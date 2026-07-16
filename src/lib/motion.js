// Shared animation variants — reused everywhere instead of ad-hoc inline motion props.
// One timing language for the whole site: ease-out-expo, no springs/bounce on entrances.

export const EASE = [0.16, 1, 0.3, 1];

// show accepts a numeric "custom" delay via the `custom` prop on the component
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

export const fadeUpSmall = {
  hidden: { opacity: 0, y: 10 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

export function staggerContainer(stagger = 0.08, delayChildren = 0) {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.05, clipPath: "inset(0 0 0 0)" },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: EASE, delay },
  }),
};

export const lineReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: (delay = 0) => ({
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.9, ease: EASE, delay },
  }),
};

export const viewportOnce = { once: true, margin: "-80px 0px" };

export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25, ease: EASE },
};
