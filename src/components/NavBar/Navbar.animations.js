export const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
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
    animation: {
      duration: 0.6,
    },
    transition: "easeIn",
  },
};
