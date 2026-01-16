import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919834300849?text=Hi%20Satwik,%20I\'m%20interested%20in%20your%20GIS/Hydrology%20services',
    gradient: 'from-green-400 to-green-600',
    hoverGradient: 'radial-gradient(circle at 30% 107%, #25D366 0%, #128C7E 90%)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/satwik-udupi-37304a231',
    gradient: 'from-blue-500 to-blue-700',
    hoverGradient: 'radial-gradient(circle at 30% 107%, #0077B5 0%, #005885 90%)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Satwik-1234',
    gradient: 'from-gray-600 to-gray-800',
    hoverGradient: 'radial-gradient(circle at 30% 107%, #333 0%, #24292e 90%)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    name: 'Gmail',
    href: 'mailto:satwikudupi@gmail.com',
    gradient: 'from-red-500 to-red-600',
    hoverGradient: 'radial-gradient(circle at 30% 107%, #EA4335 0%, #C5221F 90%)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    ),
  },
  {
    name: 'Phone',
    href: 'tel:+919834300849',
    gradient: 'from-primary to-accent',
    hoverGradient: 'radial-gradient(circle at 30% 107%, hsl(217, 91%, 60%) 0%, hsl(180, 60%, 45%) 90%)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    gradient: 'from-blue-600 to-blue-800',
    hoverGradient: 'radial-gradient(circle at 30% 107%, #1877F2 0%, #0A5DC2 90%)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

const SocialMediaCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="social-card-container"
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative w-full max-w-sm mx-auto overflow-hidden rounded-2xl transition-all duration-500 hover:[transform:rotate3d(0.5,1,0,15deg)]"
        style={{
          transformStyle: 'preserve-3d',
          background: `linear-gradient(135deg, transparent 18.75%, hsl(var(--muted)/0.3) 31.25%, transparent 0),
            repeating-linear-gradient(45deg, hsl(var(--muted)/0.3) -6.25% 6.25%, hsl(var(--background)) 0 18.75%)`,
          backgroundSize: '60px 60px',
          boxShadow: 'rgba(100, 160, 200, 0.2) 0px 30px 30px -10px',
          border: '3px solid hsl(var(--border))'
        }}
      >
        {/* Logo/Icon Box */}
        <div 
          className="absolute top-4 right-4 h-14 w-14 bg-background border-2 border-primary p-2 z-20 rounded-lg shadow-lg"
          style={{ transform: 'translate3d(0px, 0px, 80px)' }}
        >
          <span className="block text-center text-primary text-[9px] font-bold uppercase">Connect</span>
          <span className="block text-center text-primary text-xl font-black">6+</span>
        </div>

        {/* Content Box */}
        <div 
          className="relative bg-gradient-accent p-8 pt-16"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Title */}
          <h3 
            className="text-2xl font-display font-black text-primary-foreground mb-2"
            style={{ transform: 'translate3d(0px, 0px, 50px)' }}
          >
            Let's Connect
          </h3>
          
          {/* Description */}
          <p 
            className="text-primary-foreground/80 text-sm font-medium mb-6"
            style={{ transform: 'translate3d(0px, 0px, 30px)' }}
          >
            Reach out on any platform
          </p>

          {/* Social Icons Grid */}
          <div 
            className="grid grid-cols-3 gap-3"
            style={{ transform: 'translate3d(0px, 0px, 40px)' }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="social-icon-box group relative p-4 bg-background/90 rounded-xl border border-border/50 hover:border-transparent transition-all duration-300 flex flex-col items-center justify-center gap-2 overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Hover gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{ background: social.hoverGradient }}
                />
                
                {/* Icon */}
                <div className={`relative z-10 text-foreground group-hover:text-white transition-colors duration-300`}>
                  {social.icon}
                </div>
                
                {/* Label */}
                <span className="relative z-10 text-[10px] font-bold uppercase text-muted-foreground group-hover:text-white transition-colors duration-300">
                  {social.name}
                </span>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl shadow-[0_0_20px_hsl(var(--primary)/0.5)]" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialMediaCard;
