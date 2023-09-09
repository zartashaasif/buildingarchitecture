import React from "react";
import bag from "../images/bag.png";
import pencile from "../images/pencile.png";
import clock from "../images/clock.png";
import tick from "../images/tick.png";

function Different() {
  return (
    <div>
      <div className="p-5 max-w-[1200px] mx-auto md:mt-20">
        <div className="h-1 w-[90px] bg-operated" />
        <div className="flex flex-col gap-2 md:flex-row md:justify-between items-center">
          <h2 className="text-[24px] font-semibold  ">
            What Make Us
            <br />
            Different?
          </h2>
          <p className="text-[14px] font-medium text-[#C4C4C4] pt-2 md:max-w-[560px] ">
            Check out our best service you can possibly orders in building your
            company and don't forget to ask via our email or our customer
            service if you are interested in using our services
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center mt-10 max-w-[1200px] mx-auto md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 max-w-[234px] md:h-[370px] ">
          <div>
            <img src={bag} />
          </div>
          <h3 className="text-[24px] font-semibold text-[ #242527] pt-4 ">
            Experienced
          </h3>
          <p className="text-[14px] font-medium text-[#C4C4C4] pt-2 mb-8 ">
            Our experience of 25 years of building and making achievements in
            the world of development
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 max-w-[234px] md:h-[370px] ">
          <div>
            <img src={pencile} />
          </div>
          <h3 className="text-[24px] font-semibold text-[ #242527] pt-4 ">
            competitive
          </h3>
          <p className="text-[14px] font-medium text-[#C4C4C4] pt-2 mb-8 ">
            The prices we offer you are very competitive without reducing the
            quality of the company's work in the slightest
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 max-w-[234px] md:h-[370px]">
          <div>
            <img src={clock} />
          </div>
          <h3 className="text-[24px] font-semibold text-[ #242527] pt-4 ">
            On Time
          </h3>
          <p className="text-[14px] font-medium text-[#C4C4C4] pt-2 mb-8 ">
            We prioritize the quality of our work and finish it on time
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 max-w-[234px] md:h-[370px] ">
          <div>
            <img src={tick} />
          </div>
          <h3 className="text-[24px] font-semibold text-[ #242527] pt-4 ">
            Best Metrials
          </h3>
          <p className="text-[14px] font-medium text-[#C4C4C4] pt-2 mb-8">
            The material determines the building itself so we recommend that you
            use the best & quality materials in its class.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Different;
