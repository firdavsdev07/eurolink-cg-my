import ResultUser1 from "../assets/results/user1.jpg";
import ResultUser2 from "../assets/results/user2.jpg";

export default function Example({ content }) {
  const callouts = [
    {
      name: "Yusupova Sevinchoy",
      imageSrc: ResultUser1,
      description: content.results__page__description1,
    },
    {
      name: "Bui Thi Phuong ",
      imageSrc: ResultUser2,
      description: content.results__page__description2,
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        {callouts.map((callout, index) => (
          <div
            key={index}
            className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-sm text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {callout.name}
              </h2>
              <p className="mt-6 text-md leading-8 text-slate-900">
                {callout.description}
              </p>
            </div>
            <div className=" relative  mt-3 h-screen lg:mt-8">
              <img
                className=" absolute left-0 h-96 top-10 w-[3/5] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src={callout.imageSrc}
                alt="App screenshot"
                // width={}
                // height={1080}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
