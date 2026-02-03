import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Linkedin, Mail, Phone, MessageCircle, Github, 
  ArrowUp, Terminal, Code, GitBranch, Cpu
} from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

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
    label: 'Call', 
    href: 'tel:+919834300849',
  },
  { 
    icon: MessageCircle, 
    label: 'WhatsApp', 
    href: 'https://wa.me/919834300849?text=Hi%20Satwik,%20I\'m%20interested%20in%20your%20GIS/Hydrology%20services',
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
    <footer className="relative overflow-hidden bg-[#0d1117] border-t border-[#30363d]">
      {/* Terminal-style header bar */}
      <div className="bg-[#161b22] border-b border-[#30363d]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded bg-[#0d1117] border border-[#30363d]">
                <Terminal className="w-3.5 h-3.5 text-[#7d8590]" />
                <span className="text-xs font-mono text-[#7d8590]">satwik@portfolio ~ %</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-[#7d8590]">
              <div className="hidden md:flex items-center gap-2 text-xs font-mono">
                <GitBranch className="w-3.5 h-3.5" />
                <span>main</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs font-mono">
                <Cpu className="w-3.5 h-3.5" />
                <span>v2.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Terminal Output */}
          <div className="lg:col-span-5">
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#27c93f]">→</span>
                <span className="text-[#7d8590]">whoami</span>
              </div>
              <div className="pl-4 text-[#e6edf3]">
                Satwik Udupi
              </div>
              <div className="flex items-start gap-2 mt-3">
                <span className="text-[#27c93f]">→</span>
                <span className="text-[#7d8590]">cat role.txt</span>
              </div>
              <div className="pl-4 text-[#58a6ff]">
                Agricultural Engineer | Hydrologist | GIS Analyst
              </div>
              <div className="flex items-start gap-2 mt-3">
                <span className="text-[#27c93f]">→</span>
                <span className="text-[#7d8590]">echo $EXPERTISE</span>
              </div>
              <div className="pl-4 text-[#a5d6ff] flex flex-wrap gap-2">
                {['HEC-RAS', 'HEC-HMS', 'ArcGIS', 'Python'].map((skill) => (
                  <span key={skill} className="px-2 py-0.5 rounded bg-[#21262d] border border-[#30363d] text-xs">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-start gap-2 mt-3">
                <span className="text-[#27c93f]">→</span>
                <span className="text-[#7d8590]">status</span>
              </div>
              <div className="pl-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse" />
                <span className="text-[#27c93f]">Available for projects</span>
              </div>
            </div>
          </div>

          {/* Middle - Quick Nav */}
          <div className="lg:col-span-3">
            <div className="font-mono text-sm mb-4">
              <span className="text-[#7d8590]">// navigation</span>
            </div>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center gap-2 w-full text-left py-1.5 px-2 rounded text-sm text-[#7d8590] hover:text-[#e6edf3] hover:bg-[#21262d] transition-colors font-mono group"
                >
                  <Code className="w-3.5 h-3.5 text-[#58a6ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{link.label}</span>
                </button>
              ))}
              <Link
                to="/pravaha-tattva"
                className="flex items-center gap-2 w-full text-left py-1.5 px-2 rounded text-sm text-[#58a6ff] hover:text-[#e6edf3] hover:bg-[#21262d] transition-colors font-mono group"
              >
                <Code className="w-3.5 h-3.5 text-[#58a6ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Pravaha Tattva →</span>
              </Link>
            </div>
          </div>

          {/* Right - Connect */}
          <div className="lg:col-span-4">
            <div className="font-mono text-sm mb-4">
              <span className="text-[#7d8590]">// connect</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#21262d] border border-[#30363d] text-[#7d8590] hover:text-[#e6edf3] hover:border-[#58a6ff] hover:bg-[#21262d]/80 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#21262d] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#7d8590]">
            <span className="text-[#27c93f]">$</span> echo "© {new Date().getFullYear()} Satwik Udupi. Built with 💧 for sustainable water solutions"
          </div>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#21262d] border border-[#30363d] hover:border-[#58a6ff] transition-colors text-sm text-[#7d8590] hover:text-[#e6edf3] font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-4 h-4" />
            scroll-to-top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
