import React from "react";

function Carousel() {
  return (
    <div>
      <iframe
        className="w-11/12 h-screen m-auto mt-16 mb-16"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.672064429783!2d69.2239158!3d41.2942411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba9c7000001%3A0xaa72b51b3fc84782!2sArlekino!5e0!3m2!1sru!2s!4v1664809236562!5m2!1sru!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Carousel;
