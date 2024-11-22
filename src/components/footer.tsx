import { GithubIcon, LinkedinIcon } from "lucide-react";

export default function Footer() {
  return (
    <section className="bg-white font-inter">
      <div className="max-w-screen-xl w-full px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a
              href="/"
              className="text-base leading-6 text-slate-500 hover:text-slate-900"
            >
              Home
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#about"
              className="text-base leading-6 text-slate-500 hover:text-slate-900"
            >
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#base"
              className="text-base leading-6 text-slate-500 hover:text-slate-900"
            >
              Base
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#hooks"
              className="text-base leading-6 text-slate-500 hover:text-slate-900"
            >
              Hooks
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#guides"
              className="text-base leading-6 text-slate-500 hover:text-slate-900"
            >
              Guides
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://github.com/AlexandreDresch"
            target="blank"
            className="text-slate-400 hover:text-slate-500"
          >
            <span className="sr-only">GitHub</span>

            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandre-dresch"
            target="blank"
            className="text-slate-400 hover:text-slate-500"
          >
            <span className="sr-only">LinkedIn</span>

            <LinkedinIcon />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-slate-400">
          © 202x React Essentials, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}
