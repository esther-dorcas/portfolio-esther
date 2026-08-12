import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Education() {
  const { t, language } = useLanguage();
  const educationData = [
    {
      degree: t('education.degree1'),
      institution: t('education.school1'),
      period: "2023 - 2026",
      location: "Yamoussoukro",
      description: t('education.desc1')
    },
    {
      degree: t('education.degree2'),
      institution: t('education.school2'),
      period: "2020 - 2023",
      location: "Yamoussoukro",
      description: t('education.desc2')
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-portfolio-dark">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-portfolio-purple/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-portfolio-purple font-semibold tracking-widest uppercase text-xs inline-block bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-3">
            {language === 'fr' ? "PARCOURS" : "EDUCATION"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{t('education.title')}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-violet mx-auto rounded-full mt-4"></div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
          className="relative border-l-2 border-indigo-500/15 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2"
        >
          {educationData.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, x: idx % 2 === 0 ? -50 : 50 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  transition: { type: "spring", stiffness: 150, damping: 15 } 
                }
              }}
              whileHover={{ scale: 1.01, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className={`relative mb-14 md:w-1/2 ${
                idx % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              } pl-8 md:pl-${idx % 2 === 0 ? '0' : '12'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-portfolio-violet border-4 border-portfolio-dark shadow-[0_0_0_2px_rgba(139,92,246,0.3)] 
                ${idx % 2 === 0 ? "left-[-11px] md:-right-2.5 md:left-auto" : "left-[-11px] md:-left-2.5"}
              `}></div>
              
              <div className="bg-portfolio-card/40 hover:bg-portfolio-card-hover/80 transition-all duration-300 border border-indigo-500/5 hover:border-indigo-500/20 p-6 sm:p-8 rounded-2xl shadow-xl relative group">
                <div className="flex items-center gap-2 text-portfolio-purple font-semibold mb-3 text-xs tracking-wider uppercase">
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1.5 flex items-start gap-2.5">
                  <GraduationCap className="shrink-0 mt-1 text-slate-400 group-hover:text-portfolio-purple transition-colors" size={22} />
                  {item.degree}
                </h3>
                <h4 className="text-slate-300 font-semibold mb-4 text-sm">{item.institution}</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
