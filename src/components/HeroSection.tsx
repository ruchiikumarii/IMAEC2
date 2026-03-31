import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export default function HeroSection() {
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
            className="text-[1.125rem] text-slate-100 mb-10 leading-[1.72] max-w-[58ch]"
          >
            Delivering safe, high-quality solutions that protect lives — across hospitals, homes and essential industries.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mb-10">
            <button className="group flex items-center justify-center min-h-[56px] bg-[#166534] hover:bg-[#14532D] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_12px_rgba(46,125,50,0.3),0_2px_4px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_6px_16px_rgba(46,125,50,0.4)] will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1929]">
              Request Business Enquiry
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="group flex items-center justify-center min-h-[56px] border-2 border-white/90 bg-white/10 backdrop-blur-[10px] text-white hover:bg-white/20 hover:border-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1929]">
              Download Company Profile
              <Download size={18} className="ml-2 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
