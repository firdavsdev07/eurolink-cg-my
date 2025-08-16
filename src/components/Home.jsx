import React from "react";
import bg from "../assets/bg-home.jpg";
import { Link } from "react-scroll";

export default function Home({ content }) {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4">
          EuroLink Consulting Group (ECG)
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          {content.home__description || "Your Gateway to Professional Growth and Opportunities in Germany."}
        </p>
        <div className="flex items-center justify-center gap-x-6">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="rounded-md bg-accent px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-transform transform hover:scale-105 cursor-pointer"
          >
            {content.navbar__menu2}
          </Link>
          <Link
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            className="text-base font-semibold leading-6 text-light-text hover:text-gray-300 transition-colors duration-300 cursor-pointer group"
          >
            {content.navbar__menu3}{" "}
            <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
