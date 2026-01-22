import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

const GradientBorder = ({ children, className, animate = true }: GradientBorderProps) => {
  return (
    <div className={cn('relative rounded-2xl p-[1px] group', className)}>
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity"
        style={{
          background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)), hsl(var(--primary)))',
          backgroundSize: '300% 100%',
        }}
        animate={
          animate
            ? {
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }
            : {}
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Content container */}
      <div className="relative rounded-2xl bg-card">{children}</div>
    </div>
  );
};

export default GradientBorder;
