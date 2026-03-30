import { CheckCircle2 } from 'lucide-react';

export default function TrustBar() {
  const items = [
    'WHO-GMP Compliant',
    'ISO 9001:2015 Certified',
    'Global Export Presence',
    'High-Capacity Production',
  ];

  return (
    <div className="py-6 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-8 place-items-center">
          {items.map((item) => (
            <div key={item} className="flex items-center justify-center text-center text-[#0f1f3d] min-w-0">
              <CheckCircle2 size={14} className="text-[#166534] mr-2 flex-shrink-0" />
              <span className="text-sm md:text-[15px] font-normal tracking-[0.01em] text-[#334155]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
