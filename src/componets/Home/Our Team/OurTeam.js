import React from "react";

const OurTeam = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col items-center justify-center md:space-y-2 space-y-1">
        <h2 className="xl:text-3xl lg:text-xl text-md uppercase font-semibold font-serif">
          Our Team
        </h2>
        <div className="flex items-center md:gap-x-2 gap-x-1">
          <h2 className="h-[1px] xl:w-[80px] lg:w-[70px] md:w-[60px] sm:w-[50px] w-[40px]  bg-blue-500"></h2>
          <p className="text-sm">FRIENDLY AND PROFESSIONAL</p>
          <h2 className="h-[1px] xl:w-[80px] lg:w-[70px] md:w-[60px] sm:w-[50px] w-[40px]  bg-blue-500"></h2>
        </div>
      </div>
      {/* ================= card section ==============  */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:mt-8 lg:mt-4 mt-2 lg:gap-x-4 sm:gap-x-3 gap-x-0 gap-y-5">
        <div className="flex flex-col items-center overflow-hidden ">
          <img
            className="ease-in-out duration-700 transform hover:scale-125"
            src="https://pneupress.aislinthemes.com/app/uploads/2019/03/team_02-390x260.png"
            alt=""
          />
          <div className="flex flex-col items-center border xl:py-5 lg:py-3 md:py-2 py-1 md:px-0 px-3 md:w-full sm:w-11/12 mx-auto   bg-white">
            <h2 className="lg:text-lg md:text-md text-md font-serif font-medium">
              Mark Willberg
            </h2>
            <p className="lg:text-md text-sm font-serif font-bold text-black ">
              CO-FOUNDER
            </p>
            <p className="h-[1px] lg:w-[30px] md:w-[20px] w-[15px] bg-blue-600"></p>
            <p className="md:text-sm text-xs lg:py-3 sm:py-2 py-1 md:px-0 px-2 text-gray-400 lg:w-3/5 md:w-4/5 w-full  mx-auto">
              Primus elite lectus tical at node. Porta commodo terminal forks
              sande. Nulla novum at novelle.
            </p>
          </div>
        </div>

        {/* card section-2  */}
        <div className="flex flex-col items-center overflow-hidden ">
          <img
            className="ease-in-out duration-500 transform hover:scale-125"
            src="https://pneupress.aislinthemes.com/app/uploads/2019/03/team_03-390x260.png"
            alt=""
          />
          <div className="flex flex-col items-center border xl:py-5 lg:py-3 md:py-2 py-1 md:px-0 px-3 md:w-full sm:w-11/12 mx-auto   bg-white">
            <h2 className="lg:text-lg md:text-md text-md font-serif font-medium">
              Philip Brower
            </h2>
            <p className="lg:text-md text-sm font-serif font-bold text-black ">
              CO-FOUNDER
            </p>
            <p className="h-[1px] lg:w-[30px] md:w-[20px] w-[15px] bg-blue-600"></p>
            <p className="md:text-sm text-xs lg:py-3 sm:py-2 py-1 md:px-0 px-2 text-gray-400 lg:w-3/5 md:w-4/5 w-full  mx-auto">
              Primus elite lectus tical at node. Porta commodo terminal forks
              sande. Nulla novum at novelle.
            </p>
          </div>
        </div>
        {/* card section -3  */}

        <div className="flex flex-col items-center overflow-hidden ">
          <img
            className="ease-in-out duration-500 transform hover:scale-125"
            src="https://pneupress.aislinthemes.com/app/uploads/2019/03/team_01-390x260.png"
            alt=""
          />
          <div className="flex flex-col items-center border xl:py-5 lg:py-3 md:py-2 py-1 md:px-0 px-3 md:w-full sm:w-11/12 mx-auto   bg-white">
            <h2 className="lg:text-lg md:text-md text-md font-serif font-medium">
              Curtis Green
            </h2>
            <p className="lg:text-md text-sm font-serif font-bold text-black ">
              CO-FOUNDER
            </p>
            <p className="h-[1px] lg:w-[30px] md:w-[20px] w-[15px] bg-blue-600"></p>
            <p className="md:text-sm text-xs lg:py-3 sm:py-2 py-1 md:px-0 px-2 text-gray-400 lg:w-3/5 md:w-4/5 w-full  mx-auto">
              Primus elite lectus tical at node. Porta commodo terminal forks
              sande. Nulla novum at novelle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
