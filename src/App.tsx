/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import AboutSection from './components/AboutSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ProductsSection from './components/ProductsSection';
import IndustriesSection from './components/IndustriesSection';
import FacilitySection from './components/FacilitySection';
import GlobalPresence from './components/GlobalPresence';
import VideoSection from './components/VideoSection';
import WhyIMAEC from './components/WhyIMAEC';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <CapabilitiesSection />
        <ProductsSection />
        <IndustriesSection />
        <FacilitySection />
        <GlobalPresence />
        <VideoSection />
        <WhyIMAEC />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
