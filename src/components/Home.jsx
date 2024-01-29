import React from "react";
import img from "../assets/images/men.png";
import Button from "../layout/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-32">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-5xl text-lightText font-semibold leading-tight">
          I am a frontend
          <span className="text-colorT"> Developer</span>
        </h2>
        <p className=" text-lightText mt-5 text-start">
          Choose the right direction, make your dreams come true, if you also
          need a website and web applications, then you are on the right track.
          Check out my personal website and learn about me. For more information
          and to own similar sites, contact me and get answers to your
          questions.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>

      <div className=" w-full md:w-2/5 rotate-0">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
