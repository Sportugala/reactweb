import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const sliderRef = useRef(null);

  const handleNextSlide = () => {
    if (currentIndex < images.length - 2) {
      setCurrentIndex((prev) => prev + 2);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 2);
    } else {
      setCurrentIndex(images.length - 2);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
      setTouchPosition(null);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full lg:w-[70%] overflow-hidden relative group">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 50}%)`
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-[50%] px-2 transition-transform duration-500"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-[400px] object-cover rounded-lg border-2 border-white"
              draggable="false"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ImageSlider;
