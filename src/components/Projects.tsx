import { motion } from 'motion/react';
import { ExternalLink, Monitor, Server, Database } from 'lucide-react';
import { Github } from './icons';
import { useLanguage } from '../context/LanguageContext';

export function Projects() {
  const { language } = useLanguage();
  const projects = [
    {
      title: language === 'fr' ? "Plateforme de Prise de Rendez-vous Hospitaliers" : "Medical Appointment Platform",
      category: "Fullstack Web",
      description: language === 'fr' 
        ? "Application web permettant aux patients de prendre rendez-vous en ligne avec des médecins, intégrant une gestion des disponibilités."
        : "Web application allowing patients to book appointments online with doctors, including availability management.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      icon: <Monitor size={24} className="text-cyan-400" />
    },
    {
      title: language === 'fr' ? "Site Web d'Entreprise" : "Corporate Website",
      category: "Frontend & Backend",
      description: language === 'fr'
        ? "Conception et développement d'un site vitrine dynamique pour présenter les services et activités d'une entreprise."
        : "Design and development of a dynamic showcase website to present the services and activities of a company.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      icon: <Server size={24} className="text-cyan-400" />
    },
    {
      title: language === 'fr' ? "Applications Académiques (Réseaux & BDD)" : "Academic Applications",
      category: "Software & Telecom",
      description: language === 'fr'
        ? "Série de projets d'étude couvrant la programmation logicielle, l'administration de bases de données, les réseaux et télécoms."
        : "Series of study projects covering software programming, database administration, networks, and telecoms.",
      technologies: ["Java", "C", "MySQL", "Linux"],
      icon: <Database size={24} className="text-cyan-400" />
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'fr' ? "Mes Projets" : "My Projects"}
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
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 50, rotateX: -15 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0, 
                  rotateX: 0,
                  transition: { type: "spring", stiffness: 200, damping: 20 }
                }
              }}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              className="bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden group hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] flex flex-col"
            >
              {/* Project Preview Placeholder */}
              <div className="h-48 bg-slate-900/80 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-slate-900 z-0"></div>
                <div className="z-10 p-4 bg-slate-800/80 rounded-full border border-slate-700 group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                  <a href="#" className="p-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink size={20} />
                  </a>
                  <a href="#" className="p-3 bg-slate-700 hover:bg-slate-600 text-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-cyan-400 mb-2 tracking-wider uppercase">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-xs font-medium bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/50"
                    >
                      {tech}
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
