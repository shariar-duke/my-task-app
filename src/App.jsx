import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <div className="flex flex-col bg-[#191D26] h-[100vh]">
      <Header />
      <div className="container mx-auto  mt-[100px] ">
        <HeroSection />
      </div>
    </div>
  );
}
