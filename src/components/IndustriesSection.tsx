import { motion } from 'motion/react';
import { Hospital, FlaskConical, Building2, Hotel, Globe2 } from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    { 
      Icon: Hospital,
      title: "Hospitals",
      desc: "Supporting hospitals with reliable disinfectants and medical consumables to ensure safe and consistent patient care."
    },
    { 
      Icon: FlaskConical,
      title: "Pharmaceutical Companies",
      desc: "Partnering with pharmaceutical companies for scalable, compliant and high-quality manufacturing solutions."
    },
    { 
      Icon: Building2,
      title: "Facility Management",
      desc: "Providing institutional hygiene solutions designed for efficient and large-scale facility management."
    },
    { 
      Icon: Hotel,
      title: "Hospitality",
      desc: "Delivering premium hygiene solutions for hotels, offices and commercial environments."
    },
    { 
      Icon: Globe2,
      title: "Distributors",
      desc: "Enabling distributors with reliable supply partnerships across domestic and global markets."
    }
  ];

  return (
    <section id="industries" className="py-24 bg-[#fafbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#f0faf0] border border-green-200 text-[#166534] text-sm font-semibold mb-6">
            WHO WE SERVE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d] mb-6">
            Serving Critical Healthcare & Institutional Sectors
          </h2>
          <p className="text-lg text-[#64748b]">
            Our products and solutions are designed to meet the hygiene and safety requirements of diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${index % 2 === 0 ? 'bg-[#f8faf8]' : 'bg-white'} rounded-[20px] p-7 shadow-sm hover:shadow-lg border border-gray-100 hover:border-green-200 hover:-translate-y-[6px] transition-all duration-300 ease-in-out flex flex-col justify-between items-center text-center group min-h-[242px]`}
            >
              <div className="mb-5 p-4 bg-[#e8f3ea] rounded-full group-hover:scale-110 group-hover:bg-[#166534] transition-all duration-300 shadow-sm">
                <ind.Icon size={32} className="text-[#166534] transition-colors duration-300 group-hover:text-white" />
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
