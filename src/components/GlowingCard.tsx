import { motion } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

const GlowingCard = ({ children, className, glowColor = 'hsl(var(--primary))' }: GlowingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/10 bg-card/50 backdrop-blur-xl transition-all duration-300',
        isHovered && 'border-primary/30',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect following mouse */}
      {isHovered && (
        <motion.div
          className="pointer-events-none absolute z-0"
          animate={{
            opacity: 0.15,
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
          style={{
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? `0 0 30px ${glowColor}20, inset 0 0 20px ${glowColor}10`
            : 'none',
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowingCard;
