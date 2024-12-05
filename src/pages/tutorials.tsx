import Banner from "@/components/banner";
import Layout from "@/components/layout";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function Tutorials() {
  const { slug } = useParams();
  console.log(slug);
  const navigate = useNavigate();

  function handleNavigation(slug: string) {
    if (slug === "/") {
      navigate("/");
    } else {
      navigate(`/guide/${slug}`);
    }
  }

  return (
    <Layout>
      <Banner title="" />

      <section className="w-full max-w-7xl flex flex-col text-white lg:px-10">
        
      </section>

      <div className="mt-10 flex items-center justify-between max-w-7xl w-full lg:px-10">
        <Button
          className="bg-transparent hover:bg-transparent hover:text-slate-300"
          onClick={() => handleNavigation("")}
        >
          <ChevronLeftIcon />
          <span>Previous</span>
        </Button>

        <Button
          className="bg-transparent hover:bg-transparent hover:text-slate-300"
          onClick={() => handleNavigation("")}
        >
          <span>Next</span>
          <ChevronRightIcon />
        </Button>
      </div>
    </Layout>
  );
}
