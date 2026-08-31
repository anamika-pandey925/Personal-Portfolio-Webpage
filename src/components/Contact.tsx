import React, { useState } from 'react';
import { Mail, MapPin, Send, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const LeetCodeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className}
    aria-hidden="true"
  >
    <path 
      d="M16.102 17.93l-2.697 2.607c-.466.451-1.211.451-1.677 0l-4.51-4.359a1.096 1.096 0 0 1 0-1.62l4.51-4.359c.466-.451 1.211-.451 1.677 0l2.697 2.606a1.18 1.18 0 0 1-.03 1.701l-1.954 1.888a.294.294 0 0 0-.03.424l1.984 1.917a1.18 1.18 0 0 1 .03 1.701z" 
      fill="#FFA116" 
    />
    <path 
      d="M17.098 14.225l3.226-3.118a1.21 1.21 0 0 0 0-1.748l-8.232-7.958a1.21 1.21 0 0 0-1.714 0l-8.232 7.958a1.21 1.21 0 0 0 0 1.748l3.226 3.118 4.292-4.148c.81-.784 2.112-.784 2.922 0l4.51 4.359a.302.302 0 0 0 .426 0l2.302-2.21z" 
      fill="currentColor" 
    />
  </svg>
);

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const Contact: React.FC = () => {
  const { email, phone, location } = portfolioData.contact;
  const { linkedin, github, leetcode, instagram, instagramHandle } = portfolioData.socialLinks;
  
  const whatsappUrl = "https://wa.me/918799735545?text=Hi%20Anamika%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success'
  });

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 6000);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message (minimum 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "Contact form error: EmailJS environment variables are missing (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY)."
      );
      setIsSubmitting(false);
      showToast("Unable to send your message right now. Please try again or contact me directly via email or WhatsApp.", "error");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "anamika758287@gmail.com"
        },
        {
          publicKey
        }
      );

      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      showToast("Message sent successfully! I'll get back to you soon.", "success");
    } catch (error) {
      console.error("Contact form error:", error);
      setIsSubmitting(false);
      showToast("Unable to send your message right now. Please try again or contact me directly via email or WhatsApp.", "error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#A855F7]/10 via-[#06B6D4]/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 select-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/25 text-[#A855F7] text-[11px] font-mono font-bold tracking-widest uppercase mb-3">
            <Sparkles size={12} />
            <span>07 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--fg)] tracking-tight">
            Let's build something together.
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#A855F7] to-[#06B6D4] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Left Column: Direct Channels & Social Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6 w-full"
          >
            <GlassCard className="p-6 sm:p-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/40 hover:border-[#A855F7]/30 transition-all duration-300">
              <span className="text-xs font-mono uppercase font-bold tracking-widest text-[#A855F7] mb-2 block">
                Direct Channels //
              </span>
              <h3 className="text-xl font-bold text-[var(--fg)] mb-6">
                Have a project or frontend role in mind?
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--surface-lighter)]/50 border border-[var(--border)] hover:border-[#A855F7]/40 hover:bg-[var(--surface-lighter)] transition-all group"
                  aria-label="Email Me"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#A855F7]/10 text-[#A855F7] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden min-w-0">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Email Me</span>
                    <p className="text-xs sm:text-sm font-semibold text-[var(--fg)] truncate">{email}</p>
                  </div>
                </a>

                {/* WhatsApp Item */}
                <a
                  href={whatsappUrl}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--surface-lighter)]/50 border border-[var(--border)] hover:border-[#25D366]/40 hover:bg-[var(--surface-lighter)] transition-all group"
                  aria-label="WhatsApp / Chat"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <WhatsAppIcon size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">WhatsApp / Chat</span>
                    <p className="text-xs sm:text-sm font-semibold text-[var(--fg)]">{phone}</p>
                  </div>
                </a>

                {/* Instagram Channel */}
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--surface-lighter)]/50 border border-[var(--border)] hover:border-[#dc2743]/40 hover:bg-[var(--surface-lighter)] transition-all group"
                  aria-label="Instagram"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433]/15 via-[#dc2743]/15 to-[#bc1888]/15 text-[#dc2743] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <InstagramIcon size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Instagram</span>
                    <p className="text-xs sm:text-sm font-semibold text-[var(--fg)]">{instagramHandle || '@BUILDWITHANAMIKA'}</p>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--surface-lighter)]/50 border border-[var(--border)]">
                  <div className="w-10 h-10 rounded-xl bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Location</span>
                    <p className="text-xs sm:text-sm font-semibold text-[var(--fg)]">{location}</p>
                  </div>
                </div>
              </div>

              {/* Social Link Badges */}
              <div className="pt-6 mt-6 border-t border-[var(--border)] flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono uppercase text-[var(--text-muted)] font-bold">
                  All Profiles:
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[var(--surface-lighter)] text-[var(--fg)] hover:text-white hover:bg-[#A855F7] transition-all"
                    aria-label="GitHub"
                  >
                    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[var(--surface-lighter)] text-[var(--fg)] hover:text-white hover:bg-[#0A66C2] transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href={leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[var(--surface-lighter)] text-[var(--fg)] hover:text-white hover:bg-[#FFA116] transition-all"
                    aria-label="LeetCode"
                  >
                    <LeetCodeIcon size={16} />
                  </a>
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[var(--surface-lighter)] text-[var(--fg)] hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all"
                    aria-label="Instagram"
                    title="@BUILDWITHANAMIKA"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={whatsappUrl}
                    className="p-2.5 rounded-xl bg-[var(--surface-lighter)] text-[var(--fg)] hover:text-white hover:bg-[#25D366] transition-all"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                </div>
              </div>

            </GlassCard>
          </motion.div>

          {/* Right Column: Modern Message Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 w-full"
          >
            <GlassCard className="p-6 sm:p-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-xs font-mono uppercase font-bold tracking-widest text-[#A855F7] mb-1 block">
                  Send A Message //
                </span>
                <h3 className="text-2xl font-bold text-[var(--fg)]">
                  Start a Conversation
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase font-bold">
                      Your Name <span className="text-[#A855F7]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Recruiter / Client Name"
                      className={`w-full px-4 py-3 rounded-2xl bg-[var(--surface-lighter)]/60 border text-sm text-[var(--fg)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[#A855F7]/30 transition-all ${
                        errors.name ? 'border-rose-500/70' : 'border-[var(--border)] focus:border-[#A855F7]'
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-rose-400 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase font-bold">
                      Your Email <span className="text-[#A855F7]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. contact@company.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-[var(--surface-lighter)]/60 border text-sm text-[var(--fg)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[#A855F7]/30 transition-all ${
                        errors.email ? 'border-rose-500/70' : 'border-[var(--border)] focus:border-[#A855F7]'
                      }`}
                    />
                    {errors.email && <span className="text-[11px] text-rose-400 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase font-bold">
                    Subject <span className="text-[#A855F7]">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Frontend Developer Role / Project Collaboration"
                    className={`w-full px-4 py-3 rounded-2xl bg-[var(--surface-lighter)]/60 border text-sm text-[var(--fg)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[#A855F7]/30 transition-all ${
                      errors.subject ? 'border-rose-500/70' : 'border-[var(--border)] focus:border-[#A855F7]'
                    }`}
                  />
                  {errors.subject && <span className="text-[11px] text-rose-400 mt-1 block">{errors.subject}</span>}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase font-bold">
                    Message <span className="text-[#A855F7]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or open frontend role..."
                    className={`w-full px-4 py-3 rounded-2xl bg-[var(--surface-lighter)]/60 border text-sm text-[var(--fg)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[#A855F7]/30 transition-all resize-none ${
                      errors.message ? 'border-rose-500/70' : 'border-[var(--border)] focus:border-[#A855F7]'
                    }`}
                  />
                  {errors.message && <span className="text-[11px] text-rose-400 mt-1 block">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#06B6D4] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#A855F7]/25 hover:shadow-xl hover:shadow-[#A855F7]/40 hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    aria-label="Submit Message"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send size={14} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              </form>

            </GlassCard>
          </motion.div>

        </div>

      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            role="status"
            aria-live="polite"
            className={`fixed bottom-8 right-8 z-[200] max-w-md px-5 py-3.5 rounded-2xl shadow-2xl border backdrop-blur-xl flex items-center gap-3 text-xs sm:text-sm font-semibold ${
              toast.type === 'success'
                ? 'bg-slate-900/95 text-emerald-400 border-emerald-500/30 shadow-emerald-500/10'
                : 'bg-slate-900/95 text-rose-400 border-rose-500/30 shadow-rose-500/10'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 size={18} className="shrink-0" aria-hidden="true" />
            ) : (
              <AlertCircle size={18} className="shrink-0" aria-hidden="true" />
            )}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;


