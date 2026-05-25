import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Inside from "./components/Inside";
import Preview from "./components/Preview";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";

export default function App() {
  return (
    <div className="bg-yellow-300 scroll-smooth ">
     
      <Navbar />
      <Hero />
      <About/>
      <Inside />
      <Preview />
      <Reviews />
      <CTA />

    </div>
  );
}