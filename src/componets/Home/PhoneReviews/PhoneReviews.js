import React, { useEffect, useState } from "react";
import "./PhoneReviews.css";
import phone1 from "../../Assets/mobile phone/phone4.jpeg";
import phone2 from "../../Assets/mobile phone/phone3.jpeg";
import ReactPlayer from "react-player";

const PhoneReviews = () => {
  const [VideoPost, setVideoPost] = useState([]);
  useEffect(() => {
    fetch("videosection.json")
      .then((res) => res.json())
      .then((data) => setVideoPost(data));
  }, []);

  return (
    <section className="w-full font-serif mt-16 lg:px-0 px-6">
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <h2 className="sm:text-3xl  text-xl font-bold">
            {" "}
            Welcome to our Phone Store.
          </h2>
          <p className=" sm:text-lg text-md text-justify">
            You will find all types of phones in our phone store. You Can
            purchase any phone as per your choice
          </p>
          <p className="h-[1px] lg:w-[750px] md:w-[600px] sm:w-[500px] w-full sm:mt-4 mt-2 bg-gray-400"></p>
        </div>
        {/* -------------------------One section ----------  */}

        <div className=" flex md:flex-row flex-col  md:mt-8 mt-4 ">
          <div className=" md:pr-4 pr-0 md:w-3/5 w-full mx-auto">
            <div className="flex flex-col pl-4 items-center justify-center">
              <h3 className="lg:text-3xl sm:text-2xl text-lg  font-semibold ">
                Phone Store is a mobile e-commerce site that sells vintage and
                handmade objects.
              </h3>
              <p className="md:text-lg text-md  text-black">
                Unique is the perfect adjective for Etsy, from their clean and
                minimalistic design. It even has a simpler layout than Amazon,
                but these two mobile e-commerce websites can’t be compared since
                they have a different target audience.
              </p>
            </div>
            <div className=" md:mt-4 mt-2  lg:space-y-4 md:space-y-3 space-y-2">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="">
                  <h4 className="text-lg font-medium leading-6 text-black">
                    Let’s see how Etsy fares. As of 2018,
                  </h4>
                  <p className=" text-black">
                    Etsy has more than 54 million members, who drove 1.93
                    billion in sales, and more than 31.7 million buyers. And
                    most importantly, 65 percent of those buyers come from a
                    mobile e-commerce site.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="">
                  <h4 className="text-lg font-medium ">
                    One great usability option that Etsy can boast.
                  </h4>
                  <p className="">
                    They truly live up to their motto – “We make it easy to find
                    your thing”. Grid view and professionally shot pictures are
                    a great way to present the bestselling products.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="">
                  <h4 className="text-lg font-medium leading-6">
                    One of the largest retail chains in the United States has
                    completely.
                  </h4>
                  <p className="">
                    At sed possim oporteat probatus, justo graece ne nec, minim
                    commodo legimus ut vix. Ut eos iudico quando soleat, nam
                    modus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------ video section  */}
          <div
            aria-hidden="true"
            className=" md:w-2/5 w-full mx-auto md:mt-0 mt-3  "
          >
            <div className="w-full">
              {VideoPost?.slice(2, 3).map((video) => (
                <div key={video._id}>
                  <div className="">
                    <div className=" lg:h-[390px] md:h-[480px] h-[300px]">
                      <iframe
                        className="rounded-md"
                        width="100%"
                        height="100%"
                        src={video.video}
                        title=" video player"
                        frameBorder="0"
                        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        allowFullScreen={true}
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ---------------------section two ---------------- */}

        <div>
          <div className=" flex md:flex-row  flex-col  md:mt-8 mt-4 ">
            <div
              aria-hidden="true"
              className=" md:w-2/5 w-full mx-auto md:mt-0 mt-3  flex-row-reverse  "
            >
              <div className="w-full">
                {VideoPost?.slice(3, 4).map((video) => (
                  <div key={video._id}>
                    <div className="">
                      <div className=" lg:h-[390px] md:h-[480px] h-[300px]">
                        <iframe
                          className="rounded-md"
                          width="100%"
                          height="100%"
                          src={video.video}
                          title=" video player"
                          frameBorder="0"
                          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                          allowFullScreen={true}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  // now------------------
                  // <iframe width="560" height="315" src="https://www.youtube.com/embed/UPBNq9tH-lk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                ))}
              </div>
            </div>
            <div className=" md:pr-4 pr-0 md:w-3/5 w-full mx-auto flex-row-reverse ">
              <div className="flex flex-col pl-4 items-center justify-center">
                <h3 className="lg:text-3xl sm:text-2xl text-lg  font-semibold ">
                  Phone Store isn’t a typical mobile e-commerce site, but it’s a
                  nice example of how you can offer.
                </h3>
                <p className="md:text-lg text-md  text-black">
                  Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos
                  etiam regione ut, persius eripuit quo id. Sit te euismod
                  tacimates.
                </p>
              </div>
              <div className=" md:mt-4 mt-2  lg:space-y-4 md:space-y-3 space-y-2">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="">
                    <h4 className="text-lg font-medium leading-6 text-black">
                      Per ei quaeque sensibus
                    </h4>
                    <p className=" text-black">
                      Ex usu illum iudico molestie. Pro ne agam facete
                      mediocritatem, ridens labore facete mea ei. Pro id
                      apeirian dignissim.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="">
                    <h4 className="text-lg font-medium ">
                      Cu imperdiet posidonium sed
                    </h4>
                    <p className="">
                      Amet utinam aliquando ut mea, malis admodum ocurreret nec
                      et, elit tibique cu nec. Nec ex maluisset inciderint, ex
                      quis.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="">
                    <h4 className="text-lg font-medium leading-6">
                      Nulla omittam sadipscing mel ne
                    </h4>
                    <p className="">
                      At sed possim oporteat probatus, justo graece ne nec,
                      minim commodo legimus ut vix. Ut eos iudico quando soleat,
                      nam modus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneReviews;
