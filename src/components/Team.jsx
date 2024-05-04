import React from "react"; // Don't forget to import React
import User1 from "../assets/team/user1.jpg";
import User2 from "../assets/team/user2.jpg";
import User3 from "../assets/team/user3.jpg";
import User4 from "../assets/team/user4.jpg";

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
  ];

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
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
                <p className=" text-sm  text-gray-500">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
