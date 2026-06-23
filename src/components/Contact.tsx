import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, MessageCircle, ArrowUpRight, Send } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

const FiverrIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width={size} 
    height={size} 
    className={className}
  >
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"/>
  </svg>
);

const Contact: React.FC = () => {
  const { email, whatsapp, location } = portfolioData.contact;
  const { linkedin, fiverr } = portfolioData.socialLinks;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error' | 'info';
  }>({ show: false, message: '', type: 'success' });

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `*New Transmission Received*\n\n*From:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    
    // Open WhatsApp Chat
    window.open(`https://wa.me/${whatsapp}?text=${encodedText}`, '_blank');
    
    showToast('Redirecting to WhatsApp chat...', 'success');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 select-none">
          <span className="text-[10px] uppercase font-black tracking-[0.4em] text-[#A855F7] mb-2">04 // CONNECT</span>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--fg)] uppercase tracking-tight leading-none">
            Get In Touch
          </h2>
          <div className="h-[2px] w-12 bg-[#A855F7] mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <GlassCard className="p-8 md:p-10 border-[var(--border)] bg-[var(--surface)]/30 rounded-3xl h-full flex flex-col justify-between hover:border-[#A855F7]/20 transition-all duration-500 group">
              <div>
                <h3 className="text-xs font-black text-[var(--fg)] uppercase tracking-widest mb-10 opacity-40 select-none">
                  Contact Information //
                </h3>

                <div className="space-y-8 select-none">
                  
                  {/* Email */}
                  <a href={`mailto:${email}`} className="flex items-center gap-4 group/item">
                    <div className="p-3.5 rounded-2xl bg-[#A855F7]/10 text-[#A855F7] group-hover/item:scale-110 group-hover/item:bg-[#A855F7] group-hover/item:text-white transition-all duration-300 border border-[var(--border)]">
                      <Mail size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[8px] text-[var(--text-muted)] uppercase font-black tracking-widest mb-0.5">Email Direct</span>
                      <span className="text-xs font-bold text-[var(--fg)] group-hover/item:text-[#A855F7] transition-colors break-all">{email}</span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                    <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover/item:scale-110 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all duration-300 border border-[var(--border)]">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <span className="block text-[8px] text-[var(--text-muted)] uppercase font-black tracking-widest mb-0.5">WhatsApp Chat</span>
                      <span className="text-xs font-bold text-[var(--fg)] group-hover/item:text-emerald-500 transition-colors">+91 8799735545</span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                    <div className="p-3.5 rounded-2xl bg-[#0a66c2]/10 text-[#0a66c2] group-hover/item:scale-110 group-hover/item:bg-[#0a66c2] group-hover/item:text-white transition-all duration-300 border border-[var(--border)]">
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <span className="block text-[8px] text-[var(--text-muted)] uppercase font-black tracking-widest mb-0.5">LinkedIn Profile</span>
                      <span className="text-xs font-bold text-[var(--fg)] group-hover/item:text-[#0a66c2] transition-colors">anamika-pandey</span>
                    </div>
                  </a>

                  {/* Fiverr */}
                  <a href={fiverr} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                    <div className="p-3.5 rounded-2xl bg-[#1dbf73]/10 text-[#1dbf73] group-hover/item:scale-110 group-hover/item:bg-[#1dbf73] group-hover/item:text-white transition-all duration-300 border border-[var(--border)]">
                      <FiverrIcon size={22} />
                    </div>
                    <div>
                      <span className="block text-[8px] text-[var(--text-muted)] uppercase font-black tracking-widest mb-0.5">Fiverr Profile</span>
                      <span className="text-xs font-bold text-[var(--fg)] group-hover/item:text-[#1dbf73] transition-colors">anamikapande437</span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-500 border border-[var(--border)]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="block text-[8px] text-[var(--text-muted)] uppercase font-black tracking-widest mb-0.5">Location HQ</span>
                      <span className="text-xs font-bold text-[var(--fg)]">{location}</span>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-[var(--border)] opacity-35 select-none">
                <span className="text-[8px] text-[var(--text-muted)] font-black uppercase tracking-widest">
                  Available for new opportunities
                </span>
              </div>

            </GlassCard>
          </div>

          {/* Contact Form Block */}
          <div className="lg:col-span-8">
            <GlassCard className="p-8 md:p-10 border-[var(--border)] bg-[var(--surface)]/20 rounded-3xl h-full flex flex-col justify-between hover:border-[#A855F7]/20 transition-all duration-500">
              
              <h3 className="text-xs font-black text-[var(--fg)] uppercase tracking-widest mb-10 opacity-40 select-none">
                Send a Message //
              </h3>

              <form 
                onSubmit={handleSubmit}
                className="space-y-6 flex-grow flex flex-col justify-between"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group/input">
                    <label className="block text-[8px] uppercase font-black text-[#A855F7] tracking-[0.3em] mb-2 pl-1 select-none">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="input-premium"
                    />
                  </div>
                  <div className="group/input">
                    <label className="block text-[8px] uppercase font-black text-[#A855F7] tracking-[0.3em] mb-2 pl-1 select-none">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="address@domain.com"
                      className="input-premium"
                    />
                  </div>
                </div>

                <div className="group/input">
                  <label className="block text-[8px] uppercase font-black text-[#A855F7] tracking-[0.3em] mb-2 pl-1 select-none">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject Matter"
                    className="input-premium"
                  />
                </div>

                <div className="group/input">
                  <label className="block text-[8px] uppercase font-black text-[#A855F7] tracking-[0.3em] mb-2 pl-1 select-none">Message Payload</label>
                  <textarea 
                    rows={5}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="input-premium resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-start pt-6 select-none">
                  {/* WhatsApp Form Submit */}
                  <button 
                    type="submit"
                    className="w-full sm:w-auto py-4 px-8 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-black uppercase tracking-[0.25em] relative overflow-hidden group hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none shadow-lg shadow-emerald-500/20"
                  >
                    <MessageCircle size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                    Send via WhatsApp
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </form>

            </GlassCard>
          </div>

        </div>

      </div>

      {/* Floating Custom Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl max-w-sm sm:max-w-md bg-emerald-950/90 border-emerald-500/30 text-emerald-200 shadow-emerald-500/5`}
          >
            <div className={`p-1.5 rounded-lg shrink-0 bg-emerald-500/20 text-emerald-400`}>
              <MessageCircle size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase font-black tracking-widest opacity-50">
                System Notice
              </span>
              <span className="text-xs font-semibold leading-relaxed mt-0.5">{toast.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
