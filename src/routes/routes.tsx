import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "@/pages/home";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Guides from "@/pages/guides";
import NotFound from "@/pages/not-found";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route element={<Home />} path="/" />
        <Route element={<Guides />} path="/guide/:slug" />
        <Route path="*" element={<NotFound/>} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
