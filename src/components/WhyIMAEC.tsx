import { motion } from 'motion/react';
import { TrendingUp, ShieldCheck, Layers, Truck, Globe2 } from 'lucide-react';

export default function WhyIMAEC() {
  const reasons = [
    { 
      num: "01", 
      icon: <TrendingUp size={24} />, 
      title: "Scalable manufacturing capabilities",
      desc: "From small batches to high-volume production, our facilities scale with your business needs."
    },
    { 
      num: "02", 
      icon: <ShieldCheck size={24} />, 
      title: "Strong quality and compliance framework",
      desc: "WHO-GMP certified processes with rigorous quality checks at every stage of manufacturing."
    },
    { 
      num: "03", 
      icon: <Layers size={24} />, 
      title: "Diverse product portfolio",
      desc: "500+ products across disinfectants, consumables, hygiene and specialty categories."
    },
    { 
      num: "04", 
      icon: <Truck size={24} />, 
      title: "Reliable supply chain",
      desc: "Consistent raw material sourcing and on-time delivery across domestic and global markets."
    },
    { 
      num: "05", 
      icon: <Globe2 size={24} />, 
      title: "Growing global presence",
      desc: "Serving partners across 9+ countries with expanding reach into new international markets."
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
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-[#16a34a] text-sm font-semibold mb-6">
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
              className="flex-1 bg-white rounded-2xl p-6 shadow-md border border-gray-100 border-t-[3px] border-t-transparent hover:border-t-[#16a34a] hover:-translate-y-[6px] hover:shadow-lg transition-all duration-300 ease-in-out group"
            >
              <div className="text-4xl font-bold text-green-100 mb-4 group-hover:text-green-200 transition-colors">
                {reason.num}
              </div>
              <div className="text-[#16a34a] mb-4">
                {reason.icon}
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
