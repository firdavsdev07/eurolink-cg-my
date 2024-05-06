import React from "react";
import ResultUser1 from "../assets/results/user1.jpg";
// import ResultUser2 from "../assets/results/user2.png";
import ResultUser3 from "../assets/results/user3.jpg";
import ResultUser4 from "../assets/results/user4.jpg";
import ResultUser5 from "../assets/results/user5.jpg";
import ResultUser6 from "../assets/results/user6.jpg";
import ResultUser7 from "../assets/results/user7.jpg";

function Results({ content }) {
  const callouts = [
    {
      name: "Yusupova Sevinchoy",
      imageSrc: ResultUser1,
      description: content.results__page__description1,
    },
    // {
    //   name: "Yusupova Sevinchoy",
    //   imageSrc: ResultUser2,
    //   description: content.results__page__description2,
    // },
    {
      name: "Charos Boltaeva ",
      imageSrc: ResultUser3,
      description: content.results__page__description3,
    },
    {
      name: "Inomjonova E'zozakhon ",
      imageSrc: ResultUser4,
      description: content.results__page__description4,
    },
    {
      name: "Gulinargiz Khurramova ",
      imageSrc: ResultUser5,
      description: content.results__page__description5,
    },
    {
      name: "Marjona Kuvondikova ",
      imageSrc: ResultUser6,
      description: content.results__page__description6,
    },
    {
      name: "Abdukakhkhorov Mukhammadjon",
      imageSrc: ResultUser7,
      description: content.results__page__description7,
    },
  ];
  return (
    <div className="Results__container">
      <h1 className="mb-10 pb-12 mt-5 text-4xl text-center tracking-tight font-extrabold text-green-500">
        {content.results__page__header}
      </h1>
      <div className="flex flex-wrap items-center justify-center mt-10">
        {callouts.map((callout, index) => (
          <div className="p-4 max-h-full max-w-sm" key={callout.name + index}>
            <div className="max-w-sm Results__container__cards   shadow ">
              <a href="#" className="block">
                <img className="rounded-t-lg" src={callout.imageSrc} alt="" />
              </a>
              <div className="p-5">
                <a href="#" className="block">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900">
                    {callout.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-slate-900">
                  {callout.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
