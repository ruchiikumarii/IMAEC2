import { motion } from 'motion/react';
import { Pill, ShieldCheck, Stethoscope, Factory } from 'lucide-react';

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: <Pill size={28} className="text-[#166534]" />,
      title: "Pharmaceutical Manufacturing",
      desc: "End-to-end formulation and production of pharmaceutical and hygiene products, ensuring consistent quality and compliance."
    },
    {
      icon: <ShieldCheck size={28} className="text-[#166534]" />,
      title: "Disinfectants & Hygiene",
      desc: "Trusted hygiene solutions designed to meet hospital-grade and institutional safety standards."
    },
    {
      icon: <Stethoscope size={28} className="text-[#166534]" />,
      title: "Medical Consumables",
      desc: "Reliable production of essential medical and surgical consumables used across healthcare facilities."
    },
    {
      icon: <Factory size={28} className="text-[#166534]" />,
      title: "Contract Manufacturing",
      desc: "Flexible manufacturing partnerships supporting healthcare brands from development to delivery."
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
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#f0faf0] border border-green-200 text-[#166534] text-sm font-semibold mb-6">
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
              className="h-full bg-white rounded-[20px] p-8 border border-gray-100 shadow-sm hover:-translate-y-[6px] hover:shadow-lg hover:border-green-200 transition-all duration-300 ease-in-out group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f0faf0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
