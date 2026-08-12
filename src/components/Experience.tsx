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
    <section id="experience" className="py-24 bg-portfolio-dark/95 relative border-t border-indigo-500/5">
      {/* Background decoration */}
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-portfolio-violet/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-portfolio-purple font-semibold tracking-widest uppercase text-xs inline-block bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-3">
            {language === 'fr' ? "EXPÉRIENCES" : "EXPERIENCE"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {language === 'fr' ? "Expériences Professionnelles" : "Professional Experience"}
          </h2>
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
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 30 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { type: "spring", stiffness: 200, damping: 20 }
                }
              }}
              whileHover={{ scale: 1.01, y: -5, transition: { duration: 0.3 } }}
              className="bg-portfolio-card/40 border border-indigo-500/5 hover:border-indigo-500/20 hover:bg-portfolio-card-hover/90 transition-all duration-300 p-8 rounded-2xl group shadow-lg hover:shadow-[0_15px_35px_rgba(99,102,241,0.1)]"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-portfolio-purple transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-slate-300 font-semibold text-base mt-2 flex items-center gap-2">
                    <Briefcase size={16} className="text-portfolio-violet" />
                    {exp.company}
                  </p>
                </div>
                <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap tracking-wide">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                {exp.description}
              </p>
              
              <div className="pt-4 border-t border-slate-900">
                <h4 className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">
                  {language === 'fr' ? "Compétences acquises :" : "Skills acquired:"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="flex items-center gap-1.5 text-xs bg-slate-950/40 text-slate-300 border border-slate-900 px-3 py-1.5 rounded-xl group-hover:border-indigo-500/10 transition-colors"
                    >
                      <CheckCircle2 size={13} className="text-portfolio-violet" />
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
