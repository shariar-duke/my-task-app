import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TaskBorad from "./components/task/TaskBorad";

export default function App() {
  return (
    <div className="flex flex-col bg-[#191D26] h-[100vh]">
      <Header />
      <div className="container mx-auto  mt-[100px] ">
        <HeroSection />
        <TaskBorad className="mt-5"/>
      </div>
    </div>
  );
}
