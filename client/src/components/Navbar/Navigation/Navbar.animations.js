export const stagger = {
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};
export const topDown = {
  initial: {
    y: -80,
    opacity: 0,
    transition: "easeIn",
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 0.7,
    },
  },
};
