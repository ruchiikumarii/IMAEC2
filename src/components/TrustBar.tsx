import { CheckCircle2 } from 'lucide-react';

export default function TrustBar() {
  const items = [
    "WHO-GMP Compliant",
    "ISO Certified Manufacturing",
    "Global Export Presence",
    "High-Capacity Production Facilities"
  ];

  // Duplicate items to create seamless loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="bg-[#f0fdf4] border-y border-green-200 py-4 overflow-hidden flex relative">
      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] min-w-full">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <CheckCircle2 size={18} className="text-[#16a34a] mr-2 flex-shrink-0" />
            <span className="text-[#0f1f3d] font-medium text-sm md:text-base">{item}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a] ml-16 opacity-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
