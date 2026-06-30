import { motion } from 'motion/react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Experience() {
  const { language } = useLanguage();
  const experiences = [
    {
      title: language === 'fr' ? "Stage Académique" : "Academic Internship",
      company: "Entreprise de Cuniculture",
      period: "2025",
      description: language === 'fr' 
        ? "Conception d'une application web vitrine et d'outils numériques pour une entreprise de cuniculture."
        : "Design of a showcase web application and digital tools for a rabbit farming company.",
      skills: language === 'fr' 
        ? ["Travail en équipe", "Connecteam", "Développement web", "Communication"]
        : ["Teamwork", "Connecteam", "Web Development", "Communication"]
    },
    {
      title: language === 'fr' ? "Stage Académique" : "Academic Internship",
      company: language === 'fr' ? "Projets de Transformation Digitale" : "Digital Transformation Projects",
      period: "2026",
      description: language === 'fr' 
        ? "Développement d'applications web, conception d'interfaces utilisateurs intuitives et formulaires numériques."
        : "Web application development, intuitive user interface design, and digital forms.",
      skills: language === 'fr' 
        ? ["Gestion de projet", "Interface Utilisateur", "Formulaires numériques"]
        : ["Project Management", "User Interface", "Digital Forms"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'fr' ? "Expériences Professionnelles" : "Professional Experience"}
          </h2>
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
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30, rotateZ: idx % 2 === 0 ? -2 : 2 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  rotateZ: 0,
                  transition: { type: "spring", stiffness: 200, damping: 20 }
                }
              }}
              whileHover={{ scale: 1.03, rotateZ: 0, y: -5, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              className="bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all p-8 rounded-2xl group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-slate-300 font-medium text-lg mt-1 flex items-center gap-2">
                    <Briefcase size={16} className="text-cyan-500" />
                    {exp.company}
                  </p>
                </div>
                <span className="bg-slate-900/80 border border-slate-700 text-cyan-400 text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                  {language === 'fr' ? "Compétences acquises :" : "Skills acquired:"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="flex items-center gap-1.5 text-sm bg-slate-900/50 text-slate-300 border border-slate-700/50 px-3 py-1.5 rounded-lg"
                    >
                      <CheckCircle2 size={14} className="text-cyan-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
