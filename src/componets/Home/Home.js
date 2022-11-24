import React from 'react';
import AdvertiseMobileLogo from './AdvertiseMobileLogo/AdvertiseMobileLogo';
import Banner from './Banner/Banner';
import PhoneReviews from './PhoneReviews/PhoneReviews';
import PhoneStoresCardes from './PhoneStoresCardes/PhoneStoresCardes';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PhoneStoresCardes></PhoneStoresCardes>
            <PhoneReviews></PhoneReviews>
           <AdvertiseMobileLogo></AdvertiseMobileLogo>
            
        </div>
    );
};

export default Home;