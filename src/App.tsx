import Header from "./components/Header";
import Hero from "./components/Hero";
import GoogleReviews from "./components/GoogleReviews";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import Catalog from "./components/Catalog";
import Differentials from "./components/Differentials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <main>
        <Hero />
        <GoogleReviews />
        <SocialProof />
        <Services />
        <Catalog />
        <Differentials />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
