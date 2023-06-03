import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Typewriter from "typewriter-effect";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      loop: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="flex flex-col justify-center px-4 mt-10">
        <h2 className="lg:text-4xl sm:text-2xl text-xl text-center font-bold text-black sm:mb-10 mb-6">
          <Typewriter
            options={{
              strings: ["Discover Samsung Event Offers"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <Slider {...settings}>
          <div className="">
            <img
              className=" w-full sm:h-96 rounded-lg h-64"
              src="https://i.ibb.co/w7R9MYr/870-8706206-samsung-mobile-banner-1-samsung-galaxy.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-full sm:h-96 rounded-lg h-64"
              src="https://i.ibb.co/5rc9K28/eabdaadef69a169117a2900e77bfde9f.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-full sm:h-96 rounded-lg h-64"
              src="https://i.ibb.co/y54MBN0/images-q-tbn-ANd9-Gc-SEXX6-GDRu-K00-Jj5-Rm-VQSq-Lmhu-NSbwqo-Vh12l-MRQYFt-UNBxi-U5yav-LMu-2-F1-GYp-Ii.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-full sm:h-96 rounded-lg h-64"
              src="https://i.ibb.co/qMZmskc/65d97454319437-59714e95873e4.gif"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-full sm:h-96 rounded-lg h-64"
              src="https://i.ibb.co/cT6qMXF/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-full sm:h-96 rounded-lg h-64"
              src="https://i.ibb.co/5rc9K28/eabdaadef69a169117a2900e77bfde9f.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
