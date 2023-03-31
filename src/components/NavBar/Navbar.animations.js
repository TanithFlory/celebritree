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
