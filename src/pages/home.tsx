import Banner from "@/components/banner";
import ImageCarousel from "@/components/image-carousel";
import Layout from "@/components/layout";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <Layout>
      <Banner title="Essentials" />

      <section className="text-white flex max-w-5xl flex-col md:flex-row">
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

      <section>
        <h3 className="font-bold text-white text-7xl sm:text-8xl md:text-9xl lg:text-[200px] text-center pt-10 uppercase">
          The Base
        </h3>

        <ImageCarousel />
      </section>
    </Layout>
  );
}
