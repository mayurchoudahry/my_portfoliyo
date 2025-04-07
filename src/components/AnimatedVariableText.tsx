'use client';

import React, { useRef } from 'react';
import { motion } from "framer-motion";
import VariableProximity from '@/components/ui/textEffect';

interface AnimatedVariableTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export default function AnimatedVariableText({ 
  text, 
  className = "", 
  once = true 
}: AnimatedVariableTextProps) {
  const containerRef = useRef(null);
  
  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 1 * i },
    }),
  };

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Determine if the text is centered, left-aligned, or right-aligned based on the className
  const isLeft = className.includes('text-left');
  const isRight = className.includes('text-right');
  const justifyClass = isLeft ? 'justify-start' : isRight ? 'justify-end' : 'justify-center';

  const words = text.split(" ");

  return (
    <motion.div
      ref={containerRef}
      className={`w-full mx-auto py-2 flex items-center ${justifyClass} overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      viewport={{ once }}
      style={{ position: 'relative' }}
    >
      {words.map((word, index) => (
        <motion.div
          key={index}
          className="inline-block mr-2"
          variants={child}
        >
          <VariableProximity
            label={word}
            className="variable-proximity-demo"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={200}
            falloff='linear'
          />
        </motion.div>
      ))}
    </motion.div>
  );
} 