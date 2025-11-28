import React, { useState, useEffect, useRef } from "react";

const CardContent = ({ item }) => (
  <div className="flex relative items-center justify-center bg-[#111213] p-6 rounded-3xl h-[290px] w-[200px] text-white mt-20">
    <div className="absolute rounded-3xl inset-0 overflow-hidden pointer-events-none">
      <div
        className="
          absolute w-[120px] h-[180px]
          top-[-10%] left-[-10%]
          bg-[radial-gradient(circle_at_top_left,_rgba(55,74,109,1)_0%,_rgba(55,74,109,0.5)_40%,_transparent_80%)]
          blur-[60px] 
        "
      ></div>
    </div>
    <div className="relative z-10">
      <div className="flex flex-col">
        <h1 className="text-xl">{item.name}</h1>
        <h2 className="text-base">{item.model}</h2>
      </div>
      <div className="flex">
        <img
          src={item.image}
          alt={`${item.model}`}
          className="h-16 object-contain m-6"
        />
      </div>
      <div className="grid grid-cols-2">
        <div className="flex gap-2 items-center text-xs ">
          <img src={item.accelerationIcon} alt="" />
          <span>{item.acceleration} Sec</span>
        </div>
        <div className="flex gap-2 items-center text-xs ">
          <img src={item.maxSpeedIcon} alt="" />
          <span>{item.maxSpeed}Km/h</span>
        </div>
        <div className="flex gap-2 items-center text-xs ">
          <img src={item.fuelIcon} alt="" />
          <span>{item.fuel}</span>
        </div>
      </div>
      <div className="flex mt-5 justify-between text-base">
        <span>${item.prices}</span>
      </div>
      <div className="py-3 px-3 bottom-[-9%] right-[-15%] rounded-tl-2xl rounded-br-2xl absolute bg-blue-400">
        <button>
          <img src={item.saveIcon} className="h-4" />
        </button>
      </div>
    </div>
  </div>
);

const Carrousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  const containerRef = useRef(null);
  let touchStartX = useRef(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full mb-15">
      <div
        className="md:hidden relative overflow-hidden"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((item, i) => (
            <div key={i} className="min-w-full flex justify-center">
              <CardContent item={item} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 px-3 py-2 rounded-full text-white text-xl md:hidden"
      >
        ‹
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 px-3 py-2 rounded-full text-white text-xl md:hidden"
      >
        ›
      </button>

      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full  transition-all  ${
              i === currentIndex ? "bg-white w-4" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 lg:max-w-3xl xl:max-w-4xl 2xl:max-w-7xl">
          <div className="flex flex-wrap justify-center gap-8">
            {slides.map((item, i) => (
              <div key={i} className="flex justify-center">
                <CardContent item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
