import { motion } from 'motion/react';
import { Shield, Droplets, Syringe, Building, Activity, ArrowRight } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      title: "Surface & Hospital Disinfectants",
      desc: "WHO-GMP certified surface disinfectants for clinical environments.",
      icon: <Shield size={28} className="text-blue-600" />,
      bg: "bg-blue-50",
      colSpan: "md:col-span-2"
    },
    {
      title: "Hand Hygiene & Sanitization Products",
      desc: "Alcohol-based sanitizers and hand wash solutions.",
      icon: <Droplets size={28} className="text-green-600" />,
      bg: "bg-green-50",
      colSpan: "md:col-span-1"
    },
    {
      title: "Medical & Surgical Consumables",
      desc: "Sterile consumables for surgical and clinical use.",
      icon: <Syringe size={28} className="text-purple-600" />,
      bg: "bg-purple-50",
      colSpan: "md:col-span-1"
    },
    {
      title: "Institutional Hygiene Solutions",
      desc: "Bulk hygiene solutions for facilities and institutions.",
      icon: <Building size={28} className="text-orange-600" />,
      bg: "bg-orange-50",
      colSpan: "md:col-span-1"
    },
    {
      title: "Dialysis & Specialty Products",
      desc: "Specialty products for renal care and dialysis support.",
      icon: <Activity size={28} className="text-pink-600" />,
      bg: "bg-pink-50",
      colSpan: "md:col-span-1"
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-[#16a34a] text-sm font-semibold mb-6">
              OUR PORTFOLIO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d]">
              Comprehensive Product Portfolio
            </h2>
          </div>
          <button className="flex items-center justify-center bg-[#16a34a] hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-colors w-fit whitespace-nowrap">
            View Product Categories <ArrowRight size={18} className="ml-2" />
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
              whileHover={{ scale: 1.02 }}
              className={`${product.bg} ${product.colSpan} min-h-[180px] rounded-3xl p-8 flex flex-col justify-between group cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg`}
            >
              <div className="bg-white/60 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-sm group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#0f1f3d] pr-4 mb-2">
                  {product.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
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
