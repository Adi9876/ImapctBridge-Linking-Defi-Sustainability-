import Navbar from "@/components/Navbar";
import Hero from '@/components/Home/Hero';
import WeProvide from '@/components/Home/WeProvide';
import ProjectOwner from "@/components/Home/ProjectOwner";
import InvestorMessage from '@/components/Home/InvestorMessage';
import Pricing from "@/components/Home/Pricing";
import Footer from "@/components/Home/Footer";
import MSNavbar from "@/components/Home/MSNavbar";

const commonInputStyle = "outline-none border-[0.5px] border-gray-300 rounded-sm py-1 px-2";
const commonBtnStyle = "text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 rounded-sm py-1 px-5";


export default function Home() {
  return (
    <div className="bg-gradient-to-t from-black to-violet-950 flex flex-col">
      <div className="w-full max-md:hidden">
        <Navbar />
      </div>

      <div className="w-full md:hidden ">
        <MSNavbar />
      </div>

      <div className="w-full">
        <Hero />
      </div>

      <div className="w-full">
        <WeProvide />
      </div>

      <div className="w-full">
        <ProjectOwner />
      </div>

      <div className="w-full">
        <InvestorMessage />
      </div>

      <div className="w-full">
        <Pricing />
      </div>
      <div className="w-full bg-gradient from-violet-950 to-black">
        <Footer />
      </div>
    </div>
  )
}