import { ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Roadmap() {
  return (
    <div className="flex flex-col grid-cols-9 w-full mx-auto md:grid">
      <div className="flex md:contents flex-row-reverse">
        <div className="relative p-4 my-6 text-white col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
          <h3 className="text-lg lg:text-4xl font-saira font-black">Counter</h3>

          <Separator />

          <p className="mt-2 leading-6 font-josefin font-light max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            ab dolor, sint animi, repellendus quia quae dolores voluptates unde
            aut optio rem. Assumenda, ex eos ullam incidunt officiis dolores ab.
          </p>

          <Button className="w-full rounded-none bg-white text-black border-[1px] border-white hover:border-slate-600 hover:bg-transparent hover:text-white transition-colors duration-300">
            <span>Read More</span>

            <ChevronRightIcon />
          </Button>
          <span className="absolute text-sm font-josefin text-slate-400 -top-5 left-2 whitespace-nowrap uppercase tracking-widest">
            Beginner
          </span>
        </div>

        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-[2px] h-full rounded-t-full bg-gradient-to-b from-slate-600 to-slate-300"></div>
          </div>
          <div className="absolute size-6 -mt-3 bg-white border-2 border-slate-600 rounded-full top-1/2"></div>
        </div>
      </div>

      <div className="flex md:contents">
        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-[2px] h-full rounded-t-full bg-gradient-to-b from-slate-300 to-slate-600 "></div>
          </div>
          <div className="absolute size-6 -mt-3 bg-white border-2 border-slate-600 rounded-full top-1/2"></div>
        </div>

        <div className="relative p-4 my-6 col-start-6 col-end-10 mr-auto text-white">
          <h3 className="text-lg lg:text-4xl font-saira font-black">
            Change Background Color
          </h3>

          <p className="mt-2 leading-6 font-josefin font-light max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            ab dolor, sint animi, repellendus quia quae dolores voluptates unde
            aut optio rem. Assumenda, ex eos ullam incidunt officiis dolores ab.
          </p>

          <Button className="w-full rounded-none bg-white text-black border-[1px] border-white hover:border-slate-600 hover:bg-transparent hover:text-white transition-colors duration-300">
            <span>Read More</span>

            <ChevronRightIcon />
          </Button>

          <span className="absolute text-sm font-josefin text-slate-400 -top-5 left-2 whitespace-nowrap uppercase tracking-widest">
            Beginner
          </span>
        </div>
      </div>

      <div className="flex md:contents flex-row-reverse">
        <div className="relative p-4 my-6 text-white col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
          <h3 className="text-lg lg:text-4xl font-saira font-black">
            ToDo List
          </h3>

          <Separator />

          <p className="mt-2 leading-6 font-josefin font-light max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            ab dolor, sint animi, repellendus quia quae dolores voluptates unde
            aut optio rem. Assumenda, ex eos ullam incidunt officiis dolores ab.
          </p>

          <Button className="w-full rounded-none bg-white text-black border-[1px] border-white hover:border-slate-600 hover:bg-transparent hover:text-white transition-colors duration-300">
            <span>Read More</span>

            <ChevronRightIcon />
          </Button>
          <span className="absolute text-sm font-josefin text-slate-400 -top-5 left-2 whitespace-nowrap uppercase tracking-widest">
            Beginner
          </span>
        </div>

        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-[2px] h-full rounded-t-full bg-gradient-to-b from-slate-600 to-slate-300"></div>
          </div>
          <div className="absolute size-6 -mt-3 bg-white border-2 border-slate-600 rounded-full top-1/2"></div>
        </div>
      </div>

      <div className="flex md:contents">
        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-[2px] h-full rounded-t-full bg-gradient-to-b from-slate-300 to-slate-600 "></div>
          </div>
          <div className="absolute size-6 -mt-3 bg-white border-2 border-slate-600 rounded-full top-1/2"></div>
        </div>

        <div className="relative p-4 my-6 col-start-6 col-end-10 mr-auto text-white">
          <h3 className="text-lg lg:text-4xl font-saira font-black">Timer</h3>

          <p className="mt-2 leading-6 font-josefin font-light max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            ab dolor, sint animi, repellendus quia quae dolores voluptates unde
            aut optio rem. Assumenda, ex eos ullam incidunt officiis dolores ab.
          </p>

          <Button className="w-full rounded-none bg-white text-black border-[1px] border-white hover:border-slate-600 hover:bg-transparent hover:text-white transition-colors duration-300">
            <span>Read More</span>

            <ChevronRightIcon />
          </Button>

          <span className="absolute text-sm font-josefin text-slate-400 -top-5 left-2 whitespace-nowrap uppercase tracking-widest">
            Beginner
          </span>
        </div>
      </div>

      <div className="flex md:contents flex-row-reverse">
        <div className="relative p-4 my-6 text-white col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
          <h3 className="text-lg lg:text-4xl font-saira font-black">
            List Filter
          </h3>

          <Separator />

          <p className="mt-2 leading-6 font-josefin font-light max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            ab dolor, sint animi, repellendus quia quae dolores voluptates unde
            aut optio rem. Assumenda, ex eos ullam incidunt officiis dolores ab.
          </p>

          <Button className="w-full rounded-none bg-white text-black border-[1px] border-white hover:border-slate-600 hover:bg-transparent hover:text-white transition-colors duration-300">
            <span>Read More</span>

            <ChevronRightIcon />
          </Button>
          <span className="absolute text-sm font-josefin text-slate-400 -top-5 left-2 whitespace-nowrap uppercase tracking-widest">
            Beginner
          </span>
        </div>

        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-[2px] h-full rounded-t-full bg-gradient-to-b from-slate-600 to-slate-300"></div>
          </div>
          <div className="absolute size-6 -mt-3 bg-white border-2 border-slate-600 rounded-full top-1/2"></div>
        </div>
      </div>

      <div className="flex md:contents">
        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-[2px] h-full rounded-t-full bg-gradient-to-b from-slate-300 to-slate-600 "></div>
          </div>
          <div className="absolute size-6 -mt-3 bg-white border-2 border-slate-600 rounded-full top-1/2"></div>
        </div>

        <div className="relative p-4 my-6 col-start-6 col-end-10 mr-auto text-white">
          <h3 className="text-lg lg:text-4xl font-saira font-black">
            SignUp Form
          </h3>

          <p className="mt-2 leading-6 font-josefin font-light max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            ab dolor, sint animi, repellendus quia quae dolores voluptates unde
            aut optio rem. Assumenda, ex eos ullam incidunt officiis dolores ab.
          </p>

          <Button className="w-full rounded-none bg-white text-black border-[1px] border-white hover:border-slate-600 hover:bg-transparent hover:text-white transition-colors duration-300">
            <span>Read More</span>

            <ChevronRightIcon />
          </Button>

          <span className="absolute text-sm font-josefin text-slate-400 -top-5 left-2 whitespace-nowrap uppercase tracking-widest">
            Beginner
          </span>
        </div>
      </div>

      <div className="flex md:contents flex-row-reverse">
        <div className="relative p-4 my-6 text-white col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
          <h3 className="text-lg lg:text-4xl font-saira font-black">
            API Connection
          </h3>

          <Separator />

          <p className="mt-2 leading-6 font-josefin font-light max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            ab dolor, sint animi, repellendus quia quae dolores voluptates unde
            aut optio rem. Assumenda, ex eos ullam incidunt officiis dolores ab.
          </p>

          <Button className="w-full rounded-none bg-white text-black border-[1px] border-white hover:border-slate-600 hover:bg-transparent hover:text-white transition-colors duration-300">
            <span>Read More</span>

            <ChevronRightIcon />
          </Button>
          <span className="absolute text-sm font-josefin text-slate-400 -top-5 left-2 whitespace-nowrap uppercase tracking-widest">
            Beginner
          </span>
        </div>

        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-[2px] h-full rounded-t-full bg-gradient-to-b from-slate-600 to-slate-300"></div>
          </div>
          <div className="absolute size-6 -mt-3 bg-white border-2 border-slate-600 rounded-full top-1/2"></div>
        </div>
      </div>

      <div className="flex md:contents">
        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-[2px] h-full rounded-t-full bg-gradient-to-b from-slate-300 to-slate-600 "></div>
          </div>
          <div className="absolute size-6 -mt-3 bg-white border-2 border-slate-600 rounded-full top-1/2"></div>
        </div>

        <div className="relative p-4 my-6 col-start-6 col-end-10 mr-auto text-white">
          <h3 className="text-lg lg:text-4xl font-saira font-black">
            Image Carousel
          </h3>

          <p className="mt-2 leading-6 font-josefin font-light max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            ab dolor, sint animi, repellendus quia quae dolores voluptates unde
            aut optio rem. Assumenda, ex eos ullam incidunt officiis dolores ab.
          </p>

          <Button className="w-full rounded-none bg-white text-black border-[1px] border-white hover:border-slate-600 hover:bg-transparent hover:text-white transition-colors duration-300">
            <span>Read More</span>

            <ChevronRightIcon />
          </Button>

          <span className="absolute text-sm font-josefin text-slate-400 -top-5 left-2 whitespace-nowrap uppercase tracking-widest">
            Intermediary
          </span>
        </div>
      </div>

      <div className="flex md:contents flex-row-reverse">
        <div className="relative p-4 my-6 text-white col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
          <h3 className="text-lg lg:text-4xl font-saira font-black">
            Advanced Timer
          </h3>

          <Separator />

          <p className="mt-2 leading-6 font-josefin font-light max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            ab dolor, sint animi, repellendus quia quae dolores voluptates unde
            aut optio rem. Assumenda, ex eos ullam incidunt officiis dolores ab.
          </p>

          <Button className="w-full rounded-none bg-white text-black border-[1px] border-white hover:border-slate-600 hover:bg-transparent hover:text-white transition-colors duration-300">
            <span>Read More</span>

            <ChevronRightIcon />
          </Button>
          <span className="absolute text-sm font-josefin text-slate-400 -top-5 left-2 whitespace-nowrap uppercase tracking-widest">
            Intermediary
          </span>
        </div>

        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-[2px] h-full rounded-t-full bg-gradient-to-b from-slate-600 to-slate-300"></div>
          </div>
          <div className="absolute size-6 -mt-3 bg-white border-2 border-slate-600 rounded-full top-1/2"></div>
        </div>
      </div>

      <div className="flex md:contents">
        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-6 h-full">
            <div className="w-[2px] h-full rounded-t-full bg-gradient-to-b from-slate-300 to-slate-600 "></div>
          </div>
          <div className="absolute size-6 -mt-3 bg-white border-2 border-slate-600 rounded-full top-1/2"></div>
        </div>

        <div className="relative p-4 my-6 col-start-6 col-end-10 mr-auto text-white">
          <h3 className="text-lg lg:text-4xl font-saira font-black">
            Navigation Tab
          </h3>

          <p className="mt-2 leading-6 font-josefin font-light max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            ab dolor, sint animi, repellendus quia quae dolores voluptates unde
            aut optio rem. Assumenda, ex eos ullam incidunt officiis dolores ab.
          </p>

          <Button className="w-full rounded-none bg-white text-black border-[1px] border-white hover:border-slate-600 hover:bg-transparent hover:text-white transition-colors duration-300">
            <span>Read More</span>

            <ChevronRightIcon />
          </Button>

          <span className="absolute text-sm font-josefin text-slate-400 -top-5 left-2 whitespace-nowrap uppercase tracking-widest">
            Intermediary
          </span>
        </div>
      </div>
    </div>
  );
}
