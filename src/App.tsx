import "./index.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import SocialProof from "./components/SocialProof";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import LocationContact from "./components/LocationContact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-surface-0 text-text-primary">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesGrid />
        <SocialProof />
        <Testimonials />
        <FAQSection />
        <LocationContact />
      </main>
      <Footer />
    </div>
  );
}
