import {motion } from "framer-motion";

export const MotionWrapper = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};

export const FadeInWrapper = (props) => {
  return (
      <motion.div
        key={props.key}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 1 }}
        className={props.className}
      >
        {props.children}
      </motion.div>
  );
};
