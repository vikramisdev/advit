import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import Services from "./components/services";
import QuoteForm from "./components/quoteform";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="dark:bg-black bg-white">
      <Navbar />
      <HeroSection />
      <Services />
      <QuoteForm />
      <Footer />
    </div>
  );
}
