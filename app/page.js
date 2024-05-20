import Image from "next/image";
import Navbar from "./components/Navbar";
import OurProducts from "./components/ourproduct";
import Footer from "./components/footer";
import Hero from "./components/hero";

export default function Home() {
  return (
  <div>
<>    
    <Navbar />
    <Hero />
    <OurProducts />
    <Footer />
</>
  </div>
  );
}