import React from "react";

const CheckIcon = () => (
  <svg
    className="flex-shrink-0 w-5 h-5 text-accent"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const FormationCard = ({ title, items }) => (
  <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-light-text bg-[#1F2937] rounded-lg border border-gray-700 shadow-lg xl:p-8">
    <h3 className="mb-4 text-2xl font-semibold text-accent">{title}</h3>
    <ul role="list" className="mb-8 space-y-4 text-left">
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-3">
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Formation = ({ content }) => {
  const card1Items = [
    content.formation__pageThree,
    content.formation__page3,
    content.formation__page4,
    content.formation__page5,
    content.formation__page6,
    content.formation__page7,
    content.formation__page8,
    content.formation__page9,
    content.formation__page10,
    content.formation__page11,
  ];

  const card2Items = [
    content.formation__pageThree,
    content.formation__page13,
    content.formation__page14,
    content.formation__page15,
    content.formation__page16,
    content.formation__page17,
    content.formation__page18,
    content.formation__page19,
    content.formation__page20,
    content.formation__page21,
  ];

  const card3Items = [
    content.formation__pageThree,
    content.formation__page23,
    content.formation__page24,
    content.formation__page25,
    content.formation__page26,
    content.formation__page27,
    content.formation__page28,
    content.formation__page29,
    content.formation__page30,
  ];

  return (
    <section className="bg-brand-dark py-24 sm:py-32">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-400">Training Programs</h2>
          <p className="mb-4 text-3xl tracking-tight font-extrabold text-accent sm:text-4xl">
            {content.formation__page1}
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <FormationCard title={content.formation__page2} items={card1Items} />
          <FormationCard title={content.formation__page12} items={card2Items} />
          <FormationCard title={content.formation__page22} items={card3Items} />
        </div>
      </div>
    </section>
  );
};

export default Formation;
