import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "@/pages/home";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route element={<Home />} path="/" />
        {/* <Route element={<Tutorials />} path="/tutorial/:id" /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
