import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function VideoSection() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-[#16a34a] text-sm font-semibold mb-6">
            OUR STORY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d] mb-6">
            Inside IMAEC
          </h2>
          <p className="text-lg text-[#64748b]">
            Take a closer look at our manufacturing excellence, infrastructure and commitment to quality.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#16a34a]/20 bg-gray-200 aspect-video group cursor-pointer"
        >
          {/* Placeholder Image */}
          <img 
            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2069&auto=format&fit=crop" 
            alt="IMAEC Facility Video" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
          />
          
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#16a34a] rounded-full animate-ping opacity-60"></div>
              <div className="relative z-10 w-20 h-20 bg-[#16a34a] rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                <Play size={32} className="text-white ml-2" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t-4 border-l-4 border-[#16a34a] rounded-tl-xl"></div>
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b-4 border-r-4 border-[#16a34a] rounded-br-xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
