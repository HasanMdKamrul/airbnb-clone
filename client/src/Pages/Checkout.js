import { Tab } from "@headlessui/react";
import React, { Fragment, useContext, useState } from "react";
import toast from "react-hot-toast";
import { saveBooking } from "../Apis/bookingApi";
import CheckoutCart from "../Components/CheckoutCart";
import Payment from "../Components/Payment";
import ReviewHouse from "../Components/ReviewHouse";
import WhosComing from "../Components/WhosComing";
import { AuthContext } from "../contexts/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const homeData = {
    _id: "60ehjhedhjdj3434",
    location: "Dhaka, Bangladesh",
    title: "Huge Apartment with 4 bedrooms",
    image: "https://i.ibb.co/YPXktqs/Home1.jpg",
    from: "17/11/2022",
    to: "21/11/2022",
    host: {
      name: "John Doe",
      image: "https://i.ibb.co/6JM5VJF/photo-1633332755192-727a05c4013d.jpg",
      email: "johndoe@gmail.com",
    },
    price: 98,
    total_guest: 4,
    bedrooms: 2,
    bathrooms: 2,
    ratings: 4.8,
    reviews: 64,
  };

  const homeBookingData = {
    homeId: homeData._id,
    hostEmail: homeData.host.email,
    location: homeData.location,
    totalPrice: parseFloat(homeData.price) + 31,
    message: "",
    guestEmail: user.email,
  };

  const [bookingData, setBookingData] = useState(homeBookingData);

  console.log(user?.email);
  console.log(homeBookingData);

  const handleBooking = async () => {
    try {
      await saveBooking(bookingData);
      toast.success("Booking Confirmed");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleTextArea = (event) => {
    setBookingData({ ...bookingData, message: event.target.value });
  };

  return (
    <div className="flex md:px-24 my-24">
      <div className="flex-1">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
          defaultIndex={0}
        >
          <Tab.List>
            <div className="flex">
              <div className="flex">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? "text-blue-500 " : "bg-white text-black"
                      }
                    >
                      Review house
                    </button>
                  )}
                </Tab>
                <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? "text-blue-500" : "bg-white text-black"
                      }
                    >
                      Who's Comming
                    </button>
                  )}
                </Tab>
                <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? "text-blue-500 " : "bg-white text-black"
                      }
                    >
                      Payment
                    </button>
                  )}
                </Tab>
              </div>
            </div>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <ReviewHouse setSelectedIndex={setSelectedIndex} />
            </Tab.Panel>
            <Tab.Panel>
              <WhosComing
                bookingData={bookingData}
                handleTextArea={handleTextArea}
                setSelectedIndex={setSelectedIndex}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Payment handleBooking={handleBooking} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <CheckoutCart />
    </div>
  );
};

export default Checkout;
