import Image from "next/image";
import { Button } from "./ui/button";

export function Tagline() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[90%] rounded-lg py-8 my-8 flex flex-col justify-center items-center gap-10 relative  shadow-inner shadow-layerLight hover:shadow-second duration-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-layer to-layerLight border border-gray-800 opacity-40 rounded-lg"></div>
        <div className="relative z-10 text-center">
          <div className="flex justify-center items-center">
            <h1 className="text-highlight text-7xl font-bold">Learn Golang</h1>
            <Image className="mx-5" width={80} height={80} alt="" src="/Go.png" />
            <h1 className="text-highlight text-7xl font-bold">in the best way possible</h1>
          </div>
          <h1 className="text-highlight text-7xl font-bold"> with the help of <span className="text-second text-8xl">Gophers</span></h1>
        </div>
        <div className="relative z-10 flex gap-7">
          <Button className="bg-gradient-to-r from-layer to-layerLight border border-gray-800 w-[180px] py-2 text-[20px] rounded-lg text-second hover:text-highlight duration-100">Join Now</Button>
          <Button className="bg-gradient-to-r from-secondDark to-second  w-[180px] py-2 text-[20px] rounded-lg text-layerLight duration-100">Sign Up</Button>
        </div>
      </div>
    </div>
  )
}

