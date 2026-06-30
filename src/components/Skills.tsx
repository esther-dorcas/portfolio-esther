import { motion } from 'motion/react';
import { Network, Code2, Database, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Skills() {
  const { language } = useLanguage();
  const skillCategories = [
    {
      title: language === 'fr' ? "Télécoms & Réseaux" : "Telecoms & Networks",
      icon: <Network className="text-cyan-400" size={24} />,
      skills: [
        { name: language === 'fr' ? "Réseaux informatiques" : "Computer Networks", level: 90 },
        { name: language === 'fr' ? "Administration Linux" : "Linux Administration", level: 85 },
        { name: language === 'fr' ? "Configuration réseau" : "Network Configuration", level: 85 },
        { name: language === 'fr' ? "Transmission numérique" : "Digital Transmission", level: 80 },
        { name: language === 'fr' ? "Cybersécurité" : "Cybersecurity", level: 75 },
        { name: "IoT", level: 70 }
      ]
    },
    {
      title: language === 'fr' ? "Développement" : "Development",
      icon: <Code2 className="text-cyan-400" size={24} />,
      skills: [
        { name: "HTML / CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "PHP", level: 80 },
        { name: "Java", level: 75 },
        { name: "C", level: 70 }
      ]
    },
    {
      title: language === 'fr' ? "Bases de données & Outils" : "Databases & Tools",
      icon: <Database className="text-cyan-400" size={24} />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Git / GitHub / GitLab", level: 85 },
        { name: "Cisco Packet Tracer", level: 90 },
        { name: "Android Studio", level: 75 }
      ]
    },
    {
      title: "IA & Soft Skills",
      icon: <Brain className="text-cyan-400" size={24} />,
      skills: [
        { name: "ChatGPT, Gemini, Claude", level: 90 },
        { name: language === 'fr' ? "Travail en équipe" : "Teamwork", level: 95 },
        { name: "Communication", level: 90 },
        { name: language === 'fr' ? "Adaptabilité & Organisation" : "Adaptability & Organization", level: 90 },
        { name: language === 'fr' ? "Esprit d'analyse" : "Analytical Mindset", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'fr' ? "Mes Compétences" : "My Skills"}
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
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.8, x: idx % 2 === 0 ? -50 : 50 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  x: 0,
                  transition: { type: "spring", stiffness: 150, damping: 15 }
                }
              }}
              whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/50 shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-sm font-medium text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-2 border border-slate-800">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 + (sIdx * 0.1), duration: 0.8, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-600 to-cyan-400 h-2 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
