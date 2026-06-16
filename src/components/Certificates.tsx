import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData, Certificate } from '../data/portfolioData';
import ErrorBoundary from './ErrorBoundary';

interface CertificatesProps {
  data?: {
    certificates?: Certificate[];
  };
}

const CertificateCard: React.FC<{ cert: Certificate; index: number; onPreview: () => void }> = ({ 
  cert, index, onPreview 
}) => {
  // Safe default values if properties are missing
  const org = cert?.organization ?? 'Unknown Institution';
  const title = cert?.title ?? 'Verified Credential';
  const dateStr = cert?.date ?? 'N/A';
  const description = cert?.description ?? 'No credential description available.';
  const imageSrc = cert?.image ?? '';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex"
    >
      <GlassCard className="group flex flex-col h-full w-full overflow-hidden rounded-3xl border-[var(--border)] bg-[var(--surface)]/30 hover:border-[#A855F7]/30 hover:shadow-lg hover:shadow-[#A855F7]/5 transition-all duration-500">
        
        {/* Certificate preview container */}
        <div 
          onClick={onPreview}
          className="relative h-48 overflow-hidden bg-black/10 dark:bg-black/40 shrink-0 cursor-pointer select-none border-b border-[var(--border)]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/30 via-transparent to-transparent z-10 opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#A855F7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-contain p-4 group-hover:scale-102 transition-transform duration-500 relative z-0" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[var(--text-muted)] text-[10px] font-black uppercase tracking-wider">
              No Image Available
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow text-left">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck size={14} className="text-[#A855F7]" />
            <span className="text-[8px] uppercase tracking-widest font-black text-[#A855F7]/95">
              {org}
            </span>
          </div>

          <h3 className="text-lg font-black mb-3 text-[var(--fg)] group-hover:text-[#A855F7] transition-colors duration-300 uppercase tracking-tight">
            {title}
          </h3>

          <div className="flex items-center gap-1.5 mb-4 select-none">
            <div className="h-[1px] w-3 bg-[#A855F7]/40" />
            <span className="text-[var(--text-muted)] text-[9px] font-bold tracking-wider">{dateStr}</span>
          </div>

          <p className="text-[var(--text-muted)] text-xs font-semibold leading-relaxed mb-6 flex-grow">
            {description}
          </p>

          <button
            onClick={onPreview}
            className="w-full flex items-center justify-center gap-2 bg-[var(--surface-lighter)] hover:bg-[#A855F7] hover:text-white text-[var(--fg)] border border-[var(--border)] hover:border-[#A855F7] transition-all duration-300 rounded-full py-3 text-[9px] font-black uppercase tracking-widest"
          >
            Verify Credential <ExternalLink size={12} />
          </button>
        </div>
      </GlassCard>
    </motion.div>
  );
};

