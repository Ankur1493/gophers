"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypeWrite() {
  const words = [
    {
      text: "Learn",
      className: "text-second",
    },
    {
      text: "Golang",
      className: "text-second",
    },
    {
      text: "in ",
      className: "text-second",
    },
    {
      text: "Hands-on",
      className: "text-second",
    },
    {
      text: "Approach",
      className: "text-second"
    },
    {
      text: "with",
      className: "text-second"
    },
    {
      text: "Gophers",
      className: "text-first dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-1/2 mb-8">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-layer border dark:border-white border-transparent text-white text-md">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-gradient-to-r from-secondDark to-second text-black border border-black  text-md">
          Signup
        </button>
      </div>
    </div>
  );
}
