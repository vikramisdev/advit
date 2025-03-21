import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import Services from "./components/services";
import QuoteForm from "./components/quoteform";
import Footer from "./components/footer";
import Marquee from "../components/ui/marquee";

export default function Home() {
  return (
    <div className="dark:bg-black bg-white">
      <Navbar />
      <HeroSection />
      <Marquee className="flex">
        <span>Expert in 3D Modeling & Rendering • Game-Ready Assets • Architectural Visualization • Photorealistic Texturing • 3D Animation & Motion Graphics • CAD & Product Design • Unreal Engine & Unity Integration • Available for Freelance & Collaboration •</span>
      </Marquee>
      <Services />
      <QuoteForm />
      <Footer />
    </div>
  );
}
