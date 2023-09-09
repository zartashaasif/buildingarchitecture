import React from "react";
import hero from "../images/hero.png";
import home from "../images/home.png";

function Herosection() {
  return (
    <main>
      <section className="hero-bg ">
        <div className=" text-white flex flex-col md:flex-row md:items-end md:gap-10 max-w-[1200px] mx-auto">
          <div className="flex flex-col pt-10 px-5 gap-2">
            <h1 className="text-[24px] font-medium pb-2 md:text-[64px] ">
              We Provide <br />
              Architectural design <br />
              and construction
            </h1>
            <p className="text-[#C4C4C4] text-[14px] font-medium md:max-w-[580px] md:text-[18px]">
              ​More than 100 building and housing projects that we have built.
              The building owner chose us over other contractors in Jakarta,
              because our work is different
            </p>
            <button className="self-start text-[14px] font-semibold px-3 py-1.5 mt-2 linear-grad ">
              Discover More
            </button>
            <div className="md:flex justify-between pt-4 mt-8 hidden md:block md:mb-7">
              <div>
                <h2 className="text-[24px] font-bold">
                  300<span className="text-[#2387C0]">+</span>
                </h2>
                <p className="text-[12px] font-semibold">
                  Happy <br />
                  Client
                </p>
              </div>
              <div>
                <h2 className="text-[24px] font-bold">
                  900<span className="text-[#2387C0]">+</span>
                </h2>
                <p className="text-[12px] font-semibold">
                  Amazing <br />
                  Projects
                </p>
              </div>
              <div>
                <h2 className="text-[24px] font-bold">
                  20<span className="text-[#2387C0]">+</span>
                </h2>
                <p className="text-[12px] font-semibold">
                  Awards <br />
                  winning
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-end -mt-32 ">
              <picture>
                <source media="(max-width: 765px)" srcset={hero} />
                <source
                  media="(min-width: 768px)"
                  srcset={home}
                  className="md:w-[400px]"
                />
                <img
                  src="elva-800w.jpg"
                  alt="Chris standing up holding his daughter Elva"
                />
              </picture>
            </div>
            <section className="bg-operated text-white  hidden flex-col gap-12 p-5 md:flex ">
              <div className="flex justify-between gap-8 ">
                <div className="md:mt-3">
                  <div>
                    <p className="text-[18px] font-normal">General</p>
                  </div>
                  <h3 className="text-[18px] font-bold pt-2">Project</h3>
                </div>
                <div className="flex flex-col items-baseline">
                  <div className="flex items-center">
                    <h2 className="text-[36px]  font-bold">25</h2>{" "}
                    &nbsp;&nbsp;&nbsp;
                    <h2 className="text-[20px] md:text-[18px] font-medium">
                      Years
                    </h2>
                  </div>
                  <h3 className="text-[24px] font-semibold -mt-2">Operated</h3>
                </div>
                <div>
                  <p className="text-[12px] font-normal pt-4 max-w-[200px]">
                    As a trusted general project that has been operating for 25
                    years, our commitment is always to prioritize our client
                    satisfaction.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-operated text-white p-5 md:hidden ">
        <div className="flex justify-between ">
          <div>
            <div className="flex items-baseline">
              <h2 className="text-[36px] font-bold">25</h2>
              <h2 className="text-[20px] font-medium">Years</h2>
            </div>
            <h3 className="text-[24px] font-semibold -mt-2">Operated</h3>
          </div>
          <div className="text-[24px] font-bold">Logo</div>
        </div>
        <div>
          <p className="text-[12px] font-normal pt-4">
            As a trusted general project that has been operating for 25 years,
            our commitment is always to prioritize our client satisfaction.
          </p>
        </div>
        <div className=" flex justify-between pt-4">
          <div>
            <h2 className="text-[24px] font-bold">300+</h2>
            <p className="text-[12px] font-semibold">
              Happy <br />
              Client
            </p>
          </div>
          <div>
            <h2 className="text-[24px] font-bold">900+</h2>
            <p className="text-[12px] font-semibold">
              Amazing <br />
              Projects
            </p>
          </div>
          <div>
            <h2 className="text-[24px] font-bold">20+</h2>
            <p className="text-[12px] font-semibold">
              Awards <br />
              winning
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Herosection;
