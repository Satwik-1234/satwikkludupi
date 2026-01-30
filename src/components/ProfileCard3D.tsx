import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

interface ProfileCard3DProps {
  variant?: 'portfolio' | 'services';
}

const ProfileCard3D = ({ variant = 'portfolio' }: ProfileCard3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);
  const translateZ = useTransform(mouseXSpring, [-0.5, 0.5], ["0px", "10px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const resumeUrl = "https://drive.google.com/file/d/1QKJ2Jedd6gD6DlIUq_5cKwgcCxyfzex5/view?usp=sharing";

  const isServices = variant === 'services';
  const bgColor = isServices ? 'bg-[#16161d]' : 'bg-card';
  const borderColor = isServices ? 'border-cyan-500/30' : 'border-border/50';
  const accentColor = isServices ? 'from-cyan-400 to-blue-500' : 'from-primary to-secondary';
  const textColor = isServices ? 'text-white' : 'text-foreground';
  const mutedColor = isServices ? 'text-white/60' : 'text-muted-foreground';

  return (
    <div className="perspective-1000">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative w-[220px] h-[280px] ${bgColor} border-2 ${borderColor} rounded-2xl cursor-pointer group`}
      >
        {/* Glowing border effect */}
        <motion.div
          className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}
          animate={{
            opacity: isHovered ? 0.6 : 0,
          }}
        />

        {/* Card content */}
        <div className="relative h-full p-6 flex flex-col items-center justify-center">
          {/* Profile photo */}
          <motion.div
            style={{ transform: "translateZ(50px)" }}
            className="relative mb-4"
          >
            <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${accentColor} p-[2px]`}>
              <div className={`w-full h-full rounded-full ${bgColor} p-0.5`}>
                <img
                  src={profilePhoto}
                  alt="Satwik Udupi"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            
            {/* Animated ring */}
            <motion.div
              className={`absolute inset-0 rounded-full border-2 border-dashed ${isServices ? 'border-cyan-400/40' : 'border-primary/40'}`}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Name & Title */}
          <motion.div
            style={{ transform: "translateZ(40px)" }}
            className="text-center mb-4"
          >
            <h3 className={`text-lg font-semibold ${textColor} mb-1`}>
              Satwik Udupi
            </h3>
            <p className={`text-sm ${mutedColor} font-light`}>
              Hydrologist & GIS Analyst
            </p>
          </motion.div>

          {/* Download CV Button */}
          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transform: "translateZ(60px)" }}
            className={`group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${accentColor} text-sm font-medium ${isServices ? 'text-[#0a0f1a]' : 'text-primary-foreground'} hover:shadow-lg transition-all duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4" />
            Download CV
            <ExternalLink className="w-3 h-3 opacity-0 -ml-1 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all" />
          </motion.a>

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
            style={{ transform: "translateZ(30px)" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
              initial={{ x: '-100%', y: '-100%' }}
              animate={isHovered ? { x: '100%', y: '100%' } : { x: '-100%', y: '-100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>

        {/* Shadow */}
        <motion.div
          className="absolute -bottom-4 left-4 right-4 h-8 bg-black/30 blur-xl rounded-full -z-20"
          animate={{
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 0.5 : 0.3,
          }}
        />
      </motion.div>
    </div>
  );
};

export default ProfileCard3D;
