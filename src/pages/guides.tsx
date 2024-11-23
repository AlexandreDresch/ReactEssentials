import Banner from "@/components/banner";
import Layout from "@/components/layout";
import { guides } from "@/constants/guides";
import { useNavigate, useParams } from "react-router-dom";
import { CodePreview } from "@stianlarsen/react-code-preview";
import Counter from "@/components/guide-components/counter";
import BackgroundChanger from "@/components/guide-components/background-changer";
import PreviewNotFound from "@/components/guide-components/preview-not-found";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Guide } from "@/types";
import TodoList from "@/components/guide-components/to-do-list";
import BasicTimer from "@/components/guide-components/basic-timer";
import NameFilter from "@/components/guide-components/name-filter";
import RegistrationForm from "@/components/guide-components/registration-form";
import DataFetching from "@/components/guide-components/data-fetching";
import ImageGallery from "@/components/guide-components/image-gallery";
import Countdown from "@/components/guide-components/countdown";
import Tabs from "@/components/guide-components/tabs";

export default function Guides() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState<Guide | null>(null);
  const [code, setCode] = useState("");

  useEffect(() => {
    const guide = guides.find((guide) => guide.slug === slug);
    if (guide) {
      setContent(guide);
      setCode(guide.steps[0].code);
    }
  }, [slug]);

  useEffect(() => {
    if (content) {
      setCode(content.steps[0].code);
    }
  }, [content]);

  if (!content) {
    return (
      <Layout>
        <Banner title="Not Found" />
      </Layout>
    );
  }

  function getComponentByTitle(title: string) {
    switch (title) {
      case "Counter":
        return Counter;
      case "Background Color Changer":
        return BackgroundChanger;
      case "To-Do List":
        return TodoList;
      case "Basic Timer":
        return BasicTimer;
      case "Name Filter":
        return NameFilter;
      case "Registration Form":
        return RegistrationForm;
      case "Data Fetching":
        return DataFetching;
      case "Image Gallery":
        return ImageGallery;
      case "Countdown":
        return Countdown;
      case "Tabs Navigation":
        return Tabs;
      default:
        return PreviewNotFound;
    }
  }

  function handleNavigation(slug: string) {
    if (slug === "/") {
      navigate("/");
    } else {
      navigate(`/guide/${slug}`);
    }
  }

  return (
    <Layout>
      <Banner title={content.title} />

      <section className="w-full max-w-7xl flex flex-col text-white lg:px-10">
        <p className="font-josefin font-light mb-6">{content.description}</p>

        <div className="flex flex-col lg:flex-row">
          <div>
            <h3 className="font-josefin text-slate-400 whitespace-nowrap uppercase tracking-widest">
              {content.explanation[0].title}
            </h3>

            <p className="leading-6 font-josefin font-light">
              {content.explanation[0].description}
            </p>

            <ul className="flex flex-col mt-3 space-y-5">
              {content.explanation[0].details.map((step, index) => (
                <li key={index}>
                  <h4 className="text-lg font-jost tracking-widest">
                    {step.topic}
                  </h4>
                  <p className="leading-6 font-josefin font-light">
                    {step.explanation}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <CodePreview
            key={code}
            code={code}
            darkTheme="github-dark"
            component={getComponentByTitle(content.title)}
            className="w-full"
          />
        </div>
      </section>

      <div className="mt-10 flex items-center justify-between max-w-7xl w-full lg:px-10">
        <Button
          className="bg-transparent hover:bg-transparent hover:text-slate-300"
          onClick={() => handleNavigation(content.previous_slug)}
        >
          <ChevronLeftIcon />
          <span>{content.previous}</span>
        </Button>

        <Button
          className="bg-transparent hover:bg-transparent hover:text-slate-300"
          onClick={() => handleNavigation(content.next_slug)}
        >
          <span>{content.next}</span>
          <ChevronRightIcon />
        </Button>
      </div>
    </Layout>
  );
}
