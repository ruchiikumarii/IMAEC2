import { motion } from 'motion/react';
import { Pill, ShieldCheck, Stethoscope, Factory } from 'lucide-react';

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: <Pill size={28} className="text-[#3b82f6]" />,
      title: "Pharmaceutical Manufacturing",
      desc: "Formulation and production of high-quality pharmaceutical and hygiene products.",
      bg: "bg-[#eff6ff]"
    },
    {
      icon: <ShieldCheck size={28} className="text-[#16a34a]" />,
      title: "Disinfectants & Hygiene Solutions",
      desc: "Hospital-grade disinfectants and institutional hygiene solutions.",
      bg: "bg-[#f0fdf4]"
    },
    {
      icon: <Stethoscope size={28} className="text-[#f97316]" />,
      title: "Medical Consumables",
      desc: "Production of essential medical and surgical consumables.",
      bg: "bg-[#fff7ed]"
    },
    {
      icon: <Factory size={28} className="text-purple-500" />,
      title: "Contract Manufacturing (CDMO)",
      desc: "End-to-end manufacturing support for healthcare and hygiene brands.",
      bg: "bg-[#faf5ff]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="capabilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-[#16a34a] text-sm font-semibold mb-6">
            WHAT WE DO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d] mb-6">
            Our Manufacturing Capabilities
          </h2>
          <p className="text-lg text-[#64748b]">
            Built to deliver consistency, quality and scale across diverse healthcare needs.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative h-full bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-t-4 border-transparent hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-green-600 transition-all duration-300 ease-in-out group"
            >
              <div className="absolute top-4 right-4 text-[48px] font-[800] text-[rgba(0,0,0,0.04)] leading-none">
                0{index + 1}
              </div>
              <div className={`w-14 h-14 rounded-2xl ${cap.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0f1f3d] mb-4">{cap.title}</h3>
              <p className="text-[#64748b] leading-relaxed">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
