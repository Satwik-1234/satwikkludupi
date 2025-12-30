import { Linkedin, Mail, Heart, Phone, MessageCircle, Waves, Github } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Previous Work', href: '#map-gallery' },
  { label: 'Contact', href: '#contact' },
];

const handleNavClick = (href: string) => {
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: 'smooth' });
};

const Footer = () => {
  const phoneNumber = '+919834300849';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hi%20Satwik,%20I'm%20interested%20in%20your%20GIS/Hydrology%20services`;
  const githubUrl = 'https://github.com/Satwik-1234';

  return (
    <footer className="pt-12 pb-8 border-t border-border/50 relative overflow-hidden">
      {/* River Illustration Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg 
          className="absolute bottom-0 left-0 w-full h-24 opacity-10"
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C120,90 240,30 360,60 C480,90 600,30 720,60 C840,90 960,30 1080,60 C1200,90 1320,30 1440,60 L1440,120 L0,120 Z" 
            fill="url(#riverGradient)"
          />
          <path 
            d="M0,80 C100,50 200,100 320,70 C440,40 560,100 680,70 C800,40 920,100 1040,70 C1160,40 1280,100 1440,70 L1440,120 L0,120 Z" 
            fill="url(#riverGradient2)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(217 91% 60%)" />
              <stop offset="50%" stopColor="hsl(180 60% 45%)" />
              <stop offset="100%" stopColor="hsl(168 76% 30%)" />
            </linearGradient>
            <linearGradient id="riverGradient2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="hsl(217 91% 60%)" />
              <stop offset="100%" stopColor="hsl(180 60% 45%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* River Message */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <Waves className="w-6 h-6 text-primary" />
            <span className="text-xl font-display font-bold gradient-text">
              Looking forward to delivering your water solutions!
            </span>
            <Waves className="w-6 h-6 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">Pravaha Tattva Solutions • Founded by Satwik Udupi</p>
        </div>

        {/* Navigation Links */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-1 md:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Quick Access */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a 
            href="https://www.linkedin.com/in/satwik-udupi-37304a231" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors text-sm"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors text-sm"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:satwikudupi@gmail.com"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a 
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call</span>
          </a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:text-green-500 hover:bg-green-500/10 transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© 2025 Satwik Udupi. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>for sustainable water solutions</span>
            </div>

            <div className="text-xs text-muted-foreground text-center md:text-right">
              Agricultural Engineer | GIS & Hydrology Professional
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
