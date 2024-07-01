import Image from "next/image"
import { DualButtons } from "./DualButtons";

interface UseCasesProps {
  leftImg?: boolean;
  rightImg?: boolean;
}

export function UseCases({ leftImg, rightImg }: UseCasesProps) {
  return (
    <div className="h-2/3 w-full flex justify-center items-center px-12 my-24">
      {leftImg &&
        <div className="flex w-[85%]">
          <div className="w-1/2 h-full">
            <Image
              src={'/compiler.png'}
              alt="Compiler Image"
              width={700}
              height={700}
              className="rounded-2xl"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-12">
            <h1 className="text-second text-3xl font-semibold">Practise with our Online Compilers</h1>
            <p className="text-highlight w-10/12">offers an immersive learning experience for beginners and seasoned programmers alike who are eager to master the Go programming language.
              Our platform is equipped with a state-of-the-art online compiler that enables users to write, test, and debug their Go code in real-time.</p>
            <DualButtons />
          </div>
        </div>
      }
      {rightImg &&
        <div className="flex w-[85%]">
          <div className="w-1/2 flex flex-col gap-12">
            <h1 className="text-second text-3xl font-semibold">Learn new concepts with in-depth articles</h1>
            <p className="text-highlight w-10/12">Dive into the world of Go programming with Gophers Articles, your ultimate resource for mastering this powerful language from the ground up.
              Whether you are a complete beginner or a programmer looking to add Go to your repertoire,
              our articles are designed to guide you through new concepts at a comfortable pace, from 0 to 100 difficulty level.</p>
            <DualButtons />
          </div>
          <div className="w-1/2 h-full">
            <Image
              src={'/goRide.jpeg'}
              alt="Compiler Image"
              width={700}
              height={700}
              className="rounded-2xl"
            />
          </div>
        </div>
      }
    </div>
  )
}
