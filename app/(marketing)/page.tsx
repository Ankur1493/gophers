import { GlobeComponent } from "@/components/Globe";
import { Tagline } from "@/components/Tagline";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <div className=" h-full w-full text-first">
      <GlobeComponent />
      <Tagline />
      <Features />
    </div>
  );
}
