import { roadmapItems } from "@/constants";
import RoadmapItem from "./roadmap-item";

export default function Roadmap() {
  return (
    <div className="flex flex-col grid-cols-9 w-full mx-auto md:grid">
      {roadmapItems.map((item, index) => (
        <>
          {index % 2 === 0 ? (
            <div className="flex md:contents flex-row-reverse">
              <RoadmapItem {...item} orientation="left" />

              <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                  <div className="w-[2px] h-full rounded-t-full bg-gradient-to-b from-slate-600 to-slate-300"></div>
                </div>
                <div className="absolute size-6 -mt-3 bg-white border-2 border-slate-600 rounded-full top-1/2"></div>
              </div>
            </div>
          ) : (
            <div className="flex md:contents">
              <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                  <div className="w-[2px] h-full rounded-t-full bg-gradient-to-b from-slate-300 to-slate-600 "></div>
                </div>
                <div className="absolute size-6 -mt-3 bg-white border-2 border-slate-600 rounded-full top-1/2"></div>
              </div>

              <RoadmapItem {...item} orientation="right" />
            </div>
          )}
        </>
      ))}
    </div>
  );
}
