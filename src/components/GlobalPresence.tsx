import { useState } from 'react';
import { motion } from 'motion/react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "Saudi Arabia", coordinates: [45.0792, 23.8859] },
  { name: "Bhutan", coordinates: [90.4336, 27.5142] },
  { name: "Nepal", coordinates: [84.1240, 28.3949] },
  { name: "UAE", coordinates: [53.8478, 23.4241] },
  { name: "Vietnam", coordinates: [108.2772, 14.0583] },
  { name: "Sri Lanka", coordinates: [80.7718, 7.8731] },
  { name: "Tanzania", coordinates: [34.8888, 6.3690] },
  { name: "Republic of Kenya", coordinates: [37.9062, 0.0236] },
  { name: "Cameroon", coordinates: [12.3547, 5.9631] },
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
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .animate-ping-1 {
          animation: ping 2s infinite ease-out;
        }
        .animate-ping-2 {
          animation: ping 2s infinite ease-out;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-[#16a34a] text-sm font-semibold mb-6">
            OUR REACH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d] mb-6">
            Expanding Across Global Markets
          </h2>
          <p className="text-lg text-[#64748b]">
            IMAEC serves partners across multiple international markets, delivering reliable manufacturing solutions tailored to regional healthcare needs.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] mb-16 bg-[#f8fafc] rounded-3xl overflow-hidden border border-gray-100">
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
                    fill="#e0f2fe"
                    stroke="#ffffff"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#bae6fd", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates }, index) => (
              <Marker 
                key={name} 
                coordinates={coordinates as [number, number]}
                onMouseEnter={() => setHoveredLocation(name)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <foreignObject x="-4" y="-4" width="8" height="8" style={{ overflow: 'visible' }}>
                  <div className="relative w-full h-full bg-[#16a34a] rounded-full cursor-pointer">
                    <div className="absolute inset-0 bg-[#16a34a] rounded-full animate-ping-1" style={{ animationDelay: `${index * 0.3}s` }}></div>
                    <div className="absolute inset-0 bg-[#16a34a] rounded-full animate-ping-2" style={{ animationDelay: `${(index * 0.3) + 1}s` }}></div>
                    {hoveredLocation === name && (
                      <div 
                        className="absolute bg-white rounded-lg shadow-lg px-3 py-1 text-xs font-semibold text-[#0f1f3d] whitespace-nowrap z-50"
                        style={{ left: '50%', top: '50%', transform: 'translateX(-50%) translateY(-130%)' }}
                      >
                        {name}
                      </div>
                    )}
                  </div>
                </foreignObject>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {/* Stats Row */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-[#f0fdf4] rounded-2xl border border-green-100">
            <div className="text-4xl font-bold text-[#16a34a] mb-2">
              {inView ? <CountUp end={20} duration={2.5} /> : '0'}+
            </div>
            <div className="text-sm font-semibold text-[#0f1f3d] uppercase tracking-wide">Countries</div>
          </div>
          <div className="text-center p-6 bg-[#f0fdf4] rounded-2xl border border-green-100">
            <div className="text-4xl font-bold text-[#16a34a] mb-2">
              {inView ? <CountUp end={500} duration={2.5} /> : '0'}+
            </div>
            <div className="text-sm font-semibold text-[#0f1f3d] uppercase tracking-wide">Products</div>
          </div>
          <div className="text-center p-6 bg-[#f0fdf4] rounded-2xl border border-green-100">
            <div className="text-4xl font-bold text-[#16a34a] mb-2">
              {inView ? <CountUp end={15} duration={2.5} /> : '0'}+
            </div>
            <div className="text-sm font-semibold text-[#0f1f3d] uppercase tracking-wide">Years</div>
          </div>
          <div className="text-center p-6 bg-[#f0fdf4] rounded-2xl border border-green-100 flex flex-col justify-center">
            <div className="text-lg font-bold text-[#16a34a] mb-1 leading-tight">Global Export</div>
            <div className="text-sm font-semibold text-[#0f1f3d] uppercase tracking-wide">Presence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
