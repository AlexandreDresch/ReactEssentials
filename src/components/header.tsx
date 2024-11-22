import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { navigation } from "@/constants";

export default function Header() {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  function toggleNavigation() {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  }

  function handleClick() {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-black text-white flex justify-center">
      <div className="flex items-center justify-between px-5 lg:px-0 max-lg:py-4 max-w-6xl w-full">
        <a href="/" className="flex items-center gap-4 lg:hidden">
          <img src="./react.svg" alt="React Essentials - Home" />

          <span className="font-karantina font-light tracking-widest text-xl">React Essentials</span>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex w-full max-w-6xl lg: bg-transparent`}
        >
          <div className="relative z-2 flex flex-col w-full max-w-6xl items-center justify-between bg-black lg:flex-row">
            {navigation.slice(0, 2).map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase transition-colors hover:text-zinc-500 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-zinc-500"
                    : "lg:text-white"
                } lg:leading-5 lg:hover:text-zinc-500 xl:px-12`}
              >
                {item.title}
              </a>
            ))}

            <a href="/" className="flex items-center px-12">
              <img src="./react.svg" alt="React Essentials - Home" />
            </a>

            {navigation.slice(2).map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase transition-colors hover:text-zinc-500 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-zinc-500"
                    : "lg:text-white"
                } lg:leading-5 lg:hover:text-zinc-500 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <Button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          <MenuIcon />
        </Button>
      </div>
    </header>
  );
}
