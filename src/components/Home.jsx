import React from "react";
import bg from "../assets/bg-home.jpg";
import { Link } from "react-scroll";
export default function Example({ content }) {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative  isolate px-6 pt-8 lg:px-6 ">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className=" text-lightText text-4xl font-bold tracking-tight sm:text-6xl">
              EuroLink Consulting Group (ECG)
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {content.navbar__menu2}
              </Link>
              <Link
                to="work"
                spy={true}
                smooth={true}
                duration={500}
                className="text-sm font-semibold leading-6 text-lightText"
              >
                {content.navbar__menu3} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
