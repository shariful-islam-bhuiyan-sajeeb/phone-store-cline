import React from 'react';

const BookingModal = ({ category }) => {
    const { price, resalePrice, used_of_year, name, img, description, ratings, release, location } = category;
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">{}</p>
                    <div className="modal-action">
                        <label  htmlFor="confirmation-modal" className="btn">Delete</label>
                        <button  className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;