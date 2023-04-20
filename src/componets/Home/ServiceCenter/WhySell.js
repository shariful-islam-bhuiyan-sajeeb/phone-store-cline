import React, { useEffect, useState } from "react";

const WhySell = () => {
  const [sells, setSell] = useState([]);
  useEffect(() => {
    fetch("whySell.json")
      .then((res) => res.json())
      .then((data) => setSell(data));
  }, []);

  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="lg:mt-20 mt-7   px-4 mx-auto text-black"
    >
      <div className="xl:text-6xl md:text-3xl text-2xl font-semibold font-serif  text-left">
        <h2 className="">Why sell on phone store?</h2>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-2   lg:mt-10 sm:mt-6 mt-4">
        {sells?.map((sell) => (
          <div
            key={sell._id}
            className="flex sm:flex-row flex-col sm:items-start items-center md:px-4 px-1 lg:py-4 sm:py-2 py-1 lg:gap-x-8 sm:gap-x-4"
          >
            <div>
              <img className="w-30 h-16  " src={sell?.img} alt="" />
            </div>
            <div className="flex flex-col items-left">
              <h1 className=" xl:text-4xl lg:text-3xl sm:text-2xl text-lg font-semibold ">
                {sell?.title}
              </h1>
              <p className="lg:text-xl text-lg lg:mt-6 sm:mt-2 mt-1 ">
                {sell?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySell;
