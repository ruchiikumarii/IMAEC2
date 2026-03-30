import { Mail, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-[#0f1f3d] pt-20 pb-10 border-t border-gray-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 */}
          <div className="space-y-6">
            <div className="text-3xl font-bold tracking-wide">IMAEC</div>
            <p className="text-[#64748b] leading-relaxed text-sm">
              Integrated pharmaceutical and hygiene manufacturing company delivering quality products for global healthcare markets.
            </p>
            <p className="text-sm text-[#0f1f3d] font-medium">
              Committed to quality, safety and global manufacturing excellence.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#0f1f3d]">QUICK LINKS</h4>
            <ul className="space-y-3">
              {['About Us', 'Capabilities', 'Products', 'Industries', 'Global Presence', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#64748b] hover:text-[#166534] transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#0f1f3d]">CERTIFICATIONS</h4>
            <ul className="space-y-3">
              {['WHO-GMP Certified', 'ISO 9001:2015', 'ISO 13485', 'CE Marking'].map((cert) => (
                <li key={cert} className="text-[#64748b] text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#166534] mr-2"></span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#0f1f3d]">CONTACT</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@imaecpharma.com" className="text-[#64748b] hover:text-[#166534] transition-colors text-sm flex items-center">
                  <Mail size={16} className="mr-3" /> info@imaecpharma.com
                </a>
              </li>
              <li>
                <a href="#" className="text-[#64748b] hover:text-[#166534] transition-colors text-sm flex items-center">
                  <Download size={16} className="mr-3" /> Download Company Profile
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#64748b] text-sm">
            © 2026 IMAEC Pharma. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#64748b] hover:text-[#0f1f3d] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#64748b] hover:text-[#0f1f3d] text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
