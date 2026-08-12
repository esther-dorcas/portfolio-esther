import { motion } from 'motion/react';
import { Network, Code2, Database, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const technologies = [
  {
    name: "HTML5",
    icon: (
      <svg className="w-7 h-7 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    )
  },
  {
    name: "CSS3",
    icon: (
      <svg className="w-7 h-7 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"/>
      </svg>
    )
  },
  {
    name: "JavaScript",
    icon: (
      <svg className="w-7 h-7 text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    )
  },
  {
    name: "React",
    icon: (
      <svg className="w-7 h-7 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.29zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.662-1.958.479-.145.972-.271 1.476-.382.178.033.356.063.525.006zm7.26 0c.174-.057.35-.086.527-.02.508.112 1.003.239 1.487.386-.171.652-.394 1.31-.66 1.97-.2-.39-.41-.783-.64-1.174-.225-.396-.465-.783-.713-1.16zm3.063.675c.484.15.944.317 1.38.498 1.Boss.57 2.026 1.282 2.458 2.001-.344.698-1.35 1.373-2.504 1.955-.434-.742-.92-1.48-1.456-2.197.197-.752.34-1.5.423-2.257zM4.28 12.062c.62-.274 1.307-.521 2.04-.746-.338.748-.644 1.504-.91 2.26-.684-.383-1.31-.784-1.836-1.195.205-.1.45-.2.706-.32zm11.44 0c.256.12.5.22.706.32-.527.41-1.152.812-1.836 1.194-.265-.755-.572-1.51-.91-2.258.733.225 1.42.472 2.04.744zm-9.212 3.316c.2-.393.41-.786.636-1.176.225-.39.465-.777.706-1.153.24.376.48.762.705 1.158.228.39.438.783.638 1.174-.479.145-.974.271-1.476.382-.18-.033-.355-.063-.525-.006-.23-.126-.457-.252-.684-.38zm5.98 0c-.227.127-.454.253-.683.379-.17.057-.348.086-.526.02-.506-.112-1.002-.238-1.487-.386.17-.652.394-1.31.66-1.97.2.39.41.785.64 1.175.225.396.465.783.714 1.16zm-5.476 3.72c-.26-.127-.512-.26-.762-.394 1.805-.616 3.754-.972 5.862-.972 2.108 0 4.055.356 5.86.972-.25.134-.5.267-.76.394-1.714.777-3.426 1.166-5.1 1.166-1.674 0-3.386-.389-5.1-1.166z"/>
      </svg>
    )
  },
  {
    name: "Git",
    icon: (
      <svg className="w-7 h-7 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    )
  },
  {
    name: "Linux",
    icon: (
      <svg className="w-7 h-7 text-[#FCC624]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.276-.863.44-.187.146-.183.305-.124.504.045.16.167.3.337.413.383.272.957.4 1.405.325.435-.073.82-.332 1.07-.65.237-.303.351-.705.596-.936.287-.271.584-.48.82-.73.31.406.67.803 1.094 1.063.6.37 1.315.47 2.124.63l.076.017c.23.042.462.114.673.179.22.065.432.128.674.162.297.042.613.063.95.063.36 0 .742-.024 1.139-.073.477-.061.923-.19 1.284-.39.39-.215.655-.499.836-.84.117-.22.186-.46.177-.705.001-.083.001-.17.001-.26 0-.57-.049-1.15-.195-1.728-.33-1.342-1.097-2.716-1.812-4.029-.414-.762-.814-1.502-1.123-2.227-.31-.726-.528-1.457-.55-2.169-.002-.083-.003-.167-.003-.252.001-1.52.39-2.964 1.044-4.043.523-.874 1.195-1.48 1.951-1.62.268-.048.478-.024.62.048.164.082.258.213.27.387.022.292-.12.68-.37 1.004a1.474 1.474 0 01-1.035.55 1.71 1.71 0 00-.15.015l-.017.003c-.23.046-.427.112-.605.198a1.83 1.83 0 00-.481.325c-.285.27-.489.606-.614.993-.126.39-.177.838-.154 1.315.022.48.117.998.295 1.527.534 1.582 1.756 3.267 2.78 4.697.285.398.56.783.81 1.157.477.714.843 1.414 1.067 2.081.225.668.304 1.299.22 1.87l-.005.04c-.054.388-.154.71-.283.972-.128.262-.287.473-.478.633-.19.16-.412.274-.671.35a3.58 3.58 0 01-.94.121c-.295 0-.61-.027-.937-.08-.652-.106-1.32-.316-1.83-.596-.51-.28-.862-.625-1.008-1.02-.039-.101-.067-.204-.085-.31a1.09 1.09 0 00-.3.14c-.16.116-.271.266-.338.446-.068.18-.094.392-.072.62.022.228.09.47.213.714.247.492.685.963 1.275 1.354.59.393 1.33.706 2.175.911.845.206 1.795.31 2.8.31.888 0 1.826-.083 2.76-.272.933-.188 1.844-.495 2.648-.953.804-.459 1.502-1.073 1.954-1.84.343-.579.525-1.224.508-1.908-.017-.68-.24-1.385-.664-2.087-.424-.7-1.044-1.4-1.808-2.066-.764-.665-1.674-1.294-2.655-1.843-1.98-1.098-4.19-1.877-5.95-2.434-.88-.279-1.645-.525-2.221-.773-.576-.248-.957-.498-1.097-.766-.067-.131-.086-.27-.044-.415.042-.146.144-.3.306-.46a3.45 3.45 0 01.645-.461c.5-.278 1.12-.467 1.756-.53a6.87 6.87 0 011.944.075c.634.124 1.24.36 1.728.695.487.334.856.767 1.006 1.278.076.259.1.531.071.815-.025.24-.09.49-.196.737.32-.04.63-.16.907-.347.276-.186.52-.44.72-.745.197-.306.35-.664.432-1.05.083-.388.095-.81.02-1.243a3.773 3.773 0 00-.474-1.356 3.864 3.864 0 00-.97-1.1 4.396 4.396 0 00-1.455-.7c-.557-.152-1.16-.215-1.78-.18z"/>
      </svg>
    )
  },
  {
    name: "MySQL",
    icon: (
      <svg className="w-7 h-7 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.758 18.258c-.512.234-1.103.355-1.758.355-1.489 0-2.678-.598-2.678-2.222 0-1.611 1.196-2.222 2.678-2.222.655 0 1.246.121 1.758.355v3.734zm0-4.887c-.512-.234-1.103-.355-1.758-.355-1.489 0-2.678.598-2.678 2.222 0 1.611 1.196 2.222 2.678 2.222.655 0 1.246-.121 1.758-.355V13.37z"/>
      </svg>
    )
  }
];



export function Skills() {
  const { language } = useLanguage();
  const skillCategories = [
    {
      title: language === 'fr' ? "Télécoms & Réseaux" : "Telecoms & Networks",
      icon: <Network className="text-portfolio-purple" size={22} />,
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
      icon: <Code2 className="text-portfolio-violet" size={22} />,
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
      icon: <Database className="text-portfolio-purple" size={22} />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Git / GitHub", level: 85 },
        { name: "Cisco Packet Tracer", level: 90 },
        { name: "Android Studio", level: 75 }
      ]
    },
    {
      title: "IA & Soft Skills",
      icon: <Brain className="text-portfolio-violet" size={22} />,
      skills: [
        { name: "AI Tools (ChatGPT, Gemini)", level: 90 },
        { name: language === 'fr' ? "Travail en équipe" : "Teamwork", level: 95 },
        { name: "Communication", level: 90 },
        { name: language === 'fr' ? "Adaptabilité" : "Adaptability", level: 90 },
        { name: language === 'fr' ? "Esprit d'analyse" : "Analytical Mindset", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-portfolio-dark relative border-t border-indigo-500/5">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-portfolio-violet/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-portfolio-purple font-semibold tracking-widest uppercase text-xs inline-block bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-3">
            {language === 'fr' ? "MES COMPÉTENCES" : "MY SKILLS"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {language === 'fr' ? "Technologies que je maîtrise" : "Technologies I Master"}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-violet mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Technology icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-center text-xs font-semibold text-slate-500 tracking-widest uppercase mb-6">
            {language === 'fr' ? "TECHNOLOGIES QUE J'UTILISE" : "TECHNOLOGIES I WORK WITH"}
          </p>
          <div className="flex flex-wrap justify-center gap-5 items-center">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="p-3 bg-portfolio-card border border-indigo-500/10 rounded-2xl hover:border-indigo-500/30 hover:bg-portfolio-card-hover transition-all duration-300 shadow-md group hover:-translate-y-1"
                title={tech.name}
              >
                <div className="w-8 h-8 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-300">
                  {tech.icon}
                </div>
              </div>
            ))}
          </div>
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { type: "spring", stiffness: 150, damping: 15 }
                }
              }}
              className="bg-portfolio-card/30 border border-indigo-500/5 hover:border-indigo-500/15 rounded-3xl p-8 hover:bg-portfolio-card-hover/80 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3.5 mb-8">
                <div className="p-3 bg-slate-950/80 rounded-2xl border border-indigo-500/10 shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="font-semibold text-slate-300">{skill.name}</span>
                      <span className="font-bold text-portfolio-purple">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-950 rounded-full h-2 border border-slate-900 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.1 + (sIdx * 0.05), duration: 0.8, ease: "easeOut" }}
                        className="bg-gradient-to-r from-portfolio-purple to-portfolio-violet h-full rounded-full shadow-[0_0_10px_rgba(99,102,241,0.3)]"
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
