import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, CheckCircle2, Network, MapPin, Sparkles, Rocket, ShieldCheck, ChevronRight, Zap, Layers, HeartHandshake, Compass, Users, Lightbulb, Brain, BarChart3, Target } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const OCTO = "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
const DV = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

/* Icône image CDN – remplie dans le badge */
function TechImg({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-[52px] h-[52px] object-contain select-none"
      loading="lazy"
      draggable={false}
    />
  );
}

interface TechBadgeItem {
  label: string;
  imgSrc: string;
  glow: string;
  delay: number;
}

/* Badge octogonal pour Marquee avec effet hover */
function MarqueeBadge({ label, imgSrc, glow }: {
  label: string;
  imgSrc: string;
  glow: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2.5 group cursor-default shrink-0 px-4">
      <div className="relative">
        {/* Halo de lumière colorée (apparaît au survol) */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500
                     blur-2xl scale-[1.6] rounded-full pointer-events-none"
          style={{ background: glow }}
        />
        {/* Badge octogonal */}
        <div
          className="relative w-[88px] h-[88px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ clipPath: OCTO }}
        >
          {/* Fond sombre du badge */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#1c1c2e] to-[#12121f]
                       group-hover:from-[#252542] group-hover:to-[#1a1a32] transition-all duration-400"
            style={{ clipPath: OCTO }}
          />
          {/* Wash coloré au survol */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-400"
            style={{ clipPath: OCTO, background: glow }}
          />
          {/* Icône */}
          <div className="relative z-10 group-hover:scale-110 transition-transform duration-300
                          group-hover:[filter:drop-shadow(0_0_10px_currentColor)]">
            <TechImg src={imgSrc} alt={label} />
          </div>
        </div>
      </div>

      <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400
                       group-hover:text-white transition-colors duration-300 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

/* Composant de ligne défilante infinie */
function MarqueeRow({ items, direction = 'left', speed = 25 }: {
  items: TechBadgeItem[];
  direction?: 'left' | 'right';
  speed?: number;
}) {
  // Dupliquer les éléments pour un défilement infini sans raccord visible
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-3 select-none">
      {/* Masques de fondu cinématiques à gauche et à droite */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-portfolio-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-portfolio-dark to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-6 w-max"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {duplicatedItems.map((tech, idx) => (
          <MarqueeBadge
            key={`${tech.label}-${idx}`}
            label={tech.label}
            imgSrc={tech.imgSrc}
            glow={tech.glow}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function Work() {
  const { language } = useLanguage();
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      id: "cuniculture",
      num: "01",
      role: language === 'fr' ? "Développeuse Web & Intégration Solutions" : "Web Developer & Solutions Integrator",
      company: language === 'fr' ? "Entreprise de Cuniculture" : "Rabbit Farming Company",
      period: "2025",
      type: language === 'fr' ? "Stage Académique" : "Academic Internship",
      location: "Bénin",
      badge: language === 'fr' ? "Projet Digitalisation Métier" : "Business Digitalization Project",
      tagline: language === 'fr' 
        ? "Digitalisation complète des canaux de vente et organisation interne de l'entreprise d'élevage." 
        : "Complete digitalization of sales channels and internal organization for the farming company.",
      description: language === 'fr'
        ? "Conception et déploiement d'une plateforme web sur-mesure pour moderniser la communication et la gestion des ventes d'une entreprise agricole. Intégration de Connecteam pour fluidifier la coordination des équipes de terrain."
        : "Design and deployment of a custom web platform to modernize communication and sales management for an agricultural enterprise. Integrated Connecteam for seamless field team coordination.",
      humanSkills: [
        { 
          title: language === 'fr' ? "Adaptabilité" : "Adaptability", 
          icon: <Compass size={15} className="text-indigo-400" />, 
          desc: language === 'fr' ? "Intégration rapide au secteur agricole & écoute attentive" : "Fast integration into the agri sector & active listening" 
        },
        { 
          title: language === 'fr' ? "Esprit d'équipe" : "Teamwork", 
          icon: <Users size={15} className="text-purple-400" />, 
          desc: language === 'fr' ? "Collaboration harmonieuse avec les équipes terrain" : "Harmonious collaboration with field teams" 
        },
        { 
          title: language === 'fr' ? "Sens du Service" : "Client Focus", 
          icon: <Lightbulb size={15} className="text-amber-400" />, 
          desc: language === 'fr' ? "Orientation satisfaction client & conseils personnalisés" : "Customer satisfaction orientation & tailored guidance" 
        },
      ],
      highlights: language === 'fr'
        ? [
            "Élaboration du cahier des charges et modélisation de l'architecture de l'application.",
            "Création d'une interface utilisateur moderne, réactive et optimisée pour tous terminaux.",
            "Déploiement de modules de présentations produits et de formulaires de demandes clients.",
            "Intégration d'outils collaboratifs (Connecteam) pour la gestion d'équipe et des tâches."
          ]
        : [
            "Specification writing and application architecture modeling.",
            "Creation of a modern, responsive user interface optimized for all devices.",
            "Deployment of product showcase modules and client inquiry forms.",
            "Integration of collaborative tools (Connecteam) for team and task management."
          ],
      skills: ["HTML5", "CSS3", "JavaScript", "Connecteam", "UI/UX Design", "Git", "Gestion de Projet", "Relation Client"],
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      accentBg: "bg-indigo-500/10",
      accentBorder: "border-indigo-500/30",
      glowColor: "rgba(99,102,241,0.4)",
    },
    {
      id: "transformation",
      num: "02",
      role: language === 'fr' ? "Développeuse Full-Stack & Process Numériques" : "Full-Stack Developer & Digital Processes",
      company: language === 'fr' ? "Organisations en Transformation Digitale" : "Digital Transformation Organizations",
      period: "2026",
      type: language === 'fr' ? "Stage Académique" : "Academic Internship",
      location: "Bénin",
      badge: language === 'fr' ? "Automatisation & BDD" : "Automation & Database",
      tagline: language === 'fr'
        ? "Conception d'outils web métier, dématérialisation de procédures et structuration de bases de données."
        : "Design of business web tools, paperless procedures and database structuring.",
      description: language === 'fr'
        ? "Mission axée sur l'optimisation des flux de travail administratifs. Développement de formulaires dynamiques intelligents et création d'applications web de suivi connectées à des bases de données MySQL optimisées."
        : "Mission focused on administrative workflow optimization. Developed intelligent dynamic forms and created tracking web applications linked to optimized MySQL databases.",
      humanSkills: [
        { 
          title: language === 'fr' ? "Rigueur & Logique" : "Rigor & Logic", 
          icon: <Brain size={15} className="text-violet-400" />, 
          desc: language === 'fr' ? "Méthodologie stricte & souci du détail dans le code" : "Strict methodology & attention to detail in code" 
        },
        { 
          title: language === 'fr' ? "Autonomie" : "Autonomy", 
          icon: <Target size={15} className="text-cyan-400" />, 
          desc: language === 'fr' ? "Prise d'initiative & résolution autonome de bugs" : "Proactivity & independent bug resolution" 
        },
        { 
          title: language === 'fr' ? "Sens d'Analyse" : "Analytical Mind", 
          icon: <BarChart3 size={15} className="text-emerald-400" />, 
          desc: language === 'fr' ? "Simplification efficace des processus complexes papier" : "Effective simplification of complex paper processes" 
        },
      ],
      highlights: language === 'fr'
        ? [
            "Conception et développement d'applications web pour le suivi et la gestion de procédures.",
            "Numérisation dynamique de formulaires administratifs complexes avec validation de données.",
            "Modélisation, intégration et requêtage de bases de données relationnelles MySQL.",
            "Rédaction de documentations techniques rigoureuses pour faciliter la reprise du code."
          ]
        : [
            "Design and development of web applications for tracking and procedure management.",
            "Dynamic digitization of complex administrative forms with data validation.",
            "Relational database modeling, integration and querying with MySQL.",
            "Rigorous technical documentation writing to ensure easy code maintenance."
          ],
      skills: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Formulaires Dynamiques", "Architecture Web", "Doc Technique"],
      gradient: "from-violet-500 via-portfolio-violet to-cyan-500",
      accentBg: "bg-violet-500/10",
      accentBorder: "border-violet-500/30",
      glowColor: "rgba(139,92,246,0.4)",
    },
  ];

  /* ── 3 Rangées de technologies défilantes ── */
  // Ligne 1 : Web Front-end & Apps (Défilement de la GAUCHE vers la DROITE)
  const row1Techs: TechBadgeItem[] = [
    { label: "HTML5",        imgSrc: `${DV}/html5/html5-original.svg`,             glow: "#E44D26", delay: 0 },
    { label: "CSS3",         imgSrc: `${DV}/css3/css3-original.svg`,               glow: "#1572B6", delay: 1 },
    { label: "JavaScript",   imgSrc: `${DV}/javascript/javascript-original.svg`,   glow: "#F7DF1E", delay: 2 },
    { label: "React",        imgSrc: `${DV}/react/react-original.svg`,             glow: "#61DAFB", delay: 3 },
    { label: "Node.js",      imgSrc: `${DV}/nodejs/nodejs-original.svg`,           glow: "#339933", delay: 4 },
    { label: "Tailwind CSS", imgSrc: `${DV}/tailwindcss/tailwindcss-original.svg`, glow: "#06B6D4", delay: 5 },
    { label: "Connecteam",   imgSrc: "/connecteam.svg",                            glow: "#2563EB", delay: 6 },
  ];

  // Ligne 2 : Langages & Systèmes / Réseaux (Défilement de la DROITE vers la GAUCHE)
  const row2Techs: TechBadgeItem[] = [
    { label: "PHP",          imgSrc: `${DV}/php/php-original.svg`,                 glow: "#777BB4", delay: 0 },
    { label: "Java",         imgSrc: `${DV}/java/java-original.svg`,               glow: "#007396", delay: 1 },
    { label: "C Lang",       imgSrc: `${DV}/c/c-original.svg`,                     glow: "#A8B9CC", delay: 2 },
    { label: "Python",       imgSrc: `${DV}/python/python-original.svg`,           glow: "#3776AB", delay: 3 },
    { label: "MySQL",        imgSrc: `${DV}/mysql/mysql-original.svg`,             glow: "#4479A1", delay: 4 },
    { label: "Cisco PT",     imgSrc: `${SI}/cisco/1BA0D7`,                         glow: "#1BA0D7", delay: 5 },
    { label: "Wireshark",    imgSrc: `${SI}/wireshark/167EBE`,                    glow: "#167EBE", delay: 6 },
  ];

  // Ligne 3 : IoT & Outils (Défilement de la GAUCHE vers la DROITE)
  const row3Techs: TechBadgeItem[] = [
    { label: "Arduino / IoT",  imgSrc: `${DV}/arduino/arduino-original.svg`,         glow: "#00979D", delay: 0 },
    { label: "Raspberry Pi",   imgSrc: `${DV}/raspberrypi/raspberrypi-original.svg`, glow: "#C51A4A", delay: 1 },
    { label: "MQTT / IoT",     imgSrc: `${SI}/mqtt/660066`,                          glow: "#9333EA", delay: 2 },
    { label: "Linux",          imgSrc: `${DV}/linux/linux-original.svg`,             glow: "#FCC624", delay: 3 },
    { label: "Git",            imgSrc: `${DV}/git/git-original.svg`,                 glow: "#F05032", delay: 4 },
    { label: "GitHub",         imgSrc: `${SI}/github/ffffff`,                        glow: "#aaaaaa", delay: 5 },
    { label: "VS Code",        imgSrc: `${DV}/vscode/vscode-original.svg`,           glow: "#007ACC", delay: 6 },
    { label: "Android Studio", imgSrc: `${DV}/androidstudio/androidstudio-original.svg`, glow: "#3DDC84", delay: 7 },
  ];

  return (
    <section id="work" className="py-28 bg-portfolio-dark relative border-t border-indigo-500/5 overflow-hidden">
      
      {/* Dynamic Background Atmosphere */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-portfolio-purple font-bold tracking-widest uppercase text-xs bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20 mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Sparkles size={13} />
            {language === 'fr' ? "PARCOURS & SAVOIR-ÊTRE" : "CAREER & HUMAN ASSETS"}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            {language === 'fr' ? "Expériences " : "Professional "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-purple via-violet-400 to-indigo-300">
              {language === 'fr' ? "Professionnelles" : "Experience"}
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            {language === 'fr'
              ? "Des réalisations technologiques alliées à des qualités humaines solides et un réel esprit d'équipe."
              : "Technical achievements combined with solid human qualities and strong team spirit."}
          </p>
        </motion.div>

        {/* ═══════════ INNOVATIVE EXPERIENCE SHOWCASE ═══════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32 items-start">

          {/* ── Left Column: Interactive Experience Selector (Tabs/Cards) ── */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-2 px-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Layers size={14} className="text-portfolio-purple" />
              {language === 'fr' ? "Sélectionnez une expérience" : "Select an experience"}
            </div>

            {experiences.map((exp, idx) => {
              const isSelected = activeExp === idx;

              return (
                <motion.div
                  key={exp.id}
                  onClick={() => setActiveExp(idx)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? "bg-[#161432] border-portfolio-purple/50 shadow-[0_10px_30px_rgba(99,102,241,0.25)]"
                      : "bg-[#0e0d22]/80 hover:bg-[#12102b] border-slate-800/80 text-slate-400"
                  }`}
                >
                  {/* Left Active Indicator Strip */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${exp.gradient} transition-opacity duration-300 ${
                      isSelected ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300">
                      {exp.period}
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border ${
                      isSelected ? "bg-portfolio-purple/20 text-indigo-300 border-portfolio-purple/40" : "bg-slate-900/60 text-slate-400 border-slate-800"
                    }`}>
                      {exp.badge}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold transition-colors ${isSelected ? "text-white" : "text-slate-300"}`}>
                    {exp.role}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1 flex items-center gap-1.5">
                    <Briefcase size={12} className="text-portfolio-purple shrink-0" />
                    {exp.company}
                  </p>

                  {/* Arrow Indicator */}
                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-800/50 text-xs font-semibold">
                    <span className={isSelected ? "text-portfolio-purple" : "text-slate-400"}>
                      {isSelected 
                        ? (language === 'fr' ? "Détails affichés" : "Viewing details") 
                        : (language === 'fr' ? "Cliquer pour examiner" : "Click to view details")}
                    </span>
                    <ChevronRight size={16} className={`transition-transform duration-300 ${isSelected ? "translate-x-1 text-portfolio-purple" : "text-slate-400"}`} />
                  </div>
                </motion.div>
              );
            })}

            {/* Recruiter Quick Highlights Note */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-950/60 border border-indigo-500/20 backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-xs font-bold text-portfolio-purple uppercase tracking-wider mb-2">
                <Rocket size={14} />
                {language === 'fr' ? "Ce que j'apporte à votre équipe" : "What I bring to your team"}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {language === 'fr'
                  ? "Capacité avérée d'adaptation rapide, rigueur dans le code, orientation résultats et sens du service client."
                  : "Proven ability to adapt quickly, code rigor, result-oriented approach, and strong customer service focus."}
              </p>
            </div>
          </div>

          {/* ── Right Column: Dynamic Deep-Dive Experience Card ── */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {experiences.map((exp, idx) => {
                if (idx !== activeExp) return null;

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative rounded-3xl bg-gradient-to-b from-[#14122d] to-[#0c0b1d] border border-indigo-500/20 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                  >
                    {/* Glowing Top Line */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${exp.gradient}`} />

                    {/* Watermark Number */}
                    <div className="absolute -top-4 -right-2 text-9xl font-black text-white/[0.03] select-none pointer-events-none font-mono">
                      {exp.num}
                    </div>

                    {/* Card Header */}
                    <div className="relative z-10 mb-6">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-portfolio-purple bg-indigo-500/10 px-3.5 py-1 rounded-full border border-indigo-500/20">
                          {exp.type}
                        </span>
                        <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                          <MapPin size={12} className="text-portfolio-purple" />
                          {exp.location}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-slate-300 font-semibold text-base mt-1 flex items-center gap-2">
                        <Briefcase size={16} className="text-portfolio-violet" />
                        {exp.company}
                      </p>
                    </div>

                    {/* Tagline / Brief summary box */}
                    <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/15 mb-8">
                      <p className="text-sm text-indigo-200 font-medium leading-relaxed italic flex items-start gap-2">
                        <Zap size={16} className="text-amber-400 shrink-0 mt-0.5" />
                        "{exp.tagline}"
                      </p>
                    </div>

                    {/* Human Assets & Soft Skills Grid */}
                    <div className="mb-8">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <HeartHandshake size={15} className="text-portfolio-purple" />
                        {language === 'fr' ? "Compétences & Atouts humains" : "Soft Skills & Human Assets"}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {exp.humanSkills.map((item, hSIdx) => (
                          <div
                            key={hSIdx}
                            className="p-3.5 rounded-xl bg-[#0a0918]/80 border border-slate-800/80 hover:border-portfolio-purple/40 transition-colors"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                                {item.icon}
                              </div>
                              <div className="text-sm font-bold text-white">
                                {item.title}
                              </div>
                            </div>
                            <div className="text-[11px] text-slate-400 font-light leading-snug">
                              {item.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Detailed Highlights */}
                    <div className="mb-8">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-portfolio-purple" />
                        {language === 'fr' ? "Missions & Livrables Clés" : "Key Missions & Deliverables"}
                      </div>
                      <div className="space-y-3">
                        {exp.highlights.map((item, hIdx) => (
                          <motion.div
                            key={hIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: hIdx * 0.08 }}
                            className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-sm text-slate-300 font-light hover:border-indigo-500/20 transition-colors"
                          >
                            <CheckCircle2 size={16} className="text-portfolio-purple shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Skills */}
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        🛠 {language === 'fr' ? "Technologies & Compétences Métier" : "Tech Stack & Technical Skills"}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs font-medium bg-slate-900/90 text-indigo-200 border border-indigo-500/20 px-3.5 py-1.5 rounded-lg hover:bg-portfolio-purple/20 hover:text-white transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

        {/* ═══════════ TECH BADGES MULTI-ROW MARQUEE ═══════════ */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="p-2.5 bg-gradient-to-br from-portfolio-purple/20 to-indigo-500/10 border border-indigo-500/20 rounded-xl">
            <Network size={18} className="text-portfolio-purple" />
          </div>
          <h3 className="text-xl font-bold text-white">
            {language === 'fr' ? "Technologies maîtrisées" : "Technologies mastered"}
          </h3>
          <div className="ml-4 h-px flex-1 bg-gradient-to-r from-indigo-500/20 to-transparent" />
        </motion.div>

        {/* 3 Lignes de Marquee Alternées */}
        <div className="space-y-6">
          {/* Ligne 1 : Gauche ➔ Droite (right direction) */}
          <MarqueeRow items={row1Techs} direction="right" speed={28} />

          {/* Ligne 2 : Inverse - Droite ➔ Gauche (left direction) */}
          <MarqueeRow items={row2Techs} direction="left" speed={26} />

          {/* Ligne 3 : Gauche ➔ Droite (right direction) */}
          <MarqueeRow items={row3Techs} direction="right" speed={30} />
        </div>

      </div>
    </section>
  );
}