const CertificatesList: React.FC<CertificatesProps> = ({ data }) => {
  const [certs, setCerts] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setLoading(true);
        // Simulate a network delay (800ms)
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Use optional chaining and default fallback selector pattern
        const certificatesList = data?.certificates ?? portfolioData?.certificates;

        if (!certificatesList) {
          throw new Error("Certificates data is missing or undefined.");
        }

        if (!Array.isArray(certificatesList)) {
          throw new Error("Certificates data is not in a valid list format.");
        }

        if (isMounted) {
          setCerts(certificatesList);
          setError(null);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message ?? "An unexpected error occurred while loading certificates.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [data]);

  // Section Header structure
  const renderHeader = () => (
    <div className="flex flex-col items-start text-left mb-16 select-none">
      <span className="text-[10px] uppercase font-black tracking-[0.4em] text-[#A855F7] mb-2">04 // VERIFICATION</span>
      <h2 className="text-3xl md:text-5xl font-black text-[var(--fg)] uppercase tracking-tight leading-none">
        Verified Credentials
      </h2>
      <div className="h-[2px] w-12 bg-[#A855F7] mt-4" />
    </div>
  );

  // 1. Loading state with Pulse Skeletons
  if (loading) {
    return (
      <section id="certificates" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          {renderHeader()}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div 
                key={n} 
                className="h-96 rounded-3xl bg-[var(--surface)]/20 animate-pulse border border-[var(--border)] flex flex-col justify-between p-6"
              >
                <div className="w-full h-40 bg-[var(--surface-lighter)]/50 rounded-2xl animate-pulse" />
                <div className="space-y-3 mt-4">
                  <div className="h-3 w-1/4 bg-[var(--surface-lighter)]/50 rounded animate-pulse" />
                  <div className="h-6 w-3/4 bg-[var(--surface-lighter)]/50 rounded animate-pulse" />
                  <div className="h-3 w-1/2 bg-[var(--surface-lighter)]/50 rounded animate-pulse" />
                </div>
                <div className="h-10 w-full bg-[var(--surface-lighter)]/50 rounded-full mt-6 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 2. Fallback error / Empty data state
  if (error || !Array.isArray(certs) || certs.length === 0) {
    return (
      <section id="certificates" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          {renderHeader()}
          <div className="w-full flex items-center justify-center py-12">
            <GlassCard className="p-8 border-[var(--border)] bg-[var(--surface)]/30 rounded-3xl text-center select-none max-w-lg">
              <ShieldCheck size={32} className="text-[var(--text-muted)] mx-auto mb-4 opacity-50" />
              <h3 className="text-sm font-black uppercase tracking-widest text-[var(--fg)] mb-2">No Credentials Found</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed font-semibold">
                {error ? `Detail: ${error}` : "Credentials are temporarily unavailable or have not been uploaded yet."}
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    );
  }

  // 3. Normal Layout rendering
  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {renderHeader()}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <CertificateCard 
              key={index} 
              cert={cert} 
              index={index} 
              onPreview={() => setSelectedCert(cert)} 
            />
          ))}
        </div>

      </div>

      {/* Modal image overlay preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-10 select-none"
          >
            {/* Background dismiss clicker */}
            <div 
              className="absolute inset-0 cursor-zoom-out" 
              onClick={() => setSelectedCert(null)} 
            />

            {/* Content modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-4xl bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-4 md:p-8 flex flex-col md:flex-row gap-8 items-center max-h-[90vh] overflow-y-auto z-10 backdrop-blur-2xl shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-[var(--surface-lighter)] border border-[var(--border)] text-[var(--fg)]/80 hover:text-[#A855F7] hover:border-[#A855F7] transition-colors focus:outline-none"
                aria-label="Close Preview"
              >
                <X size={18} />
              </button>

              {/* Certificate Image */}
              <div className="w-full md:w-3/5 h-[40vh] md:h-[60vh] flex items-center justify-center bg-black/5 rounded-2xl overflow-hidden p-2 dark:bg-black/30 border border-[var(--border)]">
                {selectedCert.image ? (
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="max-w-full max-h-full object-contain" 
                  />
                ) : (
                  <div className="text-[var(--text-muted)] text-[10px] font-black uppercase tracking-wider">
                    No image available
                  </div>
                )}
              </div>

              {/* Certificate Details */}
              <div className="w-full md:w-2/5 text-left flex flex-col justify-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#A855F7] mb-3 block">
                  {selectedCert.organization ?? 'Unknown Institution'}
                </span>

                <h3 className="text-xl md:text-2xl font-black mb-4 text-[var(--fg)] uppercase tracking-tight">
                  {selectedCert.title ?? 'Verified Credential'}
                </h3>

                <span className="text-xs text-[var(--text-muted)] font-bold block mb-6">
                  Awarded: {selectedCert.date ?? 'N/A'}
                </span>

                <p className="text-[var(--text-muted)] text-xs leading-relaxed font-semibold mb-8">
                  {selectedCert.description ?? 'No credential description available.'}
                </p>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-8 py-3.5 bg-[#A855F7] hover:bg-[#A855F7]/95 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all focus:outline-none w-fit"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Wrap the component inside ErrorBoundary for safe rendering
const Certificates: React.FC<CertificatesProps> = (props) => {
  return (
    <ErrorBoundary>
      <CertificatesList {...props} />
    </ErrorBoundary>
  );
};

export default Certificates;
