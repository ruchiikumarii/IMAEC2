import { motion } from 'motion/react';
import { Hospital, FlaskConical, Building2, Hotel, Globe2 } from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    { 
      icon: <Hospital size={32} className="text-[#3b82f6]" />, 
      title: "Hospitals & Healthcare Facilities",
      desc: "Supplying clinical-grade disinfectants and consumables to hospitals and healthcare networks."
    },
    { 
      icon: <FlaskConical size={32} className="text-[#16a34a]" />, 
      title: "Pharmaceutical Companies",
      desc: "Contract manufacturing and hygiene solutions for pharma brands and formulators."
    },
    { 
      icon: <Building2 size={32} className="text-[#f97316]" />, 
      title: "Facility Management Companies",
      desc: "Institutional hygiene products for large-scale facility operations."
    },
    { 
      icon: <Hotel size={32} className="text-purple-500" />, 
      title: "Hospitality & Commercial Spaces",
      desc: "Premium hygiene solutions for hotels, offices and commercial establishments."
    },
    { 
      icon: <Globe2 size={32} className="text-pink-500" />, 
      title: "Distributors & Global Markets",
      desc: "Reliable bulk supply partnerships for distributors across domestic and international markets."
    }
  ];

  return (
    <section id="industries" className="py-24 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-[#16a34a] text-sm font-semibold mb-6">
            WHO WE SERVE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d] mb-6">
            Serving Critical Healthcare & Institutional Sectors
          </h2>
          <p className="text-lg text-[#64748b]">
            Our products and solutions are designed to meet the hygiene and safety requirements of diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/60 hover:bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border-t-[3px] border-transparent hover:border-[#16a34a] hover:-translate-y-[6px] transition-all duration-300 ease-in-out flex flex-col justify-between items-center text-center group min-h-[220px]"
            >
              <div className="mb-4 p-4 bg-white rounded-full group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {ind.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0f1f3d] leading-snug mb-2">
                  {ind.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
