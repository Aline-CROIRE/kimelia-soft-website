import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Innovations from "@/components/sections/Innovations";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      <Innovations />
    </main>
  );
}