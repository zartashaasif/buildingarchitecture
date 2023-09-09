import React from "react";
import high from "../images/high.png";
import top from "../images/top.png";
import green from "../images/green.png";
import whit from "../images/whit.png";
import vertical from "../images/vertical.png";
import RGB from "../images/RGB.png";
import RDB from "../images/RDB.png";
import RFC from "../images/RFC.png";
function Project() {
  return (
    <div className="p-5 flex flex-col gap-8 max-w-[1200px] mx-auto">
      <div>
        <h2 className="text-[24px]  font-semibold">
          Our collection <br />
          best project{" "}
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 md:max-w-[1200px] gap-5 max-w-[320px] mx-auto">
        <picture>
          <source media="(max-width: 799px)" srcset={high} />
          <source media="(min-width: 800px)" srcset={vertical} />
          <img
            src="elva-800w.jpg"
            alt="Chris standing up holding his daughter Elva"
          />
        </picture>
        <picture>
          <source media="(max-width: 799px)" srcset={top} />
          <source media="(min-width: 800px)" srcset={RGB} />
          <img
            src="elva-800w.jpg"
            alt="Chris standing up holding his daughter Elva"
          />
        </picture>
        <picture>
          <source media="(max-width: 799px)" srcset={green} />
          <source media="(min-width: 800px)" srcset={RDB} />
          <img
            src="elva-800w.jpg"
            alt="Chris standing up holding his daughter Elva"
          />
        </picture>
        <picture>
          <source media="(max-width: 799px)" srcset={whit} />
          <source media="(min-width: 800px)" srcset={RFC} />
          <img
            src="elva-800w.jpg"
            alt="Chris standing up holding his daughter Elva"
          />
        </picture>
      </div>
    </div>
  );
}

export default Project;
