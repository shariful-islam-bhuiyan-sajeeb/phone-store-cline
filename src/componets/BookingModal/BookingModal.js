import React, { useContext } from 'react';
import { AuthContext } from '../Routes/AuthProvider/AuthProvider';

const BookingModal = ({ category }) => {
    const { price, resalePrice, used_of_year, name, img, description, ratings, release, location } = category;
    const { user } = useContext(AuthContext)
    console.log(user);

    const bookingNow = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        
    }

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
                                    <div>
                                        <p className='p-2'>Brand Model</p>
                                        <input name='name' type="text" placeholder="Type here" defaultValue={name} className="input input-bordered input-primary w-full max-w-xs" />
                                        <p className='mt-4'>Original Price</p>
                                        <input name='price' type="text" placeholder="Type here" defaultValue={price} className="input input-bordered mt-2 input-primary w-full max-w-xs" />
                                        <p className='mt-4'>Reseller Price</p>
                                        <input name='resalePrice' type="text" placeholder="Type here" defaultValue={resalePrice} className="input input-bordered mt-2 input-primary w-full max-w-xs" />
                                        <p className='mt-4'>Used Product</p>
                                        <input name='used' type="text" placeholder="Type here" defaultValue={used_of_year} className="input input-bordered mt-2 input-primary w-full max-w-xs" />
                                        <p className='mt-4'>Name</p>
                                        <input name='email' type="text" placeholder="Type Name" defaultValue={user?.displayName} readOnly className="input input-bordered mt-2 input-primary w-full max-w-xs" />
                                        <p className='mt-4'>Email</p>
                                        <input name='email' type="email" placeholder="Type Email" defaultValue={user?.email} readOnly className="input input-bordered mt-2 input-primary w-full max-w-xs" />
                                        

                                    </div>
                                    <p>Description- {description.slice(0, 100)} </p>
                                    <div className="modal-action flex justify-between">
                                        <button className='btn btn-primary'>Book Now</button>
                                        <label htmlFor="confirmation-modal" className="btn">Cancel</label>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;