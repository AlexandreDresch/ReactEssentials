import Banner from "@/components/banner";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(-1);
  }

  return (
    <Layout>
      <Banner title="404" />

      <section className="text-white flex max-w-6xl flex-col w-full items-center gap-4">
        <h3 className="font-jost tracking-widest text-xl">Page not found.</h3>

        <Button onClick={handleNavigation}>Go back</Button>
      </section>
    </Layout>
  );
}
