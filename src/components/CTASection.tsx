import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-[#fafbfa] text-[#0f1f3d] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Partner with IMAEC to Build Safer, Healthier Solutions
        </h2>
        <p className="text-xl text-[#64748b] mb-12 leading-relaxed max-w-3xl mx-auto">
          Work with a trusted manufacturing partner delivering consistent quality, scalable production and reliable global supply.
        </p>
        <button className="group inline-flex items-center justify-center bg-[#166534] hover:bg-[#065f46] text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_8px_22px_rgba(22,101,52,0.2)] hover:scale-[1.03]">
          Become a Partner <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
        <p className="mt-6 text-sm text-[#64748b] font-medium">
          Trusted by partners across 20+ countries
        </p>
      </div>
    </section>
  );
}
