import { Link } from 'react-router-dom';
import { 
  Linkedin, Mail, Heart, Phone, MessageCircle, Github, 
  ExternalLink, ArrowUp, Waves, Briefcase
} from 'lucide-react';

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

const quickLinks = [
  { 
    icon: Linkedin, 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/satwik-udupi-37304a231',
    color: 'text-[#0077B5]',
    hoverBg: 'hover:bg-[#0077B5]/10'
  },
  { 
    icon: Github, 
    label: 'GitHub', 
    href: 'https://github.com/Satwik-1234',
    color: 'text-foreground',
    hoverBg: 'hover:bg-muted'
  },
  { 
    icon: Mail, 
    label: 'Email', 
    href: 'mailto:satwikudupi@gmail.com',
    color: 'text-primary',
    hoverBg: 'hover:bg-primary/10'
  },
  { 
    icon: Phone, 
    label: 'Call', 
    href: 'tel:+919834300849',
    color: 'text-primary',
    hoverBg: 'hover:bg-primary/10'
  },
  { 
    icon: MessageCircle, 
    label: 'WhatsApp', 
    href: 'https://wa.me/919834300849?text=Hi%20Satwik,%20I\'m%20interested%20in%20your%20GIS/Hydrology%20services',
    color: 'text-green-500',
    hoverBg: 'hover:bg-green-500/10'
  },
];

const handleNavClick = (href: string) => {
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/30 bg-card/20 backdrop-blur-xl">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {/* Brand & Message */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-primary" />
              <span className="text-xl font-display font-bold gradient-text">Satwik Udupi</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-xs">
              Agricultural Engineer specializing in GIS, hydrology, and sustainable water management solutions.
            </p>
            <Link 
              to="/pravaha-tattva"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-accent text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Briefcase className="w-4 h-4" />
              Pravaha Tattva Solutions
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <h4 className="font-display font-bold mb-4 text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="lg:col-span-1">
            <h4 className="font-display font-bold mb-4 text-foreground">Connect</h4>
            <div className="flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-card/50 border border-border/30 ${link.hoverBg} transition-colors`}
                >
                  <link.icon className={`w-4 h-4 ${link.color}`} />
                  <span className="text-sm text-muted-foreground">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/30 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {new Date().getFullYear()} Satwik Udupi. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>for sustainable water solutions</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/30 hover:border-primary/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
