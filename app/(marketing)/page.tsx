import { GlobeComponent } from "@/components/Globe";
import { TypeWrite } from "@/components/TypeWrite";

export default function Home() {
  return (
    <div className=" h-full w-full text-first">
      <GlobeComponent />
      <TypeWrite />
    </div>
  );
}
