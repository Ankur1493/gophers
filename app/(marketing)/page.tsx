import { GlobeComponent } from "@/components/Globe";
import { Tagline } from "@/components/Tagline";

export default function Home() {
  return (
    <div className=" h-full w-full text-first">
      <GlobeComponent />
      <Tagline />
    </div>
  );
}
