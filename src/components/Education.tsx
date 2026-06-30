import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Education() {
  const { t } = useLanguage();
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
    <section id="education" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('education.title')}</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
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
          className="relative border-l-2 border-slate-700/50 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2"
        >
          {educationData.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, x: idx % 2 === 0 ? -50 : 50, rotateY: idx % 2 === 0 ? -15 : 15 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  rotateY: 0,
                  transition: { type: "spring", stiffness: 150, damping: 15 } 
                }
              }}
              whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className={`relative mb-12 md:w-1/2 ${
                idx % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              } pl-8 md:pl-${idx % 2 === 0 ? '0' : '12'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-1 w-6 h-6 rounded-full bg-cyan-500 border-4 border-slate-900 shadow-[0_0_0_2px_rgba(6,182,212,0.3)] 
                ${idx % 2 === 0 ? "left-[-1.1rem] md:-right-3 md:left-auto" : "left-[-1.1rem] md:-left-3"}
              `}></div>
              
              <div className="bg-slate-800/40 hover:bg-slate-800/60 transition-colors border border-slate-700/50 p-6 rounded-2xl shadow-lg relative group">
                {/* Arrow */}
                <div className={`absolute top-4 w-4 h-4 bg-slate-800/40 border-slate-700/50 rotate-45 hidden md:block
                  ${idx % 2 === 0 ? "right-[-9px] border-t border-r" : "left-[-9px] border-b border-l"}
                `}></div>

                <div className="flex items-center gap-2 text-cyan-400 font-medium mb-2 text-sm">
                  <Calendar size={16} />
                  <span>{item.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 flex items-start gap-2">
                  <GraduationCap className="shrink-0 mt-1 text-slate-400 group-hover:text-cyan-400 transition-colors" size={20} />
                  {item.degree}
                </h3>
                <h4 className="text-slate-300 font-medium mb-3">{item.institution}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
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
