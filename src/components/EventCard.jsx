import React from "react";

const EventCard = ({ date, title, description, imageUrl }) => {
  return (
    <div className="bg-[#1a1a1a] overflow-hidden">
      <div className="border-l-4 border-yellow-500">
        <div className="flex flex-col md:flex-row justify-between border border-l-0 border-r-[1px] border-t-[1px] border-b-[1px] pl-4 lg:pl-8 py-6 lg:py-3 pr-2 gap-8 lg:gap-24 min-h-[450px] lg:min-h-[280px]">
          <div
            className="w-full lg:w-[30%] h-[200px] md:h-auto md:order-1 lg:order-last rounded-[10px]"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="w-full lg:w-[70%] flex justify-start items-center gap-4">
            <div className="hidden lg:block flex-shrink-0 text-center lg:mr-6">
              <span className="text-2xl lg:text-3xl font-bold text-white">
                {date.day}
              </span>
              <p className="text-xs lg:text-sm uppercase text-white">
                {date.month}
              </p>
              <p className="text-[10px] lg:text-[11px] uppercase text-white mt-1">
                {date.weekDay}
              </p>
            </div>
            <div className="w-full space-y-2 lg:space-y-3 flex-grow">
              <h3 className="text-2xl lg:text-3xl font-medium text-white text-left">
                {title}
              </h3>
              <p className="text-white font-light text-[13px] text-justify px-0">
                {description}
              </p>
              <div className="border-b-2 border-solid border-yellow-500">
                <button className="text-white font-light text-xs w-full lg:w-auto text-left">
                  COMPRA TU ENTRADA
                </button>
              </div>
              {/* <div className="flex-shrink-0 text-center lg:hidden pb-4">
                <span className="text-2xl lg:text-3xl font-bold text-white">
                  {date.day}
                </span>
                <p className="text-xs lg:text-sm uppercase text-white">
                  {date.month}
                </p>
                <p className="text-[10px] lg:text-[11px] uppercase text-white mt-1">
                  {date.weekDay}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
