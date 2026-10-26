import { Banner } from "@/components/banner";
import { Features } from "@/components/features";
import { Portfolio } from "@/components/portfolio";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] font-sans text-white">
      <Banner />
      <div className="  grid grid-cols-1 lg:grid-cols-3 items-start max-w-7xl mx-auto">
        <div className="lg:col-span-2">
          <Features />
        </div>
        <div className="lg:col-span-1">
          <Skills />
        </div>
      </div>
      <Portfolio />
    </div>
  );
}
