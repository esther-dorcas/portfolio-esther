import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: language === 'fr' ? 'À propos' : 'About', href: '#about' },
    { name: language === 'fr' ? 'Travail' : 'Work', href: '#work' },
    { name: language === 'fr' ? 'Projets' : 'Projects', href: '#projects' },
    { name: language === 'fr' ? 'Contact' : 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = section;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-portfolio-dark/70 backdrop-blur-xl border-b border-indigo-500/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto pl-4 pr-4 sm:pl-6 sm:pr-4 lg:pl-8 lg:pr-4">
        <div className="flex justify-between items-center">
          {/* Tech Emblem Logo */}
          <a href="#home" className="flex items-center gap-3 group font-sans">
            {/* Glowing Tech Icon Shield */}
            <div className="relative flex items-center justify-center">
              {/* Glow Aura on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-purple to-portfolio-violet rounded-xl blur-md opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
              
              {/* Emblem Container */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1c1a3a] via-[#12102b] to-[#0a0918] p-[1px] border border-indigo-500/40 group-hover:border-portfolio-purple shadow-[0_4px_15px_rgba(99,102,241,0.3)] transition-all duration-300 flex items-center justify-center overflow-hidden">
                {/* Background Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-purple/20 via-transparent to-portfolio-violet/20 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Tech Icon Inside: Hexagon Circuit Node & EM Monogram */}
                <svg viewBox="0 0 40 40" className="w-6 h-6 z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Circuit Hexagon */}
                  <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" stroke="url(#logoGrad)" strokeWidth="1.5" strokeDasharray="60" className="group-hover:animate-pulse" />
                  
                  {/* Inner Tech Symbol </EM> */}
                  <text x="20" y="24" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="monospace" letterSpacing="-0.5">
                    &lt;E&gt;
                  </text>
                  
                  {/* Glowing Node Dot */}
                  <circle cx="34" cy="12" r="2" fill="#818cf8" />
                  <circle cx="6" cy="28" r="2" fill="#f472b6" />

                  <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Brand Title Label */}
            <span className="text-white font-extrabold text-xl tracking-tight flex items-center gap-1 group-hover:text-slate-100 transition-colors">
              {language === 'fr' ? 'Mon' : 'My'}<span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-purple to-portfolio-violet font-black"> {language === 'fr' ? 'Portfolio' : 'Portfolio'}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple animate-pulse ml-0.5" />
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <div className="flex bg-slate-950/40 border border-indigo-500/5 rounded-full p-1.5 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 relative ${
                    activeSection === link.href.substring(1)
                      ? 'text-white bg-indigo-500/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-indigo-500/20'
                      : 'text-slate-400 hover:text-white border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language switch */}
            <button 
              onClick={toggleLanguage}
              className="ml-3 px-3 py-1.5 border border-indigo-500/20 hover:border-indigo-500/40 bg-slate-900/40 rounded-full text-xs font-bold text-indigo-300 hover:text-indigo-200 hover:bg-indigo-500/10 transition-all uppercase cursor-pointer"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>

            {/* Hire Me / Contact Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-4 bg-gradient-to-r from-portfolio-purple to-portfolio-violet hover:from-indigo-500 hover:to-violet-500 text-white rounded-full px-5 py-2 text-sm font-semibold tracking-wide flex items-center gap-1.5 shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              {language === 'fr' ? 'Me Contacter' : 'Hire Me'}
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile Menu Button & Language Switch */}
          <div className="lg:hidden flex items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="px-2.5 py-1 border border-indigo-500/20 bg-slate-900/40 rounded-full text-xs font-bold text-indigo-300 transition-all uppercase cursor-pointer"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white bg-slate-900/40 border border-slate-800 rounded-lg focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-portfolio-dark/95 border-b border-indigo-500/10 backdrop-blur-2xl shadow-2xl"
          >
            <div className="px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                    activeSection === link.href.substring(1)
                      ? 'text-white bg-indigo-500/15 border border-indigo-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full justify-center bg-gradient-to-r from-portfolio-purple to-portfolio-violet text-white rounded-xl px-5 py-3 text-base font-semibold flex items-center gap-2 shadow-lg"
                >
                  {language === 'fr' ? 'Me Contacter' : 'Hire Me'}
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
