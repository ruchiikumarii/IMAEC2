import { motion } from 'motion/react';
import { Factory, Wind, Settings, Microscope, ArrowRight } from 'lucide-react';

export default function FacilitySection() {
  const facilities = [
    { 
      icon: <Factory size={28} />, 
      title: "High-capacity production lines",
      desc: "Multi-shift production capability to meet large-scale domestic and export demand."
    },
    { 
      icon: <Wind size={28} />, 
      title: "Cleanroom-controlled environments",
      desc: "ISO-compliant cleanrooms ensuring contamination-free manufacturing."
    },
    { 
      icon: <Settings size={28} />, 
      title: "Automated filling & packaging systems",
      desc: "High-speed automated lines for accurate filling, sealing and packaging."
    },
    { 
      icon: <Microscope size={28} />, 
      title: "In-house quality testing laboratories",
      desc: "Fully equipped labs for raw material, in-process and finished goods testing."
    }
  ];

  return (
    <section className="py-24 bg-[#0f1f3d] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#16a34a]/10 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-green-400 text-sm font-semibold mb-6 border border-white/20">
              OUR STRENGTH
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Built on Infrastructure,<br />Driven by Precision
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Our manufacturing facilities are designed to meet global quality standards with advanced production lines, controlled environments and strict quality control systems.
            </p>
            <button className="flex items-center justify-center bg-[#16a34a] hover:bg-green-600 text-white px-8 py-3.5 rounded-xl font-medium transition-colors shadow-lg shadow-green-900/50">
              Explore Our Facility <ArrowRight size={18} className="ml-2" />
            </button>
          </div>

          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
            {facilities.map((fac, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 flex flex-col justify-center min-h-[200px] group hover:bg-white/15 border-l-[3px] border-transparent hover:border-[#16a34a] hover:-translate-y-1 hover:brightness-110 transition-all duration-300 ease-in-out"
              >
                <div className="relative mb-6 w-14 h-14 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#16a34a]/20 rounded-full animate-ping opacity-75"></div>
                  <div className="relative z-10 bg-[#16a34a] text-white p-3 rounded-full">
                    {fac.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold leading-snug">
                  {fac.title}
                </h3>
                <p className="text-white/60 text-sm mt-2 leading-relaxed">
                  {fac.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
