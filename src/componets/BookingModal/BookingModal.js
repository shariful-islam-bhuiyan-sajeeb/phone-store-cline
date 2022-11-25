import React from 'react';

const BookingModal = ({ category }) => {
    const { price, resalePrice, used_of_year, name, img, description, ratings, release, location } = category;
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="">
                        <div>
                            <img className='w-48 text-center' src={img} alt="" />
                        </div>
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                                <div className="card-body ">
                                    <div className="">
                                        <p className='input input-bordered text-center font-bold text-2xl input-primary w-full'> Brand: {name}</p>
                                        <p className='input input-bordered text-center font-semibold text-xl input-primary w-full mt-4 pt-2'> Original Price: {price}</p>
                                        <p className='input input-bordered text-center font-semibold text-xl input-primary w-full mt-4 pt-2'> Sell Price: {resalePrice}</p>
                                        <p className='input input-bordered text-center font-semibold text-xl input-primary w-full mt-4 pt-2'> Used: {used_of_year}</p>
                                        <p className='input input-bordered text-center font-semibold text-xl input-primary w-full mt-4 pt-2'> Market Release: {release}</p>
                                    </div>
                                    <p>Description- {description.slice(0,100)} </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="py-4">{}</p>
                    <div className="modal-action flex justify-between">
                        <button  className='btn btn-primary'>Booking</button>
                        <label htmlFor="confirmation-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;