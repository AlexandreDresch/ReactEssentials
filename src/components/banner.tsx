import { Button } from "./ui/button";

export default function Banner({ title }: { title: string }) {
  return (
    <section className="text-white font-karantina flex flex-col items-center justify-around size-full min-h-[500px] relative max-w-6xl pb-10">
      <img
        src="./polygons-1.svg"
        alt="Polygons"
        className="w-full max-w-56 absolute bottom-20 left-5"
      />

      <h2 className="font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[200px] text-center pt-10 uppercase">{title}</h2>

      <img
        src="./polygons-2.svg"
        alt="Polygons"
        className="w-full max-w-56 absolute top-0 right-5"
      />

      <Button className="flex flex-col h-auto bg-transparent p-0">
        <img src="./mouse.svg" className="size-20"/>

        <p className="font-josefin font-light">Scroll Down</p>
      </Button>
    </section>
  );
}
