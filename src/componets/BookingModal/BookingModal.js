import React, { useContext } from "react";
import toast from "react-hot-toast";
import UseTitle from "../Hook/UseTitle/UseTitle";
import { AuthContext } from "../Routes/AuthProvider/AuthProvider";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const BookingModal = ({ category, booking, setBooking, refetch }) => {
  const {
    price,
    resalePrice,
    used_of_year,
    name,
    img,
    description,
    ratings,
    release,
    location,
  } = category;
  const { user } = useContext(AuthContext);
  // console.log(user?.email);
  UseTitle("Booking modal");

  const bookingNow = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;

    const booking = {
      brandName: name,
      originalPrice: price,
      resellerPrice: resalePrice,
      usedProduct: used_of_year,
      name: user?.displayName,
      img,
      description,
      location,
      email: user?.email,
      ratings,
      release,
    };

    console.log(booking);

    fetch("https://assignment-12-server-lac.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setBooking(null);
          toast.success("Your Booking is Confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-xl bg-gray-200 relative">
          <div>
            <label
              htmlFor="confirmation-modal"
              className=" absolute top-1 right-2 md:text-3xl animate-pulse sm:text-xl text-md bg-red-100 px-2 hover:bg-red-600 hover:text-white rounded-full"
            >
              X
            </label>
          </div>
          <div className="">
            <div className="flex items-center justify-center ">
              <img
                className="lg:w-60 sm:w-32 w-20 rounded-lg"
                src={img}
                alt=""
              />
            </div>
            <div className="flex-col ">
              <div className="card flex-shrink-0 w-full  ">
                <div className="font-serif ">
                  <form className="space-y-2" onSubmit={bookingNow}>
                    <div className="">
                      <p className="text-left pl-4 text-md font-semibold">
                        Brand Model
                      </p>
                      <input
                        name="name"
                        type="text"
                        placeholder="Type here"
                        value={name}
                        className="border md:py-2 py-1 pl-4 text-md rounded-lg w-full "
                      />
                    </div>
                    <div>
                      <p className="text-left pl-4  text-md font-semibold">
                        Original Price
                      </p>
                      <input
                        name="price"
                        type="text"
                        placeholder="Type here"
                        value={price}
                        className="border md:py-2 py-1 pl-4  rounded-lg w-full"
                      />
                    </div>
                    <div>
                      <p className="text-left pl-4  text-md font-semibold">
                        Reseller Price
                      </p>
                      <input
                        name="resalePrice"
                        type="text"
                        placeholder="Type here"
                        value={resalePrice}
                        className="border md:py-2 py-1 pl-4  rounded-lg w-full"
                      />
                    </div>
                    <div>
                      <p className="text-left pl-4  text-md font-semibold">
                        Used Product
                      </p>
                      <input
                        name="used"
                        type="text"
                        placeholder="Type year"
                        value={`${used_of_year} year`}
                        className="border md:py-2 py-1 pl-4  rounded-lg w-full"
                      />
                    </div>
                    <div>
                      <p className="text-left pl-4  text-md font-semibold">
                        Name
                      </p>
                      <input
                        name="email"
                        type="text"
                        placeholder="Type Name"
                        value={user?.displayName}
                        readOnly
                        className="border md:py-2 py-1 pl-4   rounded-lg w-full"
                      />
                    </div>
                    <div>
                      <p className="text-left pl-4  text-md font-semibold">
                        Email
                      </p>
                      <input
                        name="email"
                        type="email"
                        placeholder="Type Email"
                        value={user?.email}
                        readOnly
                        className="border md:py-2 py-1 pl-4  rounded-lg w-full"
                      />
                    </div>
                    <div className="modal-action flex justify-between">
                      <button className=" flex items-center gap-x-2 justify-center bg-sky-500 px-4 py-2 rounded-lg w-full font-serif text-lg hover:bg-green-500">
                        <HiArrowTopRightOnSquare />
                        Confirm Booking
                      </button>
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
