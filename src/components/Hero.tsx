import { motion } from 'motion/react';
import { ArrowUpRight, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-32 pb-20 lg:pt-24 relative overflow-hidden bg-portfolio-dark">

      {/* ── Rich atmospheric background ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(99,102,241,0.12)_0%,transparent_55%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_65%,rgba(139,92,246,0.08)_0%,transparent_55%)] pointer-events-none"></div>

      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:70px_70px] pointer-events-none"></div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-portfolio-purple/15 rounded-full blur-[80px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-40 w-[420px] h-[420px] bg-portfolio-violet/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-3/4 left-1/3 w-40 h-40 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left Content ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.18, delayChildren: 0.1 }
              }
            }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Main heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 180, damping: 20 } }
              }}
              className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-4 leading-tight"
            >
              {language === 'fr' ? "Bonjour! 👋🏿 Je suis" : "Hello! 👋🏿 I'm"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-purple via-violet-400 to-portfolio-violet drop-shadow-[0_0_40px_rgba(99,102,241,0.35)] font-extrabold block sm:inline">
                Esther MENSAH
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 180, damping: 22 } }
              }}
              className="text-xl sm:text-2xl xl:text-3xl font-semibold mb-4 tracking-tight"
            >
              <span className="text-slate-200">
                {language === 'fr'
                  ? <>Télécoms <span className="text-portfolio-purple">·</span> IoT <span className="text-portfolio-purple">·</span> Réseaux <span className="text-portfolio-purple">·</span> Développement</>
                  : <>Telecoms <span className="text-portfolio-purple">·</span> IoT <span className="text-portfolio-purple">·</span> Networks <span className="text-portfolio-purple">·</span> Development</>
                }
              </span>
            </motion.h2>

            {/* Italic tagline */}
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.6 } }
              }}
              className="text-slate-400 italic text-base sm:text-lg mb-8 font-light pl-4 border-l-2 border-indigo-500/30"
            >
              {language === 'fr'
                ? "Je construis, je connecte, j'apprends et j'évolue dans la tech."
                : "I build, I connect, I learn and I grow in tech."}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 280, damping: 22 } }
              }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-portfolio-purple to-portfolio-violet hover:from-indigo-500 hover:to-violet-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_4px_28px_rgba(99,102,241,0.45)] hover:shadow-[0_8px_36px_rgba(99,102,241,0.6)] w-full sm:w-auto transform hover:-translate-y-1 cursor-pointer text-sm tracking-wide"
              >
                {t('hero.projectsBtn')}
                <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700 hover:border-indigo-500/30 text-white px-8 py-3.5 rounded-full font-semibold transition-all w-full sm:w-auto transform hover:-translate-y-1 cursor-pointer text-sm tracking-wide backdrop-blur-sm"
              >
                <Download size={16} className="text-portfolio-violet" />
                {language === 'fr' ? 'Télécharger CV' : 'Download CV'}
              </a>
            </motion.div>

          </motion.div>

          {/* ── Right Visual Panel ── */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative mt-10 lg:mt-0">
            {/* Main Glowing Circle */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[460px] flex items-center justify-center">

              {/* Multi-layer glow */}
              <div className="absolute w-[75%] h-[75%] bg-gradient-to-tr from-portfolio-purple to-portfolio-violet rounded-full opacity-25 blur-[60px] animate-pulse-slow"></div>
              <div className="absolute w-[90%] h-[90%] bg-portfolio-purple/5 rounded-full blur-2xl"></div>

              {/* Outer orbital rings */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/12 border-dashed animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-5 rounded-full border border-violet-500/8 animate-[spin_45s_linear_infinite_reverse]"></div>
              <div className="absolute inset-12 rounded-full border border-indigo-400/6 animate-[spin_30s_linear_infinite]"></div>

              {/* Orbit dots */}
              {[0, 120, 240].map((deg, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full animate-[spin_20s_linear_infinite]"
                  style={{ animationDelay: `${i * -6}s` }}
                >
                  <div
                    className="absolute w-2 h-2 bg-portfolio-purple rounded-full top-1 left-1/2 -translate-x-1/2 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                    style={{ transform: `rotate(${deg}deg) translateX(140px) rotate(-${deg}deg)` }}
                  ></div>
                </div>
              ))}

              {/* Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
                className="absolute inset-2 flex items-center justify-center z-10"
              >
                <img
                  src="/esther.png"
                  alt="Esther MENSAH"
                  className="w-full h-full object-contain filter drop-shadow-[0_24px_60px_rgba(99,102,241,0.35)] animate-float"
                />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
