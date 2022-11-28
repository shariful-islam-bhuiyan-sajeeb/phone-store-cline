import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import UseTitle from '../Hook/UseTitle/UseTitle';
import { AuthContext } from '../Routes/AuthProvider/AuthProvider';

const BookingModal = ({ category, booking, setBooking, refetch }) => {
    const { price, resalePrice, used_of_year, name, img, description, ratings, release, location } = category;
    const { user } = useContext(AuthContext)
    // console.log(user?.email);
    UseTitle('Booking modal')

    const bookingNow = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        
        const booking ={
            brandName:name,
            originalPrice: price,
            resellerPrice: resalePrice,
            usedProduct: used_of_year,
            name: user?.displayName,
            img,
            description,
            location,
            email: user?.email,
            ratings,
            release
        
        }

        console.log(booking);

        fetch('https://assignment-12-server-lac.vercel.app/bookings', {
            method : 'POST',
            headers:{
                'content-type':'application/json'
            },
           body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.acknowledged){
                setBooking(null)
                toast.success('Your Booking is Confirmed')
                refetch();
            }
            else{
                toast.error(data.message)
            }
           
        })

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
                                    <form onSubmit={bookingNow}>
                                        <p className='p-2'>Brand Model</p>
                                        <input name='name' type="text" placeholder="Type here" value={name} className="input input-bordered input-primary w-full max-w-xs" />
                                        <p className='mt-4'>Original Price</p>
                                        <input name='price' type="text" placeholder="Type here" value={price} className="input input-bordered mt-2 input-primary w-full max-w-xs" />
                                        <p className='mt-4'>Reseller Price</p>
                                        <input name='resalePrice' type="text" placeholder="Type here" value={resalePrice} className="input input-bordered mt-2 input-primary w-full max-w-xs" />
                                        <p className='mt-4'>Used Product</p>
                                        <input name='used' type="text" placeholder="Type year" value={`${used_of_year} year`}  className="input input-bordered mt-2 input-primary w-full max-w-xs" />
                                        <p className='mt-4'>Name</p>
                                        <input name='email' type="text" placeholder="Type Name" value={user?.displayName} readOnly className="input input-bordered mt-2 input-primary w-full max-w-xs" />
                                        <p className='mt-4'>Email</p>
                                        <input name='email' type="email" placeholder="Type Email" value={user?.email} readOnly className="input input-bordered mt-2 input-primary w-full max-w-xs" />
                                        <div className="modal-action flex justify-between">
                                            <button  className='btn btn-primary'>Book Now</button>
                                            <label htmlFor="confirmation-modal" className="btn bg-orange-700">Cancel</label>
                                        </div>
                                    </form>
                                   
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