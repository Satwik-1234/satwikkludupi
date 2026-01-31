import { Link } from 'react-router-dom';
import { 
  Linkedin, Mail, Phone, MessageCircle, Github, 
  Terminal, ArrowUp, ChevronRight
} from 'lucide-react';

const quickLinks = [
  { 
    icon: Linkedin, 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/satwik-udupi-37304a231',
  },
  { 
    icon: Github, 
    label: 'GitHub', 
    href: 'https://github.com/Satwik-1234',
  },
  { 
    icon: Mail, 
    label: 'Email', 
    href: 'mailto:satwikudupi@gmail.com',
  },
  { 
    icon: Phone, 
    label: 'Phone', 
    href: 'tel:+919834300849',
  },
  { 
    icon: MessageCircle, 
    label: 'WhatsApp', 
    href: 'https://wa.me/919834300849?text=Hi%20Satwik,%20I\'m%20interested%20in%20your%20GIS/Hydrology%20services',
  },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="relative border-t border-border/20 bg-card/10">
      <div className="container mx-auto px-4 py-8">
        {/* Terminal-style footer */}
        <div className="max-w-4xl mx-auto">
          {/* Terminal window */}
          <div className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/20 bg-card/60">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-xs text-muted-foreground/60 ml-3 font-mono">footer.sh</span>
              </div>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                <ArrowUp className="w-3 h-3" />
                scroll_top()
              </button>
            </div>
            
            {/* Content */}
            <div className="p-5 font-mono text-sm">
              {/* Brand */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary/10 border border-primary/20">
                  <Terminal className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs text-primary font-medium">satwik@hydrology</span>
                </div>
                <span className="text-muted-foreground/60">~</span>
                <span className="text-muted-foreground text-xs">GIS • Hydrology • Engineering</span>
              </div>

              {/* Links as command outputs */}
              <div className="space-y-2 mb-4">
                <div className="text-muted-foreground/80">
                  <span className="text-primary">$</span> cat links.txt
                </div>
                <div className="flex flex-wrap gap-2 pl-4">
                  {quickLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-card/50 border border-border/30 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all text-xs"
                    >
                      <link.icon className="w-3 h-3" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services link */}
              <div className="space-y-2 mb-4">
                <div className="text-muted-foreground/80">
                  <span className="text-primary">$</span> ./services
                </div>
                <div className="pl-4">
                  <Link 
                    to="/pravaha-tattva"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-foreground hover:border-primary/40 transition-colors text-xs"
                  >
                    <ChevronRight className="w-3 h-3 text-primary" />
                    Pravaha Tattva Solutions
                  </Link>
                </div>
              </div>

              {/* Copyright */}
              <div className="pt-4 border-t border-border/20">
                <div className="text-muted-foreground/60 text-xs">
                  <span className="text-primary">$</span> echo "© {new Date().getFullYear()} Satwik Udupi. Crafted for sustainable water solutions."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
