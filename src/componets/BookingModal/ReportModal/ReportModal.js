import React, { useContext } from "react";
import { AuthContext } from "../../Routes/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { HiExclamationCircle, IconName } from "react-icons/hi2";

const ReportModal = ({ category, refetch, setBooking }) => {
  const {
    price,
    resalePrice,
    used_of_year,
    name,
    img,
    _id,
    description,
    ratings,
    release,
    location,
  } = category;
  const { user } = useContext(AuthContext);

  const handleReport = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const report = {
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
      reportId: _id,
    };

    fetch("https://assignment-12-server-lac.vercel.app/reports", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(report),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setBooking(null);
          toast.success("Your Report is Confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="report-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="report-modal"
            className="absolute top-1 right-2 md:text-3xl animate-pulse sm:text-xl text-md bg-red-100 px-2 hover:bg-red-600 hover:text-white rounded-full"
          >
            {" "}
            X
          </label>
          <div className="">
            <div className="flex items-center justify-center">
              <img
                className="lg:w-60 sm:w-40 w-20 rounded-lg"
                src={img}
                alt=""
              />
            </div>
            <div className="flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full">
                <div className="">
                  <form onSubmit={handleReport}>
                    <div>
                      <p className="text-left pl-4 text-md font-semibold">
                        Brand Model
                      </p>
                      <input
                        name="name"
                        type="text"
                        placeholder="Type here"
                        defaultValue={name}
                        className="border md:py-2 py-1 pl-4 text-md rounded-lg w-full "
                      />
                    </div>
                    <div>
                      <p className="text-left pl-4 text-md font-semibold">
                        Original Price
                      </p>
                      <input
                        name="price"
                        type="text"
                        placeholder="Type here"
                        defaultValue={price}
                        className="border md:py-2 py-1 pl-4 text-md rounded-lg w-full"
                      />
                    </div>
                    <p className="text-left pl-4 text-md font-semibold">
                      Reseller Price
                    </p>
                    <input
                      name="resalePrice"
                      type="text"
                      placeholder="Type here"
                      defaultValue={resalePrice}
                      className="border md:py-2 py-1 pl-4 text-md rounded-lg w-full"
                    />
                    <p className="text-left pl-4 text-md font-semibold">
                      Used Product
                    </p>
                    <input
                      name="used"
                      type="text"
                      placeholder="Type year"
                      defaultValue={`${used_of_year} year`}
                      className="border md:py-2 py-1 pl-4 text-md rounded-lg w-full"
                    />
                    <p className="text-left pl-4 text-md font-semibold">Name</p>
                    <input
                      name="email"
                      type="text"
                      placeholder="Type Name"
                      defaultValue={user?.displayName}
                      readOnly
                      className="border md:py-2 py-1 pl-4 text-md rounded-lg w-full"
                    />
                    <p className="text-left pl-4 text-md font-semibold">
                      Email
                    </p>
                    <input
                      name="email"
                      type="email"
                      placeholder="Type Email"
                      defaultValue={user?.email}
                      readOnly
                      className="border md:py-2 py-1 pl-4 text-md rounded-lg w-full"
                    />
                    <div className="modal-action">
                      <button className="flex items-center gap-x-1 justify-center bg-sky-500 px-4 py-2 rounded-lg w-full font-serif text-lg hover:bg-green-500">
                        Confirm Report
                        <HiExclamationCircle />
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

export default ReportModal;
