import React from "react"; // Don't forget to import React
import User1 from "../assets/team/user1.jpg";
import User2 from "../assets/team/user2.jpg";
import User3 from "../assets/team/user3.jpg";
import User4 from "../assets/team/user4.jpg";
import User5 from "../assets/team/user5.jpg";
import User6 from "../assets/team/user6.jpg";
import User7 from "../assets/team/user7.jpg";
import User8 from "../assets/team/user8.jpg";
import User9 from "../assets/team/user9.jpg";
import User10 from "../assets/team/user10.jpg";
import User11 from "../assets/team/user11.jpg";
import User12 from "../assets/team/user12.jpg";
import User13 from "../assets/team/user13.jpg";

export default function Example({ content }) {
  // Receive content as a prop
  const callouts = [
    {
      name: "Sherdor Eshmamatov",
      occupation: content.team__occupation1,
      description: content.team__user1, // Access content prop here
      imageSrc: User1,
    },
    {
      name: "Elbek Shomurodov",
      occupation: content.team__occupation1,
      description: content.team__user2,
      imageSrc: User2,
    },
    {
      name: "Murodjon Shomurodov",
      occupation: content.team__occupation1,
      description: content.team__user3,
      imageSrc: User3,
    },
    {
      name: "Asliddin Ergashev",
      occupation: content.team__occupation2,
      description: content.team__user4,
      imageSrc: User4,
    },
    {
      name: "Shohjahon Murodov",
      occupation: content.team__occupation2,
      description: content.team__user5,
      imageSrc: User5,
    },
    {
      name: "Bobur Kenjayev",
      occupation: content.team__occupation2,
      description: content.team__user6,
      imageSrc: User6,
    },
    {
      name: "Komron Zokhidov",
      occupation: content.team__occupation2,
      description: content.team__user7,
      imageSrc: User7,
    },
    {
      name: "Shokhrukh Makhmudov",
      occupation: content.team__occupation3,
      description: content.team__user8,
      imageSrc: User8,
    },
    {
      name: "Zamira Xojanova",
      occupation: content.team__occupation3,
      description: content.team__user9,
      imageSrc: User9,
    },
    {
      name: "Elbek Qodirov",
      occupation: content.team__occupation3,
      description: content.team__user13,
      imageSrc: User13,
    },

    {
      name: "Topiboldiyeva Begoyim",
      occupation: content.team__occupation3,
      description: content.team__user11,
      imageSrc: User11,
    },
    {
      name: "Malika Tohirova",
      occupation: content.team__occupation3,
      description: content.team__user12,
      imageSrc: User12,
    },
    {
      name: "Marjona Sayfiddinova",
      occupation: content.team__occupation3,
      description: content.team__user10,
      imageSrc: User10,
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h3 className="text-green-500 text-center mb-10 pb-9 text-4xl font-semibold">
            {content.team__header}
          </h3>

          <div className=" space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group  relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-3/4">
                  <img
                    src={callout.imageSrc}
                    alt="img"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="mt-6 flex justify-between text-gray-700">
                    <a className=" cursor-pointer">
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                    <a className=" font-semibold">
                      <span className="absolute inset-0" />
                      {callout.occupation}
                    </a>
                  </h3>
                </div>
                <p className=" mb-16 text-sm  text-gray-500">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
