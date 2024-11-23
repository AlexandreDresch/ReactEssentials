import Banner from "@/components/banner";
import Heading from "@/components/heading";
import ImageCarousel from "@/components/image-carousel";
import Layout from "@/components/layout";
import Roadmap from "@/components/roadmap";
import { Separator } from "@/components/ui/separator";

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
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-96 w-auto flex items-center justify-center">
              <p className="text-slate-400 font-saira font-extralight tracking-widest text-2xl">
                useState
              </p>
            </div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto flex items-center justify-center">
              <p className="text-slate-400 font-saira font-extralight tracking-widest text-2xl">
                useEffect
              </p>
            </div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto flex items-center justify-center">
              <p className="text-slate-400 font-saira font-extralight tracking-widest text-2xl">
                useContext
              </p>
            </div>
          </div>

          <div className="grid gap-2">
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto flex items-center justify-center">
              <p className="text-slate-400 font-saira font-extralight tracking-widest text-2xl">
                useReducer
              </p>
            </div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-96 w-auto flex items-center justify-center">
              <p className="text-slate-400 font-saira font-extralight tracking-widest text-2xl">
                useRef
              </p>
            </div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto flex items-center justify-center">
              <p className="text-slate-400 font-saira font-extralight tracking-widest text-2xl">
                useMemo
              </p>
            </div>
          </div>

          <div className="grid gap-2">
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto flex items-center justify-center">
              <p className="text-slate-400 font-saira font-extralight tracking-widest text-2xl">
                useCallback
              </p>
            </div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto flex items-center justify-center">
              <p className="text-slate-400 font-saira font-extralight tracking-widest text-2xl">
                useLayoutEffect
              </p>
            </div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-96 w-auto flex items-center justify-center">
              <p className="text-slate-400 font-saira font-extralight tracking-widest text-2xl">
                useImperativeHandle
              </p>
            </div>
          </div>

          <div className="grid gap-2">
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-96 w-auto flex items-center justify-center">
              <p className="text-slate-400 font-saira font-extralight tracking-widest text-2xl">
                useTransition
              </p>
            </div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto flex items-center justify-center">
              <p className="text-slate-400 font-saira font-extralight tracking-widest text-2xl">
                useDeferredValue
              </p>
            </div>
            <div className="bg-slate-600/10 border-[1px] border-slate-600 h-48 w-auto flex items-center justify-center">
              <p className="text-slate-400 font-saira font-extralight tracking-widest text-2xl">
                useId
              </p>
            </div>
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
