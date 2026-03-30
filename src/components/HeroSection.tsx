import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  } as const;

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-white">
      {/* FULL WIDTH BACKGROUND IMAGE */}
      <img 
        src="/Imaec.png" 
        alt="IMAEC — Hospital, Home and Enterprise"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* OVERLAY - Darker left bias for readable foreground text */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(6,18,32,0.70) 0%, rgba(6,18,32,0.55) 35%, rgba(6,18,32,0.30) 60%, rgba(6,18,32,0.12) 100%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* LEFT SIDE ONLY */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl lg:max-w-[50%]"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ textShadow: '0 3px 18px rgba(0,0,0,0.55)' }}
          >
            India's Trusted Partner for Pharmaceutical & Hygiene Manufacturing
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-slate-100/95 mb-8 leading-relaxed">
            Delivering safe, high-quality solutions that protect lives — across hospitals, homes and essential industries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="flex items-center justify-center bg-[#166534] hover:bg-[#14532D] text-white px-8 py-3.5 rounded-2xl font-semibold transition-all duration-300 ease-out shadow-[0_10px_28px_rgba(22,101,52,0.35)] hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(22,101,52,0.42)] hover:scale-[1.03]">
              Request Business Enquiry <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="flex items-center justify-center border-2 border-white/70 bg-white/15 text-white hover:bg-white/25 hover:border-white px-8 py-3.5 rounded-2xl font-medium transition-all duration-300 ease-out hover:-translate-y-0.5">
              Download Company Profile <Download size={18} className="ml-2" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
