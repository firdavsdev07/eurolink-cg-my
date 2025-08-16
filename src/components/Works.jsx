export default function Works({ content }) {
  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-400">Our Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-accent sm:text-4xl">
            {content.work__page1}
          </p>
          <figure className="mt-10">
            <blockquote className="text-center text-lg leading-8 text-gray-300 sm:text-xl sm:leading-9">
              <p
                dangerouslySetInnerHTML={{
                  __html: content.work__page2,
                }}
              />
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
}
