import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const reviews = [
  {
    name: "Antonio Martínez",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVxY7n8j_NOIqe3zQ-SGeb3ZvsZOtMiD-k7sxEVLbkbIGHLTT5_=w128-h128-c-rp-mo-ba5-br100",
    rating: 5,
    comment: "Sala de conciertos muy acogedora!",
    date: "20/10/2024"
  },
  {
    name: "Victor López",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVhhxU9seKxn0sPCxMZkpeAneZllGLB1d4GotiXSoniQ-jcgWzw=w64-h64-c-rp-mo-br100",
    rating: 5,
    comment: "Buen sonido, mejor humanidad y buena música!",
    date: "15/10/2024"
  },
  {
    name: "E P",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJZMUorIAdB3KiN1oqqE38pxE0NKkMacKlJdv_ozg7w5PWYLA=w64-h64-c-rp-mo-ba3-br100",
    rating: 5,
    comment:
      "Sala muy buena para concis, tanto para ir a darlos como para ir a verlos.\n\nAcústica buena, buen sitio en general.",
    date: "10/10/2024"
  }
];

const Reviews = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const visibleReviews =
    window.innerWidth < 768
      ? [reviews[currentIndex]]
      : window.innerWidth < 1024
      ? reviews.slice(currentIndex, currentIndex + 2)
      : reviews;

  return (
    <section className="py-12 bg-black">
      <h2 className="text-[60px] text-[#ffd700] text-center font-metal border-b border-white pb-12">
        {t("contact.welcome2")}
      </h2>
      <div className="max-w-[1140px] mx-auto px-4 mt-20 relative">
        {window.innerWidth < 1024 && (
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between left-0 px-2 z-20">
            <button
              onClick={prevSlide}
              className="text-white bg-black/50 hover:bg-black/80 w-10 h-10 rounded-full flex items-center justify-center hover:text-[#ffd700] transition-all"
              style={{ transform: "translateX(-1rem)" }}
            >
              &#8249;
            </button>
            <button
              onClick={nextSlide}
              className="text-white bg-black/50 hover:bg-black/80 w-10 h-10 rounded-full flex items-center justify-center hover:text-[#ffd700] transition-all"
              style={{ transform: "translateX(1rem)" }}
            >
              &#8250;
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#222222] pt-4 pb-8 px-4 rounded-lg relative transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-[100%]">
                <div className="relative">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="absolute -bottom-0 -right-0 bg-white rounded-full p-[2px] shadow-md">
                    <img
                      src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                      className="w-4 h-4"
                      alt="Google Review"
                    />
                  </div>
                </div>
              </div>
              <div className="items-center mb-4">
                <div className="mt-4">
                  <h4 className="text-white font-semibold text-center">
                    {review.name}
                  </h4>

                  <p className="text-gray-400 text-xs text-center">
                    {review.date}
                  </p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white whitespace-pre-line text-center mt-4">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
