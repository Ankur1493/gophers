import { MeteorCard } from "@/components/MeteorCard"
export function Features() {
  return (
    <div className="flex flex-col justify-center items-center w-full my-12">
      <h1 className="text-second text-4xl  font-bold mb-6">How we can help you in<span className="text-highlight">{" "}your journey</span></h1>
      <div className="grid grid-cols-4 gap-x-16 gap-y-8">
        <div><MeteorCard heading="Learn from the best articles" para="We provide you with the best articles which are curated in a beginner to advanced manner" /></div>
        <div><MeteorCard heading="Learn from the best articles" para="We provide you with the best articles which are curated in a beginner to advanced manner" /></div>
        <div><MeteorCard heading="Learn from the best articles" para="We provide you with the best articles which are curated in a beginner to advanced manner" /></div>
        <div><MeteorCard heading="Learn from the best articles" para="We provide you with the best articles which are curated in a beginner to advanced manner" /></div>
        <div><MeteorCard heading="Learn from the best articles" para="We provide you with the best articles which are curated in a beginner to advanced manner" /></div>
        <div><MeteorCard heading="Learn from the best articles" para="We provide you with the best articles which are curated in a beginner to advanced manner" /></div>
        <div><MeteorCard heading="Learn from the best articles" para="We provide you with the best articles which are curated in a beginner to advanced manner" /></div>
        <div><MeteorCard heading="Learn from the best articles" para="We provide you with the best articles which are curated in a beginner to advanced manner" /></div>
      </div>
    </div>
  )
}
