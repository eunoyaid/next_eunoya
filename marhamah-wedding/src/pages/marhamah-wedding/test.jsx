import { useAnimationControls, motion } from "framer-motion";
import React from "react";

const Test = () => {
  const wrapperVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", delay: 0.1 },
    },
    exit: {
      x: "-100vh",
      transition: { ease: "easeInOut" },
    },
  };

  const controls = useAnimationControls();
  return (
    <div>
      <motion.div
        variants={wrapperVariants}
        initial="visible"
        animate={controls}
        exit="exit"
      >
        <p>test</p>
      </motion.div>

      <button onClick={() => controls.start("hidden")}>tekan sayaa</button>
    </div>
  );
};

export default Test;
