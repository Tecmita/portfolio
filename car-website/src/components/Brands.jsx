import React from "react";
import { brandLogos } from "../data/brandLogos";

const Brands = () => {
  return (
    <section className="mt-10 mb-20">
      <div
        className="
      grid 
      grid-cols-3 
      gap-6 
      place-items-center
      xl:grid-cols-6
      2xl:grid-cols-6
      
      "
      >
        {brandLogos.map((logo, i) => (
          <img
            src={logo}
            key={i}
            alt=""
            className="
            h-10 
            w-10 
            object-contain 
            opacity-80
            lg:h-16
            lg:w-16
            "
          />
        ))}
      </div>
    </section>
  );
};

export default Brands;
