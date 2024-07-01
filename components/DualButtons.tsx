import { Button } from "./ui/button"

export function DualButtons() {
  return (
    <div className="relative z-10 flex gap-7">
      <Button className="bg-gradient-to-r from-layer to-layerLight border border-gray-800 w-[180px] py-2 text-[20px] rounded-lg text-second hover:text-highlight duration-100">Join Now</Button>
      <Button className="bg-gradient-to-r from-secondDark to-second  w-[180px] py-2 text-[20px] rounded-lg text-layerLight duration-100">Sign Up</Button>
    </div>
  )
}
