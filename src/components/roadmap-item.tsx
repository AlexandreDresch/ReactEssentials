import { IRoadmapItem } from "@/types";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "lucide-react";

export default function RoadmapItem({
  title,
  description,
  level,
  slug,
  orientation,
}: IRoadmapItem) {
  const navigate = useNavigate();

  function handleNavigation(slug: string) {
    navigate(`/guide/${slug}`);
  }

  return (
    <div
      className={`relative p-4 my-6 text-white ${
        orientation === "left"
          ? "col-start-1 col-end-5 md:mr-0 md:ml-auto"
          : "col-start-6 col-end-10"
      } mr-auto`}
    >
      <h3 className="text-lg lg:text-4xl font-saira font-black">{title}</h3>

      <Separator />

      <p className="mt-2 leading-6 font-josefin font-light max-w-sm">
        {description}
      </p>

      <Button
        className="w-full rounded-none bg-white text-black border-[1px] border-white hover:border-slate-600 hover:bg-transparent hover:text-white transition-colors duration-300"
        onClick={() => handleNavigation(slug)}
      >
        <span>Read More</span>

        <ChevronRightIcon />
      </Button>

      <span className="absolute text-sm font-josefin text-slate-400 -top-5 left-2 whitespace-nowrap uppercase tracking-widest">
        {level}
      </span>
    </div>
  );
}
