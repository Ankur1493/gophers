import { GlobeComponent } from "@/components/Globe";
import { Tagline } from "@/components/Tagline";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className=" h-full w-full text-first">
      <GlobeComponent />
      <Tagline />
      <Features />
      <UseCases leftImg={true} />
      <UseCases rightImg={true} />
      <Footer />
    </div>
  );
}
