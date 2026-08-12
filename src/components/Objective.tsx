import { motion } from 'motion/react';
import { Target, Heart, BookOpen, Music, Laptop, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Objective() {
  const { t } = useLanguage();
  const interests = [
    { name: t('interests.digital'), icon: <Laptop size={20} /> },
    { name: t('interests.reading'), icon: <BookOpen size={20} /> },
    { name: t('interests.music'), icon: <Music size={20} /> },
    { name: t('interests.tennis'), icon: <Heart size={20} /> }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/20 border-y border-indigo-500/5">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-portfolio-purple/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-violet/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Objectif Professionnel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-500/10 text-portfolio-purple rounded-xl border border-indigo-500/20">
                <Target size={26} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{t('objective.title')}</h2>
            </div>
            
            <h3 className="text-xl font-bold text-slate-200 mb-2">{t('objective.subtitle')}</h3>
            <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed mb-8">
              {t('objective.description')}
            </p>

            <div className="space-y-4">
              {[0, 1, 2].map((idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-portfolio-card/30 border border-indigo-500/5 hover:border-indigo-500/15 transition-all duration-300 hover:bg-portfolio-card/50"
                >
                  <CheckCircle2 className="text-portfolio-violet mt-0.5 flex-shrink-0" size={18} />
                  <p className="text-slate-300 font-medium text-sm sm:text-base">
                    {t(`objective.points.${idx}`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Centres d'intérêt */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-6"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-indigo-500/10 text-portfolio-violet rounded-xl border border-indigo-500/20">
                <Heart size={26} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {t('interests.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 bg-portfolio-card/30 border border-indigo-500/5 hover:border-indigo-500/20 hover:bg-portfolio-card-hover/60 transition-all p-4.5 rounded-2xl group cursor-default shadow-md"
                >
                  <div className="text-slate-400 group-hover:text-portfolio-purple transition-colors p-2 bg-slate-900/60 rounded-xl border border-slate-800">
                    {interest.icon}
                  </div>
                  <span className="text-slate-300 font-semibold group-hover:text-white transition-colors">{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
