/* src/app/page.js */
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Innovations from "@/components/sections/Innovations";
import Ecosystem from "@/components/sections/Ecosystem";
import Partnership from "@/components/sections/Partnership";
import Footer from "@/components/navigation/Footer";


 

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      <Innovations />
      <Ecosystem />    
      <Partnership />  
      <Footer />
    </main>
  );
}