import React, { useState, useEffect, useRef } from "react";
import CardContent from "./ui/CardContent";

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
    <div className="mt-20 relative w-full mb-15">
      <div className="flex justify-center items-center">
        <h2 className="max-w-[220px] text-center text-white text-xl">
          Choose Your Electric Car Of The Porsche Brand
        </h2>
      </div>
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
