import React from "react";
import adir from "../images/adir.png";
import adhimix from "../images/adhimix.png";
import logoH from "../images/logoH.png";
import logom from "../images/logom.png";
import logot from "../images/logot.png";

function Brandlogo() {
  return (
    <div className="md:py-5 md:h-[200px] md:items-center md:justify-between flex justify-between items-center gap-8 h-[100px] overflow-x-auto max-w-[1200px] mx-auto">
      <div className="h-20 min-w-[6rem] flex items-center">
        <img src={adir} alt="company logo" />
      </div>
      <div className="h-20 min-w-[6rem] flex items-center">
        <img src={adhimix} alt="company logo" />
      </div>
      <div className="h-20 min-w-[6rem] flex items-center">
        <img src={logoH} alt="company logo" />
      </div>
      <div className="h-20 min-w-[6rem] flex items-center">
        <img src={logom} alt="company logo" />
      </div>
      <div className="h-20 min-w-[6rem] flex items-center">
        <img src={logot} alt="company logo" />
      </div>
    </div>
  );
}

export default Brandlogo;
