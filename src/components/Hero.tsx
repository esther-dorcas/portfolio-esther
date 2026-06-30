import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { Github, Linkedin } from './icons';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const [imgError, setImgError] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-28 pb-16 lg:pt-0 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                } 
              }
            }}
            className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
              }}
              className="text-cyan-500 font-medium tracking-wide uppercase mb-3 inline-block bg-cyan-950/50 px-4 py-1.5 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              {t('hero.badge')}
            </motion.p>
            <motion.h1 
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 mt-2"
            >
              Esther <span className="text-cyan-400 inline-block drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">MENSAH</span>
            </motion.h1>
            <motion.h2 
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
              }}
              className="text-xl sm:text-2xl text-slate-300 font-light mb-6"
            >
              {t('hero.role')}
            </motion.h2>
            <motion.p 
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 25 } }
              }}
              className="text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 text-lg"
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
              }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a 
                href="#projects" 
                className="group flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] w-full sm:w-auto"
              >
                {t('hero.projectsBtn')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all w-full sm:w-auto"
              >
                <Mail size={18} />
                {t('hero.contactBtn')}
              </a>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400, damping: 20 } }
              }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-6"
            >
              <a href="https://github.com/esther-dorcas" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/esthermensah1624/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 150,
              damping: 15,
              delay: 0.5
            }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full border-4 border-cyan-500/30 border-dashed animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-2 lg:inset-4 rounded-full border-4 border-blue-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="absolute inset-4 lg:inset-8 rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_60px_rgba(6,182,212,0.4)] bg-slate-800 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>
                {!imgError ? (
                  <img 
                    src="/esther.jpeg" 
                    alt="Esther MENSAH" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-800 text-6xl font-bold text-slate-600">
                    EM
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
