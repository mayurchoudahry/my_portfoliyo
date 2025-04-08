'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function GlassHeader() {
  // Store each digit separately
  const [h1, setH1] = useState<string>('0');
  const [h2, setH2] = useState<string>('0');
  const [m1, setM1] = useState<string>('0');
  const [m2, setM2] = useState<string>('0');
  const [s1, setS1] = useState<string>('0');
  const [s2, setS2] = useState<string>('0');

  // Previous values for comparison
  const prevH1 = useRef('0');
  const prevH2 = useRef('0');
  const prevM1 = useRef('0');
  const prevM2 = useRef('0');
  const prevS1 = useRef('0');
  const prevS2 = useRef('0');

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      // Ensure IST timezone by adding 5 hours and 30 minutes to UTC
      const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
      const hours = istTime.getUTCHours().toString().padStart(2, '0');
      const minutes = istTime.getUTCMinutes().toString().padStart(2, '0');
      const seconds = istTime.getUTCSeconds().toString().padStart(2, '0');

      // Store previous values before updating
      prevH1.current = h1;
      prevH2.current = h2;
      prevM1.current = m1;
      prevM2.current = m2;
      prevS1.current = s1;
      prevS2.current = s2;

      // Update each digit
      setH1(hours[0]);
      setH2(hours[1]);
      setM1(minutes[0]);
      setM2(minutes[1]);
      setS1(seconds[0]);
      setS2(seconds[1]);
    };

    // Initial call
    updateTime();

    // Set interval for timer
    const intervalId = setInterval(updateTime, 1000);

    // Handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up on unmount
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [h1, h2, m1, m2, s1, s2]);

  // Time digit component that only animates when value changes
  const TimeDigit = ({
    current,
    previous,
    className = ""
  }: {
    current: string,
    previous: string,
    className?: string
  }) => {
    const hasChanged = current !== previous;

    if (hasChanged) {
      return (
        <div className={`w-2 h-5 overflow-hidden relative items-center  ${className}`}>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={current}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full text-center  "
            >
              {current}
            </motion.div>
          </AnimatePresence>
        </div>
      );
    } else {
      // No animation for unchanged digits
      return <div className={`w-2 h-5 text-center items-center ${className}`}>{current}</div>;
    }
  };

  return (
    <>
      {/* Add CSS for radar pulse animation */}
      <style jsx global>{`
        @keyframes radar-pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        .radar-dot {
          position: relative;
        }
        
        .radar-dot::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgb(34 197 94 / 0.6); /* green-500/60 */
          border-radius: 50%;
          animation: radar-pulse 2s ease-out infinite;
          animation-delay: 1s; /* 1s delay between pulses */
        }
      `}</style>
  
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-4xl mx-auto sm:px-10 sm:py-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="backdrop-blur-lg bg-white/10 dark:bg-black/10 px-5 py-4 flex justify-between items-center"
          >
            <div className="flex items-center">
              {/* Always reserve space for avatar */}
              <div className="w-8 mr-3 relative flex items-center justify-center">
                <AnimatePresence>
                  {scrolled && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute w-8 h-8 rounded-full overflow-hidden border border-white/20 dark:border-gray-800/40"
                    >
                      <Image
                        src="/avatar.png"
                        alt="Profile"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="text-sm font-medium text-black/70 dark:text-white/70">
                Udaipur, India
              </div>
            </div>

            <div className="hidden sm:flex items-center text-sm font-medium text-black/70 dark:text-white/70 space-x-2">
              <div className="relative">
                {/* Base green dot with CSS animation */}
                <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-800 radar-dot"></div>
              </div>
              <div>Available for new projects</div>
            </div>

            <div className="flex items-center space-x-2 text-black/70 dark:text-white/70">
              <div className="flex text-sm items-center font-medium">
                <TimeDigit current={h1} previous={prevH1.current} />
                <TimeDigit current={h2} previous={prevH2.current} />
                <span className="mx-1">:</span>
                <TimeDigit current={m1} previous={prevM1.current} />
                <TimeDigit current={m2} previous={prevM2.current} />
                <span className="mx-1">:</span>
                <TimeDigit current={s1} previous={prevS1.current} />
                <TimeDigit current={s2} previous={prevS2.current} />
              </div>
              <div className="text-sm font-medium ml-1">IST</div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}