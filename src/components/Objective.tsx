import { motion } from 'motion/react';
import { Target, Heart, BookOpen, Music, Laptop, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Objective() {
  const { t } = useLanguage();
  const interests = [
    { name: "Technologies numériques", icon: <Laptop size={20} /> },
    { name: "Lecture", icon: <BookOpen size={20} /> },
    { name: "Musique", icon: <Music size={20} /> },
    { name: "Tennis", icon: <Heart size={20} /> }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Objectif Professionnel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-500/20 text-cyan-400 rounded-xl">
                <Target size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{t('objective.title')}</h2>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">{t('objective.subtitle')}</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
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
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-colors"
                >
                  <CheckCircle2 className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-300 font-medium">
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
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Heart className="text-cyan-500" size={28} />
              {t('interests.title')}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all p-4 rounded-2xl group cursor-default"
                >
                  <div className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {interest.icon}
                  </div>
                  <span className="text-slate-200 font-medium">{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
