import React from "react";
import aboutsec from "../assets/about.svg";

const AboutSection = () => {
  return (
    <section className="text-white px-2  md:px-12 md:py-16 py-6 lg:px-20 ">
      <div
        className="flex flex-col relative justify-center items-center mx-6
        md:flex-row  md:mx-auto md:items-center md:w-full  
        xl:flex-row 
      
      "
      >
        <img
          src={aboutsec}
          className="w-full h-[250px] object-cover rounded-xl
          md:h-auto md:w-4xl 
          lg:w-full lg:h-80
          xl:max-w-[620px] xl:h-auto
          2xl:w-1/2 2xl:h-auto
          
          
          "
          alt="Interior"
        />
        <div
          className="flex text-center flex-col bottom-[54%] rounded-2xl right-[-1%] h-24 w-40 justify-center items-center p-4 bg-white/30 opacity-75 backdrop-blur-3xl  
          absolute
          sm:bottom-1 sm:left-[10%]
          md:bottom-[13%] md:left-[30%]
          lg:bottom-[-3%] lg:left-[37%]
          xl:bottom-[-10%] xl:left-[40%]"
        >
          <h1>2.500+</h1>
          <p>Supercharges placed along popular routes</p>
        </div>

        <div
          className="flex justify-center items-center mx-10 mt-25 text-base 
        md:mt-10
        xl:
        "
        >
          <div className="max-w-xl">
            <h1 className="font-semibold text-2xl md:text-3xl md:mt-10 md:mb-4">
              Machines With Future Technology
            </h1>

            <p className="text-base">
              See the future with high-performance electric cars produced by
              renowned brands. They feature futuristic builds and designs with
              new and innovative platforms that last a long time.
            </p>

            <button className="mt-10 p-4 bg-blue-500">Know More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
