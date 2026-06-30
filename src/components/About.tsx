import { motion } from 'motion/react';
import { Target, Lightbulb, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Zap className="text-cyan-400" size={24} />,
      title: t('about.cards.1.title'),
      desc: t('about.cards.1.desc')
    },
    {
      icon: <Target className="text-cyan-400" size={24} />,
      title: t('about.cards.2.title'),
      desc: t('about.cards.2.desc')
    },
    {
      icon: <Lightbulb className="text-cyan-400" size={24} />,
      title: t('about.cards.3.title'),
      desc: t('about.cards.3.desc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-slate-300 text-lg leading-relaxed"
          >
            <p>
              {t('about.text1')}
            </p>
            <p>
              {t('about.text2')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {cards.map((card, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl text-center hover:bg-slate-800 transition-colors"
                >
                  <div className="flex justify-center mb-3 bg-slate-900/80 w-12 h-12 mx-auto items-center rounded-full shadow-inner">
                    {card.icon}
                  </div>
                  <h3 className="text-white font-medium mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-400">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative hidden md:block"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative border border-slate-800">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
              <img 
                src="/esther.jpeg" 
                alt="Esther au travail" 
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
