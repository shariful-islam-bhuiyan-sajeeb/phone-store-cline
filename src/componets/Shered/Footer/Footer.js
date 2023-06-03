import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { TbDeviceCctv } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiDeviceTablet, HiPhone } from "react-icons/hi2";
// import footer from "../../Assets/footer background img.jpg";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        top="1000"
        color="#0ea5e9"
        className="flex items-center justify-center"
        viewBox="0 0 16 16"
        svgPath="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
      />
      <div className="footer footer-center  mt-10  text-base-content rounded">
        <div className=" w-full xl:max-w-[2540px]  mx-auto relative 2xl:mt-52 xl:mt-44 bg-[#252d35]  lg:mt-32 sm:mt-20 mt-16">
          <div className="absolute 2xl:-top-28 xl:-top-20 lg:-top-16 md:-top-14 sm:-top-10 -top-5 right-0 left-0  z-0 w-full ">
            <img
              className=" w-full "
              src="https://www.andamancab.in/assets/img/footer-bottom.svg"
              alt=""
            />
          </div>
          <footer className="  pb-8">
            <div className="xl:w-[1000px] lg:w-[800px] md:w-[700px] w-full mx-auto  py-10">
              <div className="container grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-3 sm:gap-4 gap-6 mx-auto  lg:px-0 px-4   ">
                <div className="flex flex-col items-start  lg:w-3/5 w-full mx-auto   sm:text-xs text-md  space-y-4 text-white ">
                  <div className=" ">
                    <h2 className="xl:text-2xl lg:text-xl md:text-md sm:text-md text:sm sm:pb-4 pb-2 text-left font-serif border-b border-gray-400">
                      Cruises
                    </h2>
                    <div className="flex flex-col  lg:mt-6 md:mt-4 mt-2 text-left xl:space-y-3 md:space-y-2 space-y-1   font-medium text-inherit">
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Green Ocean 1
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        ITT Majestic
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Nautika Lite
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Green Ocean 2
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Nautika
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Makruzz
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*=============== Cab Services */}
                <div className="flex flex-col text-start space-y-4 lg:w-3/5 w-full mx-auto ">
                  <div className=" ">
                    <h2 className="xl:text-xl lg:text-xl md:text-md text-md  sm:pb-4 pb-2 text-left text-white font-serif border-b border-gray-400">
                      Cab Services
                    </h2>
                    <div className="flex flex-col  lg:mt-6 md:mt-4 mt-2 text-left xl:space-y-3 md:space-y-2 space-y-1 lg:text-sm text-md hover:text-md  text-slate-200 text-inherit">
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Cabs in Port Blair
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Cabs in Havelock Island
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Cabs in Neil Island
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*=================== Activities */}
                <div className="flex flex-col space-y-4 w-full mx-auto ">
                  <div className=" ">
                    <h2 className="xl:text-xl lg:text-xl md:text-md  text-md sm:pb-4 pb-2 text-left text-white font-serif border-b border-gray-400">
                      Activities
                    </h2>
                    <div className="flex flex-col  lg:mt-6 md:mt-4 mt-2 text-left xl:space-y-2 space-y-1 lg:text-sm sm:text-xs text-md hover:text-md  text-slate-200 text-inherit">
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Parasailing at Havelock Elephant Beach
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Barren Island Andaman
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Boat Scuba Diving at Havelock
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Reef Looker Semi- Submarine Glass Boat Ride at Elephant
                        Beach
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Sea Walking at Havelock Elephant Beach
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Cellular Jail
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Andaman Dolphin Glass Boat Ride at North Bay Coral
                        Island
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                      <a
                        className="flex items-center  gap-x-2  group hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        Scuba Diving at Chidiyatapu
                        <BsArrowRight className="  opacity-0 hover:opacity-100" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* ==================Contact with Us */}
                <div className="flex flex-col  w-full mx-auto ">
                  <div className=" ">
                    <h2 className="xl:text-xl lg:text-xl md:text-md sm:text-md text:sm md:pb-4 sm:pb-3 pb-2 text-left text-white font-serif border-b border-gray-400">
                      Contact with Us
                    </h2>
                    <div className="flex flex-col  2xl:mt-6 xl:mt-5 lg:mt-4 sm:mt-3 mt-2 text-left   sm:text-xs text-md hover:text-md  text-slate-200 text-inherit">
                      <a
                        className="flex items-center  gap-x-2 my-2  hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        <HiDeviceTablet />
                        <span className="text-gray-600 hover:text-[#ffd000] ">
                          9933263867, 9531955441
                        </span>
                      </a>
                      <a
                        className="flex items-center  gap-x-2  hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        <HiPhone />
                        <span className="text-white hover:text-[#ffd000] ">
                          WhatsApp: 9933263867, 9531955441
                        </span>
                      </a>
                      <a
                        className="flex items-center  gap-x-2  my-2 hover:text-[#ffd000]"
                        rel="noopener noreferrer"
                        href="#"
                      >
                        <BsFillEnvelopeFill />
                        <span className="text-white hover:text-[#ffd000] ">
                          contact@andamancab.in
                        </span>
                      </a>
                      <div className="w-full h-[1px] bg-slate-300 xl:my-6 lg:my-4 md:my-3 my-1"></div>
                      <a
                        className="flex items-start gap-x-2  my-2 "
                        rel="noopener noreferrer"
                        href="#"
                      >
                        <GoBook className="xl:w-24 w-20" />
                        <span className="text-gray-600 hover:text-[#ffd000] ">
                          Shop No. 01, Pulikeezu Bhavan Bargat Line, near
                          juvenile home, DRDO TRANSIST, Nayagaon, Port Blair,
                          Andaman and Nicobar Islands 744106
                        </span>
                      </a>
                      <div className="flex md:flex-row flex-col items-center lg:gap-x-2 gap-x-1 lg:my-6 md:my-4 my-3">
                        <h2>FOLLOW US</h2>
                        <div className="flex items-center md:mt-0 mt-2 lg:gap-x-2 gap-x-1">
                          <img
                            className="lg:w-7 w-5 rounded-md"
                            src="https://i.ibb.co/QcvjmFH/download.png"
                            alt=""
                          />
                          <img
                            className="lg:w-7 w-5 rounded-md"
                            src="https://i.ibb.co/1zgWhSV/download-1.jpg"
                            alt=""
                          />
                          <img
                            className="lg:w-10 w-7 rounded-md"
                            src="https://i.ibb.co/LhKVq5p/images.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full h-[1px] bg-slate-400 lg:mt-10 md:mt-8 sm:mt-6 mt-4 "></div>
                <div className="mt-6 flex lg:flex-row flex-col items-center  justify-between">
                  <div className="flex items-center gap-x-4">
                    <div className="flex items-center font-serif gap-x-2 text-white bg-slate-800 py-1 px-2">
                      <h2>English</h2>
                      <TbDeviceCctv />
                    </div>
                    <div className="flex items-center font-serif gap-x-2 text-white bg-slate-800 py-1 px-2">
                      <h2>INR</h2>
                      <MdKeyboardArrowDown />
                    </div>
                    <div className="flex items-center font-serif gap-x-2 text-white bg-slate-800 py-1 px-2">
                      <img
                        className="w-20"
                        src="https://www.andamancab.in/assets/img/cards_all.svg"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="flex md:flex-row flex-col items-center">
                    <div className="flex items-center flex-wrap gap-x-1">
                      <div className="flex items-center font-serif gap-x-2 text-gray-400  hover:text-white py-1 px-2">
                        Content Disclaimer
                        <h2 className="text-xl">|</h2>
                      </div>
                      <div className="flex items-center font-serif gap-x-2 text-gray-400 hover:text-white  py-1 px-2">
                        Terms and Conditions
                        <h2 className="text-xl">|</h2>
                      </div>
                      <div className="flex items-center font-serif gap-x-2 text-gray-400 hover:text-white  py-1 px-2">
                        Privacy
                        <h2 className="text-xl">|</h2>
                      </div>
                      <div className="flex items-center font-serif gap-x-2 text-gray-400 hover:text-white  py-1 px-2">
                        © 2023 Andaman Cabs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
