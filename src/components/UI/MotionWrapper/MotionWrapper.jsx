import { motion } from "framer-motion";

const MotionWrapper = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: props.delay === undefined ? 0.5:props.delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};

export default MotionWrapper;
