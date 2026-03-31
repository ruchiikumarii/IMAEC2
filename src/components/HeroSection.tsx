import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export default function HeroSection() {
  const baseButtonClass =
    'group inline-flex items-center justify-center gap-2 h-14 px-8 sm:px-9 rounded-[12px] whitespace-nowrap font-semibold tracking-[0.005em] text-[1rem] transition-all duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1929]';

  const primaryButtonClass =
    `${baseButtonClass} bg-gradient-to-r from-[#13824b] to-[#0f6f41] text-white shadow-[0_8px_20px_rgba(19,130,75,0.32)] hover:from-[#127744] hover:to-[#0d633a] hover:scale-105`;

  const secondaryButtonClass =
    `${baseButtonClass} bg-transparent text-white border-2 border-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset] hover:border-white hover:bg-white/8`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: 'easeOut' } },
  } as const;

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center py-20 overflow-hidden bg-white">
      <img 
        src="/Imaec.png" 
        alt="IMAEC — Hospital, Home and Enterprise"
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.01]"
        style={{ filter: 'blur(0.5px) brightness(0.9)' }}
      />

      <div 
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 50%, rgba(10, 25, 41, 0.9) 0%, transparent 60%), linear-gradient(to right, #0a1929 0%, #0a192980 50%, transparent 70%)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto pl-[8%] pr-6 sm:pr-8 lg:pr-12 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[600px] lg:w-[45%] lg:max-w-[600px] lg:translate-y-6"
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h1
            variants={itemVariants}
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3.2rem] font-bold text-white leading-[1.24] tracking-[-0.02em] mb-7"
            style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
          >
            India's Trusted Partner for Pharmaceutical & Hygiene Manufacturing
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[1.125rem] text-slate-100 leading-[1.72] max-w-[58ch]"
          >
            Delivering safe, high-quality solutions that protect lives — across hospitals, homes and essential industries.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-10">
            <button className={primaryButtonClass}>
              Request Business Enquiry
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className={secondaryButtonClass}>
              Download Company Profile
              <Download size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
