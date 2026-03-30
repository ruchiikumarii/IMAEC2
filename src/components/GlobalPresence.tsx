import { useState } from 'react';
import { motion } from 'motion/react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers: { name: string; coordinates: [number, number] }[] = [
  { name: 'UAE', coordinates: [53.8478, 23.4241] },
  { name: 'Saudi Arabia', coordinates: [45.0792, 23.8859] },
  { name: 'Kenya', coordinates: [37.9062, 0.0236] },
  { name: 'Nigeria', coordinates: [8.6753, 9.082] },
  { name: 'Tanzania', coordinates: [34.8888, 6.369] },
  { name: 'Nepal', coordinates: [84.124, 28.3949] },
  { name: 'Bhutan', coordinates: [90.4336, 27.5142] },
  { name: 'Sri Lanka', coordinates: [80.7718, 7.8731] },
  { name: 'Vietnam', coordinates: [108.2772, 14.0583] },
];

export default function GlobalPresence() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <section id="global-presence" className="py-24 bg-white overflow-hidden">
      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.45; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        .animate-ping-1 {
          animation: ping 2s infinite ease-out;
        }
        .animate-ping-2 {
          animation: ping 2s infinite ease-out;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#f0faf0] text-[#166534] text-sm font-semibold mb-6 border border-green-200">
            OUR REACH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d] mb-6">
            Expanding Across Trusted Global Markets
          </h2>
          <p className="text-lg text-[#64748b]">
            Delivering reliable pharmaceutical and hygiene solutions across key international regions with consistent quality and trust.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] mb-16 bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-md"
        >
          <ComposableMap
            projectionConfig={{ scale: 140 }}
            width={800}
            height={400}
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#d7e3d7"
                    stroke="#ffffff"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#c9dcc9", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates }, index) => (
              <Marker 
                key={name} 
                coordinates={coordinates}
                onMouseEnter={() => setHoveredLocation(name)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <foreignObject x={name === 'India' ? -9 : -8} y={name === 'India' ? -9 : -8} width={name === 'India' ? 18 : 16} height={name === 'India' ? 18 : 16} style={{ overflow: 'visible' }}>
                  <div
                    className={`relative rounded-full cursor-pointer ${name === 'India' ? 'w-[18px] h-[18px]' : 'w-4 h-4'}`}
                  >
                    <div className={`absolute inset-0 rounded-full bg-[#166534]/10 ${name === 'India' ? 'shadow-[0_0_0_3px_rgba(22,101,52,0.15)]' : 'shadow-[0_0_0_2px_rgba(22,101,52,0.12)]'}`}></div>
                    <div className="absolute inset-[2px] rounded-full bg-[#166534]"></div>
                    <div className={`absolute rounded-full bg-white ${name === 'India' ? 'inset-[6px]' : 'inset-[5px]'}`}></div>
                    <div className="absolute inset-0 rounded-full bg-[#166534]/20 animate-ping-1" style={{ animationDelay: `${index * 0.16}s` }}></div>
                    <div className="absolute inset-0 rounded-full bg-[#166534]/12 animate-ping-2" style={{ animationDelay: `${(index * 0.16) + 1}s` }}></div>

                    {hoveredLocation === name && (
                      <div 
                        className="absolute bg-white border border-gray-100 rounded-lg shadow-md px-2.5 py-1 text-[11px] font-medium text-[#0f1f3d] whitespace-nowrap z-50"
                        style={{ left: '50%', top: '-8px', transform: 'translateX(-50%) translateY(-100%)' }}
                      >
                        {name}
                      </div>
                    )}
                  </div>
                </foreignObject>
              </Marker>
            ))}
          </ComposableMap>
        </motion.div>

        <div className="text-center mb-14 max-w-4xl mx-auto">
          <p className="text-[#0f1f3d] font-medium leading-relaxed">
            Serving partners across 20+ countries with a growing global footprint built on consistent quality, trust and long-term partnerships.
          </p>
          <p className="text-[#64748b] mt-3 leading-relaxed">
            Trusted by healthcare institutions, businesses and global partners who rely on consistent quality and dependable supply.
          </p>
        </div>

        {/* Stats Row */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-4"
        >
          <div className="relative text-center p-6 pt-7 bg-white rounded-[20px] border border-gray-100 shadow-[0_8px_22px_rgba(15,31,61,0.08)] hover:-translate-y-1 hover:border-green-200 hover:shadow-[0_14px_30px_rgba(15,31,61,0.13)] transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[20px] bg-[#166534]/85"></div>
            <div className="text-[2.65rem] font-extrabold text-[#166534] mb-2 leading-none">
              {inView ? <CountUp end={20} duration={2.5} /> : '0'}+
            </div>
            <div className="text-sm font-medium text-[#0f1f3d]">Active global markets served</div>
          </div>
          <div className="relative text-center p-6 pt-7 bg-white rounded-[20px] border border-gray-100 shadow-[0_8px_22px_rgba(15,31,61,0.08)] hover:-translate-y-1 hover:border-green-200 hover:shadow-[0_14px_30px_rgba(15,31,61,0.13)] transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[20px] bg-[#166534]/85"></div>
            <div className="text-[2.65rem] font-extrabold text-[#166534] mb-2 leading-none">
              {inView ? <CountUp end={500} duration={2.5} /> : '0'}+
            </div>
            <div className="text-sm font-medium text-[#0f1f3d]">Diverse product portfolio across healthcare and hygiene</div>
          </div>
          <div className="relative text-center p-6 pt-7 bg-white rounded-[20px] border border-gray-100 shadow-[0_8px_22px_rgba(15,31,61,0.08)] hover:-translate-y-1 hover:border-green-200 hover:shadow-[0_14px_30px_rgba(15,31,61,0.13)] transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[20px] bg-[#166534]/85"></div>
            <div className="text-[2.65rem] font-extrabold text-[#166534] mb-2 leading-none">
              {inView ? <CountUp end={15} duration={2.5} /> : '0'}+
            </div>
            <div className="text-sm font-medium text-[#0f1f3d]">Proven manufacturing experience and industry expertise</div>
          </div>
          <div className="relative text-center p-6 pt-7 bg-white rounded-[20px] border border-gray-100 shadow-[0_8px_22px_rgba(15,31,61,0.08)] hover:-translate-y-1 hover:border-green-200 hover:shadow-[0_14px_30px_rgba(15,31,61,0.13)] transition-all duration-300 flex flex-col justify-center">
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[20px] bg-[#166534]/85"></div>
            <div className="text-lg font-bold text-[#166534] mb-1 leading-tight">Global Export Presence</div>
            <div className="text-sm font-medium text-[#0f1f3d]">Reliable supply network across international markets</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
