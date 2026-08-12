import { motion } from 'motion/react';
import { GraduationCap, Globe, Cpu, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { language } = useLanguage();

  const summaryCards = [
    {
      icon: <GraduationCap size={32} className="text-portfolio-purple" />,
      title: language === 'fr' ? "Formation" : "Background",
      desc: language === 'fr'
        ? "Diplômée en Télécoms & TIC, passionnée par l'IoT, les réseaux et le développement."
        : "Telecom & ICT graduate, passionate about IoT, networks and development.",
      glow: "from-portfolio-purple/20 to-indigo-500/5"
    },
    {
      icon: <Globe size={32} className="text-portfolio-violet" />,
      title: language === 'fr' ? "Ambition" : "Ambition",
      desc: language === 'fr'
        ? "Contribuer à un monde plus connecté, faire communiquer objets, systèmes et personnes."
        : "Contribute to a more connected world — making objects, systems and people communicate.",
      glow: "from-portfolio-violet/20 to-violet-500/5"
    },
    {
      icon: <Cpu size={32} className="text-indigo-400" />,
      title: language === 'fr' ? "Centres d'intérêt" : "Interests",
      desc: language === 'fr'
        ? "Capteurs, réseaux, données, applications et systèmes intelligents."
        : "Sensors, networks, data, applications and intelligent systems.",
      glow: "from-indigo-400/20 to-cyan-500/5"
    },
    {
      icon: <Rocket size={32} className="text-portfolio-purple" />,
      title: language === 'fr' ? "État d'esprit" : "Mindset",
      desc: language === 'fr'
        ? "Construire, expérimenter, apprendre — transformer des idées en solutions connectées."
        : "Build, experiment, learn — turning ideas into connected, useful solutions.",
      glow: "from-portfolio-purple/20 to-violet-400/5"
    }
  ];

  return (
    <section id="about" className="py-24 bg-portfolio-dark relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column - Text Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Section Badge */}
            <span className="text-portfolio-purple font-semibold tracking-widest uppercase text-xs inline-block bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              {language === 'fr' ? "À PROPOS DE MOI" : "ABOUT ME"}
            </span>

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              {language === 'fr'
                ? <>IoT, ça vous dit quelque chose ? <span className="text-portfolio-purple">🌐</span></>
                : <>IoT, does that ring a bell? <span className="text-portfolio-purple">🌐</span></>}
            </h2>

            {/* Descriptions */}
            <div className="space-y-4 text-slate-400 text-base sm:text-lg font-light leading-relaxed">
              <p>
                {language === 'fr'
                  ? "Salut ! Je suis Esther Mensah, diplômée en Télécommunications & TIC, passionnée par l'IoT, les réseaux et le développement."
                  : "Hi! I'm Esther Mensah, a Telecommunications & ICT graduate, passionate about IoT, networks and development."}
              </p>
              <p>
                {language === 'fr'
                  ? <><span className="text-white font-medium">Mon ambition ?</span> Contribuer à la création d'un monde plus connecté, en créant des solutions capables de faire communiquer les objets, les systèmes et les personnes.</>
                  : <><span className="text-white font-medium">My ambition?</span> To help build a more connected world by creating solutions that enable objects, systems and people to communicate.</>}
              </p>
              <p>
                {language === 'fr'
                  ? "Je m'intéresse à tout ce qui se trouve derrière ces technologies : capteurs, réseaux, données, applications et systèmes intelligents."
                  : "I'm interested in everything behind these technologies: sensors, networks, data, applications and intelligent systems."}
              </p>
              <p>
                {language === 'fr'
                  ? "Je construis des projets, j'expérimente de nouvelles technologies et je continue d'apprendre pour transformer des idées en solutions connectées et utiles."
                  : "I build projects, experiment with new technologies and keep learning to turn ideas into connected, useful solutions."}
              </p>
              <p className="text-white font-medium">
                {language === 'fr' ? "Bienvenue dans mon univers. 🌐💙" : "Welcome to my world. 🌐💙"}
              </p>
            </div>

            {/* Contact Link */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-indigo-500/30 hover:border-indigo-500/60 bg-slate-900/60 hover:bg-slate-900 text-white rounded-full px-6 py-3 font-semibold text-sm tracking-wide transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-md"
              >
                {language === 'fr' ? "Me contacter" : "Contact Me"}
              </a>
            </div>
          </motion.div>

          {/* Right Column - Summary Icon Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {summaryCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="relative overflow-hidden bg-portfolio-card/40 border border-indigo-500/10 hover:border-indigo-500/25 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-portfolio-card-hover group shadow-lg"
              >
                {/* Gradient hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-indigo-500/10 group-hover:border-indigo-500/25 shadow-inner w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  {/* Title */}
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-portfolio-purple transition-colors duration-300">
                    {card.title}
                  </h3>
                  {/* Description */}
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
