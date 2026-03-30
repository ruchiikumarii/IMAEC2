import { motion } from 'motion/react';
import { Factory, Wind, Settings, Microscope, ArrowRight } from 'lucide-react';

export default function FacilitySection() {
  const facilities = [
    { 
      Icon: Factory,
      title: "High-capacity production lines",
      desc: "Multi-shift production capability to meet large-scale domestic and export demand."
    },
    { 
      Icon: Wind,
      title: "Cleanroom-controlled environments",
      desc: "ISO-compliant cleanrooms ensuring contamination-free manufacturing."
    },
    { 
      Icon: Settings,
      title: "Automated filling & packaging systems",
      desc: "High-speed automated lines for accurate filling, sealing and packaging."
    },
    { 
      Icon: Microscope,
      title: "In-house quality testing laboratories",
      desc: "Fully equipped labs for raw material, in-process and finished goods testing."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-white to-[#f8faf8] text-[#0f1f3d] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#f0faf0] text-[#166534] text-sm font-semibold mb-6 border border-green-200">
              OUR STRENGTH
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Built on Infrastructure,<br />Driven by Precision
            </h2>
            <p className="text-lg text-[#64748b] mb-12 leading-relaxed">
              Our facilities are built to meet global quality standards, combining advanced production systems, controlled environments and rigorous quality processes.
            </p>
            <button className="group flex items-center justify-center bg-[#166534] hover:bg-[#065f46] text-white px-8 py-3.5 rounded-2xl font-medium transition-all duration-300 shadow-[0_8px_20px_rgba(22,101,52,0.18)] hover:scale-[1.03]">
              Explore Our Facility <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
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
                className="bg-white rounded-[20px] p-8 flex flex-col justify-center min-h-[200px] group border border-gray-100 shadow-sm hover:border-green-200 hover:-translate-y-[6px] hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                <div className="mb-6 w-14 h-14 flex items-center justify-center bg-[#e8f3ea] rounded-full transition-all duration-300 group-hover:bg-[#166534]">
                  <fac.Icon size={28} className="text-[#166534] transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold leading-snug">
                  {fac.title}
                </h3>
                <p className="text-[#64748b] text-sm mt-2 leading-relaxed">
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
