import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for exit animation
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-[hsl(222,47%,4%)] flex flex-col items-center justify-center"
        >
          {/* Earth Loader */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="earth-container"
          >
            <div className="earth-loader">
              <svg viewBox="0 0 100 100">
                <path fill="#7cc133" d="M14.31 80.48a4.27 4.27 0 01-3.64 4.87 4.25 4.25 0 01-3.32-1 46.55 46.55 0 01-5.56-8.42 4.26 4.26 0 016.52-5.22c1.48 1.26 4.41 3.59 5.22 6.32a6.87 6.87 0 01.78 3.45zM19 21.31c.29.06.59.13.89.17 1.93.27 4.82.79 6.41 2.27a19.91 19.91 0 012.1 2.52 52.72 52.72 0 003.9 4.71c2.17 2.14 6.86 5.18 8.67 7.7a18 18 0 011.82 4.26c.82 1.9 1.18 4.27 2.85 5.63a9.68 9.68 0 005 1.79 7.4 7.4 0 005.22-2.25c1.94-2.11 1.26-5.71 1.7-8.37a12.2 12.2 0 011.3-3.63 14.74 14.74 0 002.23-5.59 6.91 6.91 0 00-1.29-4.66 7.21 7.21 0 00-4.86-2.82 19.55 19.55 0 01-4.41-1.42 7.54 7.54 0 01-2.24-2.21 3.8 3.8 0 00-1.75-1.56A3.66 3.66 0 0045 18c-1.59.09-3.12.55-4.7.73a14.63 14.63 0 01-4.79-.13 14.06 14.06 0 00-4.7-.12c-1.23.23-2.89.85-4.12.56a18.35 18.35 0 01-3.54-1.68c-.7-.38-1.35-.82-2.06-1.18a4.65 4.65 0 00-2.07-.72c-1.06 0-1.71.73-2.48 1.37a36.06 36.06 0 00-3.37 3.1l-.58.63c.66-.38 4.09.21 5.41.75z" />
              </svg>
              <svg viewBox="0 0 100 100">
                <path fill="#7cc133" d="M10 68.06c1.65.13 3.36-.14 5-.23a12.31 12.31 0 014.89.57c2.1.72 3.22 3.12 5.18 4.09a12.7 12.7 0 003.4.77c3.08.53 6.25 1 9.28.36s5.85-2.92 6.46-5.91a4.69 4.69 0 00-.22-2.78 5.87 5.87 0 00-1.69-1.88 14 14 0 01-3.5-4 6.17 6.17 0 010-5.64A8.84 8.84 0 0141.32 51a5 5 0 012.6-.73 13.18 13.18 0 012.35.29 4.83 4.83 0 003.1-.52 8.28 8.28 0 001.64-1.42 13.27 13.27 0 012.76-2.42 4.33 4.33 0 013.79-.26 17.19 17.19 0 002.34.82 4.68 4.68 0 002.61 0 2.84 2.84 0 001.59-1.79c.62-1.8-.79-3.77.36-5.35 1-1.4 3.3-1.2 4.73-2.14.75-.5 1.27-1.27 2-1.84a4.59 4.59 0 012.84-.81 11.06 11.06 0 012.13.3c.83.14 1.73.27 2.48-.14a.72.72 0 00.27-.18 48.71 48.71 0 00-1.81-2.66c-1.45.06-2.92.6-4.34.33a7 7 0 01-2.58-1.25c-2.08-1.43-4.14-3.34-6.68-3.65s-4.93.9-7.39 1.21a15.14 15.14 0 01-4.23.08c-1.4-.21-2.74-.68-4.14-.89a9.55 9.55 0 00-6.44 1.11c-1.44.85-2.6 2.07-4 3-.86.59-1.83 1-2.66 1.68a8.32 8.32 0 00-2.47 3.65c-.68 1.85-.61 4-1.91 5.46a8.36 8.36 0 01-2.88 1.78A19.75 19.75 0 0121 46.85a6.55 6.55 0 01-1.27 3.29c-1.11 1.4-2.86 2.12-4.47 2.91-.53.26-1.07.53-1.59.82a3.69 3.69 0 00-1.69 2 8 8 0 00-.19 2.24 10.6 10.6 0 01-1.09 5.06 46.8 46.8 0 00-.86 5c0 .31-.05.64-.06 1z" />
              </svg>
              <svg viewBox="0 0 100 100">
                <path fill="#7cc133" d="M99.63 45.06a47.2 47.2 0 00-4-14.26.47.47 0 00-.17-.05 6 6 0 00-2.78.58 5.24 5.24 0 00-2.59 2.78 3.59 3.59 0 00.06 2.56 5.62 5.62 0 001.17 1.67c1 1.18 2.06 2.57 1.86 4.1a4.77 4.77 0 01-.7 1.69 27.33 27.33 0 00-1.62 3.49 10.59 10.59 0 00-.45 3 16.06 16.06 0 00.82 5.24 7.65 7.65 0 001.14 2.09 3.27 3.27 0 002.52 1.32c1.43-.08 2.06-1.63 2.58-2.86a32.72 32.72 0 002.1-8 10.67 10.67 0 00.06-3.35z" />
              </svg>
              <svg viewBox="0 0 100 100">
                <path fill="#7cc133" d="M94.19 63.79a4.67 4.67 0 00-4 1.94 3.75 3.75 0 00-.5 3.16 3.07 3.07 0 002.14 2 6.74 6.74 0 002.55 0c.55-.09 1.1-.18 1.65-.3.4-1.44.72-2.91 1-4.39a24.29 24.29 0 00-2.84-2.41z" />
              </svg>
            </div>

            <p className="mt-6 text-white text-lg font-medium tracking-wide">
              Loading...
            </p>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 text-2xl md:text-4xl font-display font-bold text-white text-center"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Satwik Udupi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="mt-2 text-muted-foreground text-sm md:text-base"
          >
            Agricultural Engineer & GIS Specialist
          </motion.p>

          {/* Loading bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ duration: 4.8, ease: 'linear' }}
            className="mt-8 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
