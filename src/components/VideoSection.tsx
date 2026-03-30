import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function VideoSection() {
  return (
    <section className="py-24 bg-white">
      <style>{`
        @keyframes soft-pulse {
          0% { transform: scale(1); opacity: 0.45; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        .video-soft-pulse {
          animation: soft-pulse 2.2s ease-out infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#f0faf0] border border-green-200 text-[#166534] text-sm font-semibold mb-6">
            OUR STORY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d] mb-6">
            Inside IMAEC
          </h2>
          <p className="text-lg text-[#64748b]">
            Take a closer look at our manufacturing processes, infrastructure and commitment to quality.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto rounded-[20px] overflow-hidden shadow-[0_16px_40px_rgba(15,31,61,0.12)] border border-gray-100 bg-gray-200 aspect-video group cursor-pointer"
        >
          {/* Placeholder Image */}
          <img 
            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2069&auto=format&fit=crop" 
            alt="IMAEC Facility Video" 
            className="w-full h-full object-cover brightness-[0.96] transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
          />
          
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors duration-500"></div>

          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 border border-gray-100 text-xs font-medium text-[#0f1f3d] shadow-sm">
            Manufacturing Facility Tour
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#166534]/35 rounded-full video-soft-pulse"></div>
              <div className="absolute inset-0 bg-[#166534]/20 rounded-full video-soft-pulse" style={{ animationDelay: '1.1s' }}></div>
              <div className="relative z-10 w-20 h-20 bg-[#166534] rounded-full flex items-center justify-center shadow-[0_10px_26px_rgba(15,31,61,0.22)] transform group-hover:scale-110 transition-transform duration-300">
                <Play size={32} className="text-white ml-2" fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
