import React from "react";
import img from "../assets/images/men.png";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-32">
      <div className=" rotate-0 mx-4 w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-left mx-4 space-y-2">
        {/* <Heading title1="About" title2="Us?" />
        <p className=" text-lightText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae consequuntur iste placeat recusandae qui nesciunt possimus.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link> */}
        <div className="lg:max-w-lg ">
          <h2 className="text-base font-semibold leading-7 text-colorT">
            Hi <i className="fa-solid fa-hand"></i>
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-colorT sm:text-4xl">
            Briefly about myself
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I am a frontend developer, I am 19 years old, I graduated from
            frontend programming course in 2022, I am currently working on my
            own
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-colorT"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                  />
                </svg>
              </dt>
              <dd className="inline">
                Hello, my name is{" "}
                <span className="text-colorT">Normurodov Firdavs</span> . I am a
                frontend developer. I love building websites and web
                applications. I want to become a powerful programmer in the
                future. I learn quickly, I try to work with patience and
                intelligence.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-colorT"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
              </dt>
              <dd className="inline">
                I try to do my job perfectly. I really like programming.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-colorT"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                  />
                </svg>
              </dt>
              <dd className="inline">
                I've <span className="text-colorT">created Websites</span>{" "} and
                <span className="text-colorT"> web
                apps </span> 
                 I've created in my portfolio so you can check them out and
                enjoy the websites and web apps I've created.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
