import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Github, Linkedin } from './icons';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data
    alert(language === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contact" className="bg-slate-950 pt-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'fr' ? "Me Contacter" : "Contact Me"}
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            {language === 'fr' 
              ? "N'hésitez pas à me contacter pour toute opportunité de collaboration, de stage ou d'emploi. Je serai ravie d'échanger avec vous."
              : "Feel free to reach out for any collaboration, internship, or job opportunities. I would be happy to connect with you."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <a href="mailto:doudedjimensah16@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  doudedjimensah16@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {language === 'fr' ? "Téléphone" : "Phone"}
                </h3>
                <p className="text-slate-400 flex flex-col gap-1">
                  <a href="tel:+2290167379942" className="hover:text-cyan-400 transition-colors">+229 01 67 37 99 42</a>
                  <a href="tel:+2290145926313" className="hover:text-cyan-400 transition-colors">+229 01 45 92 63 13</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {language === 'fr' ? "Localisation" : "Location"}
                </h3>
                <p className="text-slate-400">
                  Suru-léré, Bénin
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">
                {language === 'fr' ? "Réseaux Sociaux" : "Social Networks"}
              </h3>
              <div className="flex gap-4">
                <a href="https://github.com/esther-dorcas" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-xl transition-all border border-slate-800 hover:border-cyan-500/50">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/esthermensah1624/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-xl transition-all border border-slate-800 hover:border-cyan-500/50">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                {language === 'fr' ? "Envoyer un message" : "Send a message"}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">
                    {language === 'fr' ? "Nom complet" : "Full name"}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 text-white text-base rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors"
                    placeholder={language === 'fr' ? "Votre nom" : "Your name"}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 text-white text-base rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 text-white text-base rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors resize-none"
                    placeholder={language === 'fr' ? "Comment puis-je vous aider ?" : "How can I help you?"}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-3 px-4 rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 mt-2"
                >
                  <Send size={18} />
                  {language === 'fr' ? "Envoyer" : "Send"}
                </button>
              </div>
            </form>
          </motion.div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Esther MENSAH. {language === 'fr' ? "Tous droits réservés." : "All rights reserved."}</p>
        </div>
      </div>
    </footer>
  );
}
