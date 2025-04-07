'use client';

import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      {/* <motion.div
        className="fixed top-0 left-0 right-0 w-full h-screen z-30 bg-black"
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        exit={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      /> */}
      <motion.div
        className="fixed top-0 left-0 right-0 w-full h-screen z-50 bg-black"
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      />
      {/* <motion.div
        className="fixed top-0 left-0 right-0 w-full h-screen z-10 bg-gray-600"
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      /> */}
    </>
  );
};

export default TransitionEffect; 