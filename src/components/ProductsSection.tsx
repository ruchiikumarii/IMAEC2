import { motion } from 'motion/react';
import { Shield, Droplets, Syringe, Building, Activity, ArrowRight } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      title: "Surface & Hospital Disinfectants",
      desc: "Effective disinfection solutions designed for clinical and hospital environments, built for everyday safety and compliance.",
      Icon: Shield,
      colSpan: "md:col-span-2",
      tone: "bg-[#f5f8f6]"
    },
    {
      title: "Hand Hygiene & Sanitization Products",
      desc: "Reliable hand hygiene solutions designed for everyday clinical and institutional safety.",
      Icon: Droplets,
      colSpan: "md:col-span-1",
      tone: "bg-white"
    },
    {
      title: "Medical & Surgical Consumables",
      desc: "Dependable consumables engineered to support safe, consistent and efficient patient care.",
      Icon: Syringe,
      colSpan: "md:col-span-1",
      tone: "bg-[#f8faf8]"
    },
    {
      title: "Institutional Hygiene Solutions",
      desc: "High-volume hygiene products tailored for institutions and managed facility environments.",
      Icon: Building,
      colSpan: "md:col-span-1",
      tone: "bg-white"
    },
    {
      title: "Dialysis & Specialty Products",
      desc: "Specialty products supporting renal care and advanced treatment protocols with dependable quality.",
      Icon: Activity,
      colSpan: "md:col-span-1",
      tone: "bg-[#f8faf8]"
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-14 gap-5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#f0faf0] border border-green-200 text-[#166534] text-sm font-semibold mb-6">
              OUR PORTFOLIO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d]">
              Comprehensive Product Portfolio
            </h2>
          </div>
          <button className="group flex items-center justify-center bg-[#166534] hover:bg-[#065f46] text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 w-fit whitespace-nowrap shadow-[0_8px_18px_rgba(22,101,52,0.16)] hover:-translate-y-0.5">
            View Product Categories <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${product.colSpan} ${product.tone} min-h-[180px] rounded-[20px] p-8 flex flex-col justify-between group cursor-pointer transition-all duration-300 ease-in-out border border-gray-100 shadow-sm hover:border-green-200 hover:shadow-lg hover:-translate-y-[6px]`}
            >
              {index === 0 && (
                <div className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#166534]/20 bg-white/80 flex items-center justify-center">
                  <ArrowRight size={14} className="text-[#166534]" />
                </div>
              )}

              <div className="bg-[#f0faf0] w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#166534]">
                <product.Icon size={30} className="text-[#166534] transition-colors duration-300 group-hover:text-white" />
              </div>
              <div className="mt-4">
                <h3 className={`font-bold text-[#0f1f3d] pr-4 mb-2 ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                  {product.title}
                </h3>
                <p className={`text-[#64748b] text-sm leading-relaxed ${index === 0 ? '[display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden' : ''}`}>
                  {product.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
