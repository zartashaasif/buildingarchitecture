import React from "react";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import gmail from "../images/gmail.png";
import linkdin from "../images/linkdin.png";

function Footer() {
  return (
    <div className="dianne ">
      <div className="mx-auto max-w-[1200px] p-5 flex flex-col md:flex-row gap-[40px] md:gap-[140px] py-20  ">
        <div className="flex flex-col gap-8 max-w-[547px]">
          <h2 className="text-[18px] font-bold text-[#FFFFFF]">Logo</h2>
          <p className="text-[14px] font-normal text-[#FFFFFF]">
            is a general contractor company based in Jakarta. More than 25 years
            of experience in building and carving out Indonesia's development.
          </p>
          <div className="flex mt-4 gap-2">
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={gmail} alt="gmail" />
            <img src={linkdin} alt="linkdin" />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] font-bold text-[#FFFFFF] cursor-pointer">
              Company
            </h3>
            <p className="pt-5 text-[16px] font-normal text-[#FFFFFF] cursor-pointer">
              About
            </p>
            <p className="text-[16px] font-normal text-[#FFFFFF] cursor-pointer">
              How Its Works
            </p>
            <p className="text-[16px] font-normal text-[#FFFFFF] cursor-pointer">
              Term
            </p>
            <p className="text-[16px] font-normal text-[#FFFFFF] cursor-pointer">
              Privacy Policy
            </p>
          </div>
          <div className="flex flex-col gap-4 ml-[20px] md:ml-[90px]">
            <h3 className="text-[18px] font-bold text-[#FFFFFF] cursor-pointer  ">
              More
            </h3>
            <p className="pt-5 text-[16px] font-normal text-[#FFFFFF] cursor-pointer">
              {" "}
              Documentation
            </p>
            <p className="text-[16px] font-normal text-[#FFFFFF] cursor-pointer">
              Licence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
