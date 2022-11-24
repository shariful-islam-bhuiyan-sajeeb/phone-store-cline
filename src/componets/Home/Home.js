import React from 'react';
import AdvertiseMobileLogo from './AdvertiseMobileLogo/AdvertiseMobileLogo';
import Banner from './Banner/Banner';
import PhoneReviews from './PhoneReviews/PhoneReviews';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <PhoneReviews></PhoneReviews>
           <AdvertiseMobileLogo></AdvertiseMobileLogo>
            
        </div>
    );
};

export default Home;