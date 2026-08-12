import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Projects() {
  const { language } = useLanguage();

  const projects = [
    {
      num: "01",
      title: language === 'fr' 
        ? "Plateforme de Géolocalisation & Prise de RDV Médicaux" 
        : "Geolocation & Medical Appointment Platform",
      category: language === 'fr' 
        ? "Fullstack Web, Géolocalisation & BDD" 
        : "Fullstack Web, Geolocation & Database",
      description: language === 'fr' 
        ? "Application web permettant aux patients de localiser des cabinets médicaux et de prendre rendez-vous en ligne avec des médecins, intégrant une gestion des disponibilités."
        : "Web application allowing patients to locate medical practices and book appointments online with doctors, including availability management.",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Leaflet API"],
      image: "/medical_booking.png"
    },
    {
      num: "02",
      title: language === 'fr' ? "Site Web d'Entreprise" : "Corporate Website",
      category: language === 'fr' ? "Frontend & Backend" : "Frontend & Backend",
      description: language === 'fr'
        ? "Conception et développement d'un site vitrine dynamique et responsive pour présenter les services et activités d'une entreprise technologique."
        : "Design and development of a dynamic and responsive showcase website to present the services and activities of a tech company.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Responsive Design"],
      image: "/corporate_web.png"
    },
    {
      num: "03",
      title: language === 'fr' ? "Applications Académiques (Réseaux & BDD)" : "Academic Applications (Networks & Databases)",
      category: language === 'fr' ? "Logiciel & Télécoms" : "Software & Telecoms",
      description: language === 'fr'
        ? "Série de projets d'étude couvrant la programmation logicielle, l'administration de bases de données, la configuration réseau et les télécoms."
        : "Series of study projects covering software programming, database administration, network configuration, and telecoms.",
      technologies: ["Java", "C Lang", "MySQL", "Linux", "Packet Tracer"],
      image: "/academic_telecom.png"
    },
    {
      num: "04",
      title: language === 'fr' ? "Application de Gestion de Cuniculture" : "Rabbit Farming (Cuniculture) Management App",
      category: language === 'fr' ? "IoT, Frontend & Gestion" : "IoT, Frontend & Management",
      description: language === 'fr'
        ? "Application de gestion pour un élevage de lapins, intégrant le suivi des populations, l'alimentation, et des indicateurs de capteurs d'environnement."
        : "Management application for a rabbit farm, integrating population tracking, feeding schedules, and environmental sensor indicators.",
      technologies: ["React", "HTML5", "CSS3", "JavaScript", "IoT Sensors"],
      image: "/cuniculture_app.png"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-portfolio-dark relative border-t border-indigo-500/5">
      {/* Background decoration grid and glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(99,102,241,0.03)_0%,transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_70%,rgba(139,92,246,0.03)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-portfolio-purple font-semibold tracking-widest uppercase text-xs bg-indigo-500/8 px-4 py-1.5 rounded-full border border-indigo-500/20 mb-5">
            <Sparkles size={12} />
            {language === 'fr' ? "PROJETS RÉCENTS" : "FEATURED PROJECTS"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {language === 'fr' ? "Quelques Projets Réalisés" : "Some of My Recent Work"}
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base font-light leading-relaxed">
            {language === 'fr'
              ? "Découvrez mes réalisations alliant développement logiciel, solutions web et technologies réseaux."
              : "Discover my projects combining software development, web solutions, and network technologies."}
          </p>
          <div className="flex items-center justify-center gap-3 mt-7">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-portfolio-purple"></div>
            <div className="w-2 h-2 rounded-full bg-portfolio-purple animate-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-portfolio-violet"></div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { type: "spring", stiffness: 120, damping: 18 }
                }
              }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-portfolio-card/45 border border-indigo-500/5 hover:border-indigo-500/25 rounded-3xl overflow-hidden group flex flex-col shadow-xl hover:shadow-[0_20px_40px_rgba(99,102,241,0.12)] transition-all duration-400"
            >
              {/* Project Preview Image */}
              <div className="h-64 bg-slate-950 relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500 select-none"
                  draggable={false}
                />
                
                {/* Number index */}
                <div className="absolute top-4 left-4 text-xs font-bold text-white bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 font-mono z-10">
                  {project.num}
                </div>

                {/* Hover overlay link */}
                <div className="absolute inset-0 bg-portfolio-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <a 
                    href="#contact" 
                    className="p-3 bg-portfolio-purple hover:bg-portfolio-violet text-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-md cursor-pointer"
                  >
                    <ArrowUpRight size={22} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-portfolio-purple mb-2.5 tracking-widest uppercase">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-portfolio-purple transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-900/60">
                  {project.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-semibold bg-slate-950/60 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-900/80 hover:border-indigo-500/20 transition-colors"
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
