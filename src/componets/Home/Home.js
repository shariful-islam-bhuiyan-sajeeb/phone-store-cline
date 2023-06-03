import React from "react";
import UseTitle from "../Hook/UseTitle/UseTitle";
import AdvertiseMobileLogo from "./AdvertiseMobileLogo/AdvertiseMobileLogo";
import PhoneReviews from "./PhoneReviews/PhoneReviews";
import PhoneStoresCardes from "./PhoneStoresCardes/PhoneStoresCardes";
import CarouselBanner from "./ServiceCenter/CarouselBanner";
import WhySell from "./ServiceCenter/WhySell";
import ShowMobilePhones from "./ShowMobilePhones/ShowMobilePhones";
import DiscountPurches from "./ShowMobilePhones/DiscountPurches";
import FeaturedDeals from "./Featured Deals/FeaturedDeals";
import OurTeam from "./Our Team/OurTeam";
import TvAudio from "./TV & Audio/TvAudio";

const Home = () => {
  UseTitle("Home");
  return (
    <div className="max-w-[1440px] mx-auto ">
      {/* <Banner></Banner> */}
      <CarouselBanner />
      <WhySell />
      <PhoneStoresCardes></PhoneStoresCardes>
      <ShowMobilePhones />
      <DiscountPurches />
      <FeaturedDeals />
      <TvAudio />
      <PhoneReviews></PhoneReviews>
      <OurTeam />
      <AdvertiseMobileLogo></AdvertiseMobileLogo>
    </div>
  );
};

export default Home;
