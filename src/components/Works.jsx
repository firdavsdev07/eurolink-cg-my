import React from "react";
import siteNew from "../assets/images/react-tailwind.png"
import site1 from "../assets/images/site1.png";
import site2 from "../assets/images/site2.png";
import site3 from "../assets/images/site3.png";
import site4 from "../assets/images/site4.png";
import site5 from "../assets/images/site5.png";
import site6 from "../assets/images/site6.png";
import site7 from "../assets/images/site7.png"

const Works = () => {
  return (
    <div className="px-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl text-center pb-4 font-bold text-colorT">
            My portfolio
          </h2>
          <p className="text-center text-lightText">
            Check out the websites I've made and use the codes too
          </p>
          <div className="mt-16 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div className="group relative mb-10">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={siteNew}
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className=" text-2xl mt-6 text-gray-500">
                <a
                  target={"_blank"}
                  href="https://github.com/Firdavs-Normurodov/react-tailwind"
                  className="text-green-500"
                >
                  code
                </a>
                <a
                  target={"_blank"}
                  href="https://react-tailwind-silk.vercel.app/"
                  className="text-cyan-600 ml-10"
                >
                  demo
                </a>
              </div>
              <p className="text-2xl  my-4 text-lightText">
                ReactJS TailwindCss
              </p>
            </div>
            <div className="group relative mb-10">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={site1}
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className=" text-2xl mt-6 text-gray-500">
                <a
                  target={"_blank"}
                  href="https://github.com/Firdavs-Normurodov/myVuesite"
                  className="text-green-500"
                >
                  code
                </a>
                <a
                  target={"_blank"}
                  href="https://firdavsdev-nu.vercel.app/"
                  className="text-cyan-600 ml-10"
                >
                  demo
                </a>
              </div>
              <p className="text-2xl  my-4 text-lightText">
                Vue VueX Bootstrap Js Css
              </p>
            </div>

            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={site7}
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className=" text-2xl mt-6 text-gray-500">
                <a
                  target={"_blank"}
                  href="https://github.com/Firdavs-Normurodov/kinolar"
                  className="text-green-500"
                >
                  code
                </a>
                <a
                  target={"_blank"}
                  href="https://kinolar-woad.vercel.app/"
                  className="text-cyan-600 ml-10"
                >
                  demo
                </a>
              </div>
              <p className="text-2xl  my-4 text-lightText">
                ReactJs Sass Bootsrap
              </p>
            </div>
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={site3}
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className=" text-2xl mt-6 text-gray-500">
                <a
                  target={"_blank"}
                  href="https://github.com/Firdavs-Normurodov/react-vite-tailwind-css"
                  className="text-green-500"
                >
                  code
                </a>
                <a
                  target={"_blank"}
                  href="https://react-vite-tailwind-css.vercel.app/"
                  className="text-cyan-600 ml-10"
                >
                  demo
                </a>
              </div>
              <p className="text-2xl  my-4 text-lightText">
                ReactJs TailwindCss Vite
              </p>
            </div>
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={site4}
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className=" text-2xl mt-6 text-gray-500">
                <a className="text-green-500">code x</a>
                <a
                  target={"_blank"}
                  href="https://eurolink-cg.com/"
                  className="text-cyan-600 ml-10"
                >
                  demo
                </a>
              </div>
              <p className="text-2xl  my-4 text-lightText">
                Js Bootsrap Css Hml
              </p>
            </div>
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={site2}
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className=" text-2xl mt-6 text-gray-500">
                <a
                  target={"_blank"}
                  href="https://github.com/Firdavs-Normurodov/online-shop"
                  className="text-green-500"
                >
                  code
                </a>
                <a
                  target={"_blank"}
                  href="https://online-shop-web-site.netlify.app/"
                  className="text-cyan-600 ml-10"
                >
                  demo
                </a>
              </div>
              <p className="text-2xl  my-4 text-lightText">
                Js Bootstrap Css Html
              </p>
            </div>
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={site5}
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className=" text-2xl mt-6 text-gray-500">
                <a
                  target={"_blank"}
                  href="https://github.com/Firdavs-Normurodov/training-courses"
                  className="text-green-500"
                >
                  code
                </a>
                <a
                  target={"_blank"}
                  href="https://training-courses.netlify.app/"
                  className="text-cyan-600 ml-10"
                >
                  demo
                </a>
              </div>
              <p className="text-2xl  my-4 text-lightText">
                Js jQuery Bootstrap Css Html
              </p>
            </div>
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={site6}
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className=" text-2xl mt-6 text-gray-500">
                <a className="text-green-500">code x</a>
                <a
                  target={"_blank"}
                  href="https://firdavs-web-dev.netlify.app/"
                  className="text-cyan-600 ml-10"
                >
                  demo
                </a>
              </div>
              <p className="text-2xl  my-4 text-lightText">
                Js jQuery Bootstrap Css Html
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
