import { Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© 2025 Satwik Udupi. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>for sustainable water solutions</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:satwik.udupi@email.com"
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          Agricultural Engineer | GIS & Hydrology | Delivering Sustainable Land & Water Solutions
        </div>
      </div>
    </footer>
  );
};

export default Footer;
