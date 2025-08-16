import React from "react";
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

export default function Team({ content }) {
  const teamMembers = [
    {
      name: "Sherdor Eshmamatov",
      occupation: content.team__occupation1,
      description: content.team__user1,
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
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-400">Our Team</h2>
          <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
            {content.team__header}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {teamMembers.map((person) => (
            <div key={person.name} className="group text-center">
              <div className="h-80 w-full overflow-hidden rounded-lg shadow-lg group-hover:shadow-accent/50 transition-shadow duration-300">
                <img
                  src={person.imageSrc}
                  alt={`Photo of ${person.name}`}
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-light-text">{person.name}</h3>
                <p className="text-base font-medium text-accent">{person.occupation}</p>
                <p className="mt-2 text-sm text-gray-400">{person.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
