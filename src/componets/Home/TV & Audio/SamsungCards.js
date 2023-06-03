import React from "react";

const SamsungCards = () => {
  return (
    <div>
      <div className="xl:pb-10 lg:pb-7 md:pb-5 pb-6 xl:pt-7 lg:pt-5 pt-3">
        <img
          className="w-2/4 mx-auto rounded-lg"
          src="https://i.ibb.co/nPKQ114/maxresdefault.jpg"
          alt=""
        />
        <div className="text-center space-y-2 pt-3">
          <h2 className="xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl text-lg  text-black font-bold">
            Save up to $500
          </h2>
          <p className="text-lg text-black md:w-full w-11/12 mx-auto">
            Explore a universe of 8K clarity with the Samsung Neo QLED 8K
            QN900C.
          </p>
          <button className="lg:text-md bg-black text-white lg:px-5 md:px-3 px-2 md:py-2 py-1 font-serif rounded-xl hover:bg-blue-500 hover:text-black transition-all duration-500">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SamsungCards;
