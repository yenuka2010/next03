import Image from "next/image";
import Navbar from "./components/Navbar";
import OurProducts from "./components/ourproduct";
import Footer from "./components/footer";

export default function Home() {
  return (
  <div>
<>    
    <Navbar />
    <OurProducts />
    <Footer />
</>
  </div>
  );
}