import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.education'), href: '#education' },
    { name: t('navbar.experience'), href: '#experience' },
    { name: t('navbar.projects'), href: '#projects' },
    { name: t('navbar.skills'), href: '#skills' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
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
    
    // Add a slight delay to allow the menu closing animation to start 
    // before triggering the scroll to ensure smooth UI and prevent browser cancellations
    setTimeout(() => {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
            E<span className="text-cyan-500">.</span>M
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-cyan-500 bg-slate-800/50'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 border border-cyan-500/50 rounded-full text-xs font-bold text-cyan-400 hover:bg-cyan-500/10 transition-colors uppercase"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>

          {/* Mobile Menu Button & Language Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 border border-cyan-500/50 rounded-full text-xs font-bold text-cyan-400 hover:bg-cyan-500/10 transition-colors uppercase"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === link.href.substring(1)
                      ? 'text-cyan-500 bg-slate-800/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
