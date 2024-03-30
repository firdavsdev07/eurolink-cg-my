import React from "react";

const Contact = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-colorT">
            Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-lightText">
            Personal details and conatct
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-colorT">
                Full name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-lightText sm:col-span-2 sm:mt-0">
                FIrdavs Normurodov
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6  text-colorT">
                Direction
              </dt>
              <dd className="mt-1 text-sm leading-6 text-lightText sm:col-span-2 sm:mt-0">
                Frontend Developer
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6  text-colorT">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-lightText sm:col-span-2 sm:mt-0">
                firdavsnormurodov435@gmail.com
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-colorT">
                About
              </dt>
              <dd className="mt-1 text-sm leading-6 text-lightText sm:col-span-2 sm:mt-0">
                Hello, my name is Normurodov Firdavs . I am a frontend
                developer. I love building websites and web applications. I want
                to become a powerful programmer in the future. I learn quickly,
                I try to work with patience and intelligence. I try to do my job
                perfectly. I really like programming. I've created Websites and
                web apps I've created in my portfolio so you can check them out
                and enjoy the websites and web apps I've created.
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-colorT">
                Social networks
              </dt>
              <dd className="mt-1 transition-all text-sm leading-6 text-lightText sm:col-span-2 sm:mt-0">
                <a
                  className=" hover:text-colorT"
                  target={"_blank"}
                  href="https://www.instagram.com/night_star0724/"
                >
                  Instagram
                </a>
                <a
                  className=" mx-2 hover:text-colorT"
                  target={"_blank"}
                  href="https://t.me/Star271524"
                >
                  Telegram
                </a>
                <a
                  className="hover:text-colorT"
                  target={"_blank"}
                  href="https://github.com/Firdavs-Normurodov"
                >
                  Github
                </a>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-colorT">
                Telephone number
              </dt>
              <dd className="mt-1 transition-all text-sm leading-6 text-lightText sm:col-span-2 sm:mt-0">
                +998(91)222-73-93
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Contact;
