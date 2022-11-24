import React from 'react';
import iPhone from '../../Assets/mobile logo/i phone.png'
import mi from '../../Assets/mobile logo/mi.png'
import samsung from '../../Assets/mobile logo/samsung.png'
import sony from '../../Assets/mobile logo/sony.png'
import htc from '../../Assets/mobile logo/HTC.png'
import nokia from '../../Assets/mobile logo/nokia png.png'
import realme from '../../Assets/mobile logo/Realme.png'
import walton from '../../Assets/mobile logo/walton.png'

const AdvertiseMobileLogo = () => {
    return (
        <section className="p-6 mt-10 dark:text-black">
            <div className="container p-4 mb-10 mx-auto text-center">
                <h2 className="text-4xl font-bold">Trusted by the Our <span className='text-green-500 text-5xl font-bold'> Phone Store</span> Different <br /> Mobile models <span className='text-green-500 text-5xl'>Advertise</span> </h2>
            </div>
            <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className='w-36' src={iPhone} alt="" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className='w-40' src={mi} alt="" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                   <img className='' src={samsung} alt="" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                   <img className='w-40' src={sony} alt="" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                   <img className='w-44' src={htc} alt="" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                   <img className='w-44' src={nokia} alt="" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                   <img className='w-44' src={realme} alt="" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className='w-44' src={walton} alt="" />
                </div>
            </div>
        </section>
    );
};

export default AdvertiseMobileLogo;