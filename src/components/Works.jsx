export default function Example({ content }) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="mt-2 text-3xl text-center font-bold  text-green-500 sm:text-4xl">
          {content.work__page1}
        </h2>
        <figure className="mt-10">
          <blockquote className="text-center  text-xl leading-7 text-gray-900 sm:text-lg sm:leading-7">
            <p>{content.work__page2}</p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
