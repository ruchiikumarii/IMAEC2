import { motion } from 'motion/react';
import { TrendingUp, ShieldCheck, Layers, Truck, Globe2 } from 'lucide-react';

export default function WhyIMAEC() {
  const reasons = [
    { 
      Icon: TrendingUp,
      title: "Scalable manufacturing capabilities",
      desc: "From pilot batches to high-volume output, we scale reliably with your product roadmap."
    },
    { 
      Icon: ShieldCheck,
      title: "Strong quality and compliance framework",
      desc: "WHO-GMP aligned processes supported by rigorous quality checks at every manufacturing stage."
    },
    { 
      Icon: Layers,
      title: "Diverse product portfolio",
      desc: "A broad portfolio across disinfectants, hygiene, consumables and specialty healthcare segments."
    },
    { 
      Icon: Truck,
      title: "Reliable supply chain",
      desc: "Ensuring uninterrupted supply with strong sourcing and efficient distribution across domestic and global markets."
    },
    { 
      Icon: Globe2,
      title: "Growing global presence",
      desc: "Trusted by partners in multiple international markets with a steadily expanding export footprint."
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  } as const;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#f0faf0] border border-green-200 text-[#166534] text-sm font-semibold mb-6">
            OUR EDGE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d]">
            Why Partner With IMAEC
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row gap-4 justify-center"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex-1 rounded-[20px] p-6 border border-gray-100 shadow-sm hover:-translate-y-[6px] hover:shadow-lg hover:border-green-200 transition-all duration-300 ease-in-out group ${index === 1 ? 'bg-[#f8faf8] border-t border-t-green-300' : 'bg-white'}`}
            >
              <div className="mb-4 w-12 h-12 rounded-full bg-[#e8f3ea] flex items-center justify-center transition-all duration-300 group-hover:bg-[#166534]">
                <reason.Icon size={24} className="text-[#166534] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0f1f3d] leading-snug">
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
