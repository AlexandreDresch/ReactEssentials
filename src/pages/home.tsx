import Banner from "@/components/banner";
import Heading from "@/components/heading";
import HookItem from "@/components/hook-item";
import ImageCarousel from "@/components/image-carousel";
import Layout from "@/components/layout";
import Roadmap from "@/components/roadmap";
import { Separator } from "@/components/ui/separator";
import { reactHooks } from "@/constants";

export default function Home() {
  return (
    <Layout>
      <Banner title="Essentials" />

      <section
        className="text-white flex max-w-6xl flex-col md:flex-row w-full"
        id="about"
      >
        <div>
          <h3 className="font-jost tracking-widest text-xl">
            We are React Essentials
          </h3>

          <p className="font-josefin font-light">
            React Essentials is a dedicated group focused on simplifying the
            learning process for React. Our mission is to break down complex
            concepts into easy-to-understand guides and tutorials, helping both
            beginners and developers looking to solidify their foundation. We
            believe learning React doesn’t have to be overwhelming or filled
            with unnecessary jargon. Straightforward and effective – that’s our
            approach.
          </p>
        </div>

        <Separator
          orientation="vertical"
          className="w-px mx-5 bg-slate-400 h-auto hidden md:block"
        />

        <p className="font-josefin font-light pt-7">
          Whether you're just starting with React or revisiting the basics,
          React Essentials aims to provide concise, hands-on examples that
          empower you to build real-world applications. From state management to
          component creation, we focus on what truly matters, ensuring you gain
          practical skills without unnecessary distractions. Join us on this
          journey to master React with clarity and confidence.
        </p>
      </section>

      <section className="pt-10 w-full" id="base">
        <Heading title="Base" />

        <ImageCarousel />
      </section>

      <section className="py-10 w-full flex flex-col items-center" id="hooks">
        <Heading title="Hooks" link="/" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-6xl">
          <div className="grid gap-2 w-full">
            {reactHooks[0].map((hook) => (
              <HookItem hook={hook} key={hook.name} />
            ))}
          </div>

          <div className="grid gap-2">
            {reactHooks[1].map((hook) => (
              <HookItem hook={hook} key={hook.name} />
            ))}
          </div>

          <div className="grid gap-2">
            {reactHooks[2].map((hook) => (
              <HookItem hook={hook} key={hook.name} />
            ))}
          </div>

          <div className="grid gap-2">
            {reactHooks[3].map((hook) => (
              <HookItem hook={hook} key={hook.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 w-full" id="guides">
        <Heading title="Guides" />

        <Roadmap />
      </section>
    </Layout>
  );
}
