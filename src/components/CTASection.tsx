import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0f1f3d] to-[#16a34a] text-white relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Looking for a Reliable Manufacturing Partner?
        </h2>
        <p className="text-xl text-green-50 mb-12 leading-relaxed max-w-3xl mx-auto">
          Whether you are a distributor, healthcare institution or brand looking for contract manufacturing, IMAEC is equipped to support your growth.
        </p>
        <button className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-[#16a34a] px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
          Become a Partner <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </section>
  );
}
