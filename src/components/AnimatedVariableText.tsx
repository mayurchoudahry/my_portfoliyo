'use client';

import React, { useRef, MutableRefObject } from 'react';
import { motion } from "framer-motion";
import VariableProximity from '@/components/ui/textEffect';
import useMediaQuery from '@/hooks/useMediaQuery';

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
  const containerRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement | null>;
  const isLargeScreen = useMediaQuery('(min-width: 1024px)'); // lg breakpoint

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 1 * i },
    }),
  };

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
            toFontVariationSettings={isLargeScreen ? "'wght' 1000, 'opsz' 40" : "'wght' 400, 'opsz' 9"}
            containerRef={containerRef}
            radius={isLargeScreen ? 200 : 0}
            falloff='linear'
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
