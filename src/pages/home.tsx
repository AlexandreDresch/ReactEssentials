import Banner from "@/components/banner";
import Heading from "@/components/heading";
import ImageCarousel from "@/components/image-carousel";
import Layout from "@/components/layout";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <Layout>
      <Banner title="Essentials" />

      <section className="text-white flex max-w-6xl flex-col md:flex-row w-full">
        <div>
          <h3 className="font-jost tracking-widest text-xl">
            We are React Essentials
          </h3>

          <p className="font-josefin font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            amet inventore qui voluptates dolorem vero aliquid ab ducimus
            excepturi. In ratione odio iure corrupti earum aspernatur eveniet
            enim saepe soluta? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nulla voluptas voluptatum velit amet odio dolor
            distinctio in inventore laborum enim quia minus consequatur qui,
            sapiente suscipit dignissimos tempore rerum! Aspernatur!
          </p>
        </div>

        <Separator
          orientation="vertical"
          className="w-px mx-5 bg-slate-400 h-auto hidden md:block"
        />

        <p className="font-josefin font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          amet inventore qui voluptates dolorem vero aliquid ab ducimus
          excepturi. In ratione odio iure corrupti earum aspernatur eveniet enim
          saepe soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit officiis error sit dicta repudiandae nulla vitae
          explicabo sint sunt impedit, quibusdam consequuntur harum quo maiores
          nesciunt dolorum beatae, esse laboriosam!
        </p>
      </section>

      <section className="pt-10 w-full">
        <Heading title="Base" />

        <ImageCarousel />
      </section>

      <section className="py-10 w-full flex flex-col items-center">
        <Heading title="Topics" link="/" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-6xl">
          <div className="grid gap-2 w-full">
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-96 w-auto"></div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto"></div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto"></div>
          </div>

          <div className="grid gap-2">
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto"></div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-96 w-auto"></div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto"></div>
          </div>

          <div className="grid gap-2">
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto"></div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto"></div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-96 w-auto"></div>
          </div>

          <div className="grid gap-2">
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-96 w-auto"></div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto"></div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
