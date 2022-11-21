import { CalendarIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../Button/PrimaryButton";

const SearchForm = () => {
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [deparatureDate, setDeparatureDate] = useState(
    new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000)
  );
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleOnSelect = (date) => {
    console.log(date);
  };

  const handleSearch = (data) => {
    const searchResult = {
      location: data.location,
      from: arrivalDate,
      to: deparatureDate,
    };

    navigate("/search-result", { state: searchResult });
  };

  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto">
      <h1 className="text-xl font-semibold text-gray-700">
        Where do you want to go
      </h1>

      <form onSubmit={handleSubmit(handleSearch)} className="mt-6">
        <div className="shadow-md rounded-md my-2 p-3">
          <label
            htmlFor="location"
            className="block text-md font-bold text-gray-800"
          >
            Location
          </label>
          <input
            {...register("location")}
            type="text"
            name="location"
            required
            placeholder="Add city, Landmark or address"
            className="block w-full mt-1 p-1 text-gray-700 bg-white   focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="flex justify-between">
          <div className="shadow-md rounded-md my-2 p-3 flex justify-between items-center">
            <div>
              <p className="block text-sm text-gray-500">Arrival</p>
              <DatePicker
                selected={arrivalDate}
                onChange={(date) => {
                  if (!(date <= new Date())) {
                    return setArrivalDate(date);
                  }

                  setArrivalDate(new Date());
                }}
                className="w-2/3"
                // onSelect={(date) => handleOnSelect(date)}
              />
            </div>

            <CalendarIcon className="h5 w-5" />
          </div>
          <div className="shadow-md rounded-md my-2 p-3 flex justify-between items-center">
            <div>
              <p className="block text-sm text-gray-500">Departure</p>
              <DatePicker
                selected={deparatureDate}
                onChange={(date) => {
                  if (date > arrivalDate) {
                    setDeparatureDate(date);
                  }
                }}
                className="w-2/3"
              />
            </div>

            <CalendarIcon className="h5 w-5" />
          </div>
        </div>

        <div className="mt-6">
          <PrimaryButton
            type="submit"
            classes="w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md"
          >
            Search
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
