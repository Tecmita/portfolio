import React from "react";
import mist from "../assets/offers/white-shadow.svg";
import car from "../assets/offers/car1.svg";

const Offers = () => {
  return (
    <section className="flex justify-center items-center ">
      <div className="relative w-full h-[500px] md:h-[500px] mb-10">
        <img
          src={mist}
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        <div
          className="
        absolute
        z-30
        flex 
        items-center 

        px-4 
        text-center
        inset-x-0
        
        md:inset-x-auto
        md:inset-y-0
        md:px-20

        lg:left-72

        xl:left-32
        2xl:left-96
        "
        >
          <div
            className="
                max-w-[260px]
                mx-auto 
                text-center
                px-4 
                mt-12

                md:text-left
                md:max-w-[280px] 
                md:mx-0 

                lg:max-w-[350px]
              
               "
          >
            <h1 className="text-white font-semibold text-base md:max-w-[230px] md:text-xl">
              Do You Want To Receive Special Offers
            </h1>
            <p className="text-white text-sm mt-4 opacity-80">
              Be the first one to receive all the information about our products
              and new cars by email by subscribing to our mailing list
            </p>
            <button className="mt-10 p-4 bg-[#4177DC] font-semibold text-white rounded-sm">
              Subscribe Now
            </button>
          </div>
        </div>
        <img
          src={car}
          className="
          absolute 
          bottom-4 
          right-[-15%] 
          w-[350px]
          my-auto
          z-20 

          md:inset-y-0 
          md:right-10 
          
          lg:right-28
          xl:right-48
          xl:w-[450px]
          
          2xl:right-96
          "
        />
      </div>
    </section>
  );
};

export default Offers;
