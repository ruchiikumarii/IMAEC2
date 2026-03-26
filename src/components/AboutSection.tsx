import { motion } from 'motion/react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-[#16a34a] text-sm font-semibold mb-6">
              ABOUT IMAEC
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d] mb-8 leading-tight">
              A Manufacturing Partner Built for Scale & Reliability
            </h2>
            
            <div className="pl-6 border-l-4 border-[#16a34a] mb-6">
              <p className="text-lg text-[#0f1f3d] font-medium leading-relaxed">
                IMAEC is an integrated pharmaceutical and hygiene manufacturing company, delivering high-quality products across disinfectants, medical consumables, hygiene solutions and contract manufacturing.
              </p>
            </div>
            
            <p className="text-[#64748b] text-lg leading-relaxed mb-10">
              With advanced infrastructure, strict quality protocols and a growing global footprint, we support healthcare institutions, distributors and partners with reliable, scalable manufacturing.
            </p>

            {/* Stats */}
            <div ref={ref} className="grid grid-cols-3 gap-6 pt-6">
              <div className="bg-white p-4 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-t-2 border-[#16a34a]">
                <div className="text-3xl font-bold text-[#16a34a] mb-1">
                  {inView ? <CountUp end={500} duration={2.5} /> : '0'}+
                </div>
                <div className="text-sm font-medium text-[#0f1f3d]">Products</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-t-2 border-[#16a34a]">
                <div className="text-3xl font-bold text-[#16a34a] mb-1">
                  {inView ? <CountUp end={20} duration={2.5} /> : '0'}+
                </div>
                <div className="text-sm font-medium text-[#0f1f3d]">Countries</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-t-2 border-[#16a34a]">
                <div className="text-3xl font-bold text-[#16a34a] mb-1">
                  {inView ? <CountUp end={10} duration={2.5} /> : '0'}+
                </div>
                <div className="text-sm font-medium text-[#0f1f3d]">Years</div>
              </div>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] w-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2069&auto=format&fit=crop" 
              alt="Pharma Manufacturing" 
              className="rounded-2xl w-full h-full object-cover overflow-hidden"
            />
            <img 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop" 
              alt="Quality Control Laboratory" 
              className="absolute bottom-4 left-4 w-48 rounded-xl border-4 border-white shadow-xl object-cover"
            />
            <div className="absolute top-4 right-4 bg-[#16a34a] text-white rounded-full px-3 py-1 text-xs font-semibold shadow-md">
              WHO-GMP Certified ✔
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
