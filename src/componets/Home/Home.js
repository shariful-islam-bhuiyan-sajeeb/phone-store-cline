import React from "react";
import UseTitle from "../Hook/UseTitle/UseTitle";
import AdvertiseMobileLogo from "./AdvertiseMobileLogo/AdvertiseMobileLogo";
import Banner from "./Banner/Banner";
import PhoneReviews from "./PhoneReviews/PhoneReviews";
import PhoneStoresCardes from "./PhoneStoresCardes/PhoneStoresCardes";
import CarouselBanner from "./ServiceCenter/CarouselBanner";
import WhySell from "./ServiceCenter/WhySell";

const Home = () => {
  UseTitle("Home");
  return (
    <div className="max-w-[1440px] mx-auto ">
      {/* <Banner></Banner> */}
      <CarouselBanner />
      <WhySell />
      <PhoneStoresCardes></PhoneStoresCardes>
      <PhoneReviews></PhoneReviews>
      <AdvertiseMobileLogo></AdvertiseMobileLogo>
    </div>
  );
};

export default Home;
