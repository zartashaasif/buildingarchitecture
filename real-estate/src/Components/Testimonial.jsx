import React from "react";
import Dianne from "../images/Dianne.png";
import Vector from "../images/Vector.png";
import Mask from "../images/Mask.png";

function Testimonial() {
  return (
    <>
      <section className="p-5 max-w-[1200px] mx-auto flex flex-col lg:flex-row">
        <div
          className="bg-[url('/src/images/building.png')] h-[340px] 
        bg-no-repeat bg-cover flex items-end h-[500px] mb-40 justify-center lg:flex-1 lg:mr-40 lg:flex-col lg:justify-center "
        >
          <div className=" flex flex-col items-center  gap-2  dianne h-[250px] w-[250px] relative top-24 lg:top-0 lg:-right-24 p-5">
            <div>
              <img src={Dianne} alt="testimonial image" />
            </div>
            <h1 className="text-[20px] font-semibold text-[#FFFFFF]">
              Dianne Russell
            </h1>
            <p className="text-[14px] font-normal text-[#E5E5E5] text-center">
              More than 20 years of experience in the field architecture and has
              worked on project up to 100+
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-1 md:justify-center">
          <h2 className="text-[24px] font-semibold text-[ #242527] ">
            Meet and talk with
            <br />
            our best architecture
          </h2>
          <p className="text-[14px] font-medium text-[#C4C4C4] ">
            All our teams are professional and competent in their fields and
            will help you realize your dream building with the excellent result.
          </p>
          <div className="flex justify-between mt-2">
            <button className="bg-[#0A72AD] text-[#FFFFFF] px-3 py-1.5">
              See all team
            </button>
            <button className="flex items-center gap-2">
              How it works <img src={Vector} />
            </button>
          </div>
        </div>
      </section>
      <section className="p-5 flex flex-col gap-5 md:flex-row-reverse max-w-[1200px] mx-auto">
        <img
          src={Mask}
          alt="Mask is not uploded"
          class="w-full max-w-[470px] flex-1 border-8 border-white"
        />
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-[24px] font-semibold">Our Story Who we are</h2>
          <p className="text-[14px] font-medium text-[#C4C4C4]">
            Established in 1992, PT. Wahana Cipta operates as a General
            Contracting company with a footprint that we have planted throughout
            Indonesia. Initially, we focused on construction in the field of
            residential housing development in Jakarta. As the company grows,
            now we are present as a reliable...
          </p>
          <button className="bg-[#0A72AD] text-[#FFFFFF] px-3 py-1.5 self-start">
            See More
          </button>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
