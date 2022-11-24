import React from 'react';
import phone1 from '../../Assets/mobile phone/phone1.webp'
import phone2 from '../../Assets/mobile phone/phone2.webp'
import phone3 from '../../Assets/mobile phone/phone3.jpeg'
import phone4 from '../../Assets/mobile phone/phone4.jpeg'
import phone5 from '../../Assets/mobile phone/phone5.webp'

const Banner = () => {
    return (
        <section className="py-3   dark:text-gray-50">
            <div className="container shadow-lg grid grid-cols-2 gap-2 p-2 mx-auto md:grid-cols-4">
                <img src={phone4} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={phone1} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={phone2} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={phone3} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={phone5} />
                
            </div>
        </section>
    );
};

export default Banner;