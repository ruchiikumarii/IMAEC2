import { motion } from 'motion/react';
import { Building2, Home, Hospital, ArrowRight, Download, CheckCircle2 } from 'lucide-react';

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
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-white">
      {/* FULL WIDTH BACKGROUND IMAGE */}
      <img 
        src="/imaec_BG.jpeg" 
        alt="IMAEC — Hospital, Home and Enterprise"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* OVERLAY */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 35%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0.0) 100%)'
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
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f1f3d] leading-tight mb-6">
            India's Trusted Partner for Pharmaceutical & Hygiene Manufacturing
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-[#64748b] mb-8 leading-relaxed">
            From disinfectants to medical consumables, IMAEC delivers high-quality, compliant and scalable manufacturing solutions for healthcare, institutional and global markets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="flex items-center justify-center bg-[#16a34a] hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-green-200">
              Request Business Enquiry <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="flex items-center justify-center border-2 border-[#0f1f3d] text-[#0f1f3d] hover:bg-gray-50 px-8 py-3.5 rounded-xl font-medium transition-all">
              Download Company Profile <Download size={18} className="ml-2" />
            </button>
          </motion.div>

          {/* Trust Row */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#0f1f3d]">
            <div className="flex items-center"><CheckCircle2 size={16} className="text-[#16a34a] mr-1.5" /> WHO-GMP Certified</div>
            <div className="flex items-center"><CheckCircle2 size={16} className="text-[#16a34a] mr-1.5" /> ISO 9001:2015</div>
            <div className="flex items-center"><CheckCircle2 size={16} className="text-[#16a34a] mr-1.5" /> Global Export</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
