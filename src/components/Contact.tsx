import React, { useState } from 'react';
import { Mail, Linkedin, Send, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData } from '../data/portfolioData';

const Contact: React.FC = () => {
  const { email, whatsapp, linkedin, location } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const text = `*New Transmission Received*\n\n*From:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsapp}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#7C3AED] mb-3">07 // CONTACT</span>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-[0.9]">
            Reach <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">Synapse</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <GlassCard className="p-8 md:p-10 border-white/5 bg-[#0c0e25]/30 rounded-3xl h-full flex flex-col justify-between hover:border-[#7C3AED]/15 transition-all duration-500 group">
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest mb-10 opacity-40 select-none">
                  Terminals //
                </h3>

                <div className="space-y-8 select-none">
                  
                  {/* Email */}
                  <a href={`mailto:${email}`} className="flex items-center gap-4 group/item">
                    <div className="p-3.5 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300 border border-white/5">
                      <Mail size={20} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[8px] text-[#94a3b8]/40 uppercase font-black tracking-widest mb-0.5">Direct Email</span>
                      <span className="text-sm font-bold text-white group-hover/item:text-[#7C3AED] transition-colors break-all">{email}</span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 border border-white/5">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <span className="block text-[8px] text-[#94a3b8]/40 uppercase font-black tracking-widest mb-0.5">WhatsApp Chat</span>
                      <span className="text-sm font-bold text-white group-hover/item:text-emerald-400 transition-colors">+91 8799735545</span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                    <div className="p-3.5 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 border border-white/5">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <span className="block text-[8px] text-[#94a3b8]/40 uppercase font-black tracking-widest mb-0.5">LinkedIn Profile</span>
                      <span className="text-sm font-bold text-white group-hover/item:text-[#3B82F6] transition-colors">anamika-pandey</span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-xl bg-[#06B6D4]/10 text-[#06B6D4] border border-white/5">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="block text-[8px] text-[#94a3b8]/40 uppercase font-black tracking-widest mb-0.5">Location HQ</span>
                      <span className="text-sm font-bold text-white">{location}</span>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 opacity-30 select-none">
                <span className="text-[8px] text-[#94a3b8] font-black uppercase tracking-widest">
                  Status // Open to Opportunities
                </span>
              </div>

            </GlassCard>
          </div>

          {/* Contact Form Block */}
          <div className="lg:col-span-8">
            <GlassCard className="p-8 md:p-10 border-white/5 bg-[#0c0e25]/20 rounded-3xl h-full flex flex-col justify-between hover:border-[#7C3AED]/15 transition-all duration-500">
              
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-10 opacity-40 select-none">
                Secure Uplink //
              </h3>

              <form 
                action="https://formspree.io/f/mnnjkqge" 
                method="POST"
                className="space-y-6 flex-grow flex flex-col justify-between"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group/input">
                    <label className="block text-[8px] uppercase font-black text-[#7C3AED] tracking-[0.3em] mb-2.5 pl-1 italic select-none">Caller_ID</label>
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
                    <label className="block text-[8px] uppercase font-black text-[#7C3AED] tracking-[0.3em] mb-2.5 pl-1 italic select-none">Email_Terminal</label>
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
                  <label className="block text-[8px] uppercase font-black text-[#7C3AED] tracking-[0.3em] mb-2.5 pl-1 italic select-none">Subject_Vector</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Vector Subject"
                    className="input-premium"
                  />
                </div>

                <div className="group/input">
                  <label className="block text-[8px] uppercase font-black text-[#7C3AED] tracking-[0.3em] mb-2.5 pl-1 italic select-none">Message_Payload</label>
                  <textarea 
                    rows={5}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Data message here..."
                    className="input-premium resize-none"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 select-none">
                  {/* Formspree Submit */}
                  <button 
                    type="submit"
                    className="py-5 rounded-2xl bg-[#7C3AED] text-white text-[10px] font-black uppercase tracking-[0.4em] relative overflow-hidden group hover:shadow-[0_0_20px_rgba(124,58,237,0.45)] hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:outline-none"
                  >
                    <Send size={14} /> Send Email
                    <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-white/10 transition-all duration-300" />
                  </button>

                  {/* WhatsApp redirect */}
                  <button 
                    type="button"
                    onClick={handleWhatsApp}
                    className="py-5 rounded-2xl bg-black/40 border border-emerald-500/20 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] group relative overflow-hidden transition-all flex items-center justify-center gap-2 focus:outline-none"
                  >
                    <MessageCircle size={14} /> WhatsApp Link <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </form>

            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
