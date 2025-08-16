import React, { useMemo } from "react";
// Import all user images
import ResultUser1 from "../assets/results/user1.jpg";
import ResultUser2 from "../assets/results/user2.png";
import ResultUser3 from "../assets/results/user3.jpg";
import ResultUser4 from "../assets/results/user4.jpg";
import ResultUser5 from "../assets/results/user5.jpg";
import ResultUser6 from "../assets/results/user6.jpg";
import ResultUser7 from "../assets/results/user7.jpg";
import ResultUser8 from "../assets/results/user8.jpg";
import ResultUser9 from "../assets/results/user9.jpg";
import ResultUser10 from "../assets/results/user10.jpg";
import ResultUser11 from "../assets/results/user11.jpg";
import ResultUser12 from "../assets/results/user12.jpg";
import ResultUser13 from "../assets/results/user13.jpg";
import ResultUser14 from "../assets/results/user14.jpg";
import ResultUser15 from "../assets/results/user15.jpg";
import ResultUser16 from "../assets/results/user16.jpg";
import ResultUser17 from "../assets/results/user17.jpg";
import ResultUser18 from "../assets/results/user18.jpg";
import ResultUser19 from "../assets/results/user19.jpg";
import ResultUser20 from "../assets/results/user20.jpg";
import ResultUser21 from "../assets/results/user21.jpg";
import ResultUser22 from "../assets/results/user22.jpg";
import ResultUser23 from "../assets/results/user23.jpg";
import ResultUser24 from "../assets/results/user24.jpg";
import ResultUser25 from "../assets/results/user25.jpg";
import ResultUser26 from "../assets/results/user26.jpg";

function Results({ content }) {
  const resultsData = useMemo(() => {
    if (!content || Object.keys(content).length === 0) {
      return [];
    }
    return [
      {
        name: "Yusupova Sevinchoy",
        imageSrc: ResultUser1,
        key: "results__page__description1",
      },
      {
        name: "Charos Boltaeva ",
        imageSrc: ResultUser3,
        key: "results__page__description3",
      },
      {
        name: "Inomjonova E'zozakhon ",
        imageSrc: ResultUser4,
        key: "results__page__description4",
      },
      {
        name: "Gulinargiz Khurramova ",
        imageSrc: ResultUser5,
        key: "results__page__description5",
      },
      {
        name: "Marjona Kuvondikova ",
        imageSrc: ResultUser6,
        key: "results__page__description6",
      },
    ].map((user) => ({
      ...user,
      description: content[user.key] || "Description not found.",
    }));
  }, [content]);

  if (resultsData.length === 0) {
    return null;
  }

  return (
    <div className="bg-brand-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-400">
            Our Success Stories
          </h2>
          <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
            {content.results__page__header}
          </p>
        </div>
        <div className="mt-16 space-y-8">
          {resultsData.map((result, index) => (
            <div
              key={index}
              className="bg-black rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:w-1/3 flex-shrink-0">
                <img
                  className="w-full h-64 md:h-full object-cover object-center"
                  src={result.imageSrc}
                  alt={`Photo of ${result.name}`}
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center md:w-2/3">
                <h3 className="text-xl lg:text-2xl font-bold text-accent mb-4">
                  {result.name}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
