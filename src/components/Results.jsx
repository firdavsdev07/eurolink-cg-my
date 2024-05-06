import React from "react";
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
  const callouts = [
    {
      name: "Yusupova Sevinchoy",
      imageSrc: ResultUser1,
      description: content.results__page__description1,
    },
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
    {
      name: "Yusupova Sevinchoy",
      imageSrc: ResultUser2,
      description: content.results__page__description2,
    },
    {
      name: "Abdullokh Akhmadjonov",
      imageSrc: ResultUser8,
      description: content.results__page__description2,
    },
    {
      name: "Malika Bayazova",
      imageSrc: ResultUser9,
      description: content.results__page__description9,
    },
    {
      name: "Orzugul Murodova",
      imageSrc: ResultUser10,
      description: content.results__page__description10,
    },
    {
      name: "Shakhriddin Korakhanov",
      imageSrc: ResultUser11,
      description: content.results__page__description11,
    },
    {
      name: "Saida Sayduvalieva",
      imageSrc: ResultUser12,
      description: content.results__page__description12,
    },
    {
      name: "Khurozova Marjona ",
      imageSrc: ResultUser13,
      description: content.results__page__description13,
    },
    {
      name: "Homidov Bekhzod",
      imageSrc: ResultUser14,
      description: content.results__page__description14,
    },
    {
      name: "Matnazarov Bunyod ",
      imageSrc: ResultUser15,
      description: content.results__page__description15,
    },
    {
      name: "Khayitbayeva Shokhsanam ",
      imageSrc: ResultUser16,
      description: content.results__page__description16,
    },
    {
      name: "Mukhtorov Khumoyunmirzo",
      imageSrc: ResultUser17,
      description: content.results__page__description17,
    },
    {
      name: "Mukhtorov Javokhir",
      imageSrc: ResultUser18,
      description: content.results__page__description18,
    },
    {
      name: "Khotamova Ezoza",
      imageSrc: ResultUser19,
      description: content.results__page__description19,
    },
    {
      name: "Murotova Khusniyakhon",
      imageSrc: ResultUser20,
      description: content.results__page__description20,
    },
    {
      name: "Makhmudov Shokhruhbek",
      imageSrc: ResultUser21,
      description: content.results__page__description21,
    },
    {
      name: "Mamadaliev Islomjon",
      imageSrc: ResultUser22,
      description: content.results__page__description22,
    },
    {
      name: "Rakhmatullayev Umidulla ",
      imageSrc: ResultUser23,
      description: content.results__page__description23,
    },
    {
      name: "Makhmudov Ramziddin",
      imageSrc: ResultUser24,
      description: content.results__page__description24,
    },
    {
      name: "Mamadalieva Mubinakhon",
      imageSrc: ResultUser25,
      description: content.results__page__description25,
    },
    {
      name: "Akramjonova Khulkaroy",
      imageSrc: ResultUser26,
      description: content.results__page__description26,
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
