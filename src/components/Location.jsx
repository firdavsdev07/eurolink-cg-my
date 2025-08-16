import React from "react";

function Location() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-400">Find Us</h2>
          <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
            Our Location
          </p>
        </div>
        <div className="mt-16">
          <iframe
            className="w-full h-96 rounded-lg shadow-2xl ring-1 ring-white/10"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.672064429783!2d69.2239158!3d41.2942411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba9c7000001%3A0xaa72b51b3fc84782!2sArlekino!5e0!3m2!1sru!2s!4v1664809236562!5m2!1sru!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location of Arlekino"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
