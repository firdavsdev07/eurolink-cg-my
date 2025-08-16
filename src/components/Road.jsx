import RoadPage from "../assets/images/road.jpg";

export default function Road({ content }) {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="text-base leading-7 text-gray-300">
              <h2 className="text-base font-semibold leading-7 text-gray-400">Our Roadmap</h2>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                {content.road__page__header}
              </h1>
              <div
                className="mt-6 max-w-xl space-y-6 text-base leading-7"
                dangerouslySetInnerHTML={{
                  __html: content.road__page__description,
                }}
              />
            </div>
          </div>
          <div className="lg:sticky lg:top-4">
            <img
              className="w-[48rem] max-w-none rounded-xl shadow-2xl ring-1 ring-white/10 sm:w-[57rem]"
              src={RoadPage}
              alt="Roadmap illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
