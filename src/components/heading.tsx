import { ChevronRightIcon } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Heading({
  title,
  link,
}: {
  title: string;
  link?: string;
}) {
  return (
    <div className="flex w-full items-center justify-center xl:justify-between relative h-60">
      <Separator className="w-1/4 h-32 bg-white hidden xl:block" />

      <h3 className="z-10 font-bold text-white text-7xl sm:text-8xl md:text-9xl lg:text-[200px] text-center uppercase">
        {title}
      </h3>
      <div className="xl:w-1/4 relative h-full">
        <Separator className="h-36 bg-black border-[1px] border-white absolute top-0 right-10 hidden xl:block" />
        <Separator className="h-32 bg-white absolute top-16 hidden xl:block" />
        {link && (
          <a
            href={link}
            className="text-white font-josefin font-bold xl:text-black absolute bottom-3 xl:bottom-24 right-0 xl:right-36 flex gap-2 uppercase"
          >
            <span>More</span> <ChevronRightIcon />
          </a>
        )}
      </div>
    </div>
  );
}
