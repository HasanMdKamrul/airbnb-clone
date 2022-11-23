import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { getAllBookings } from "../../Apis/bookingApi";
import { AuthContext } from "../../contexts/AuthProvider";

const AllBookings = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      try {
        const data = await getAllBookings(user?.email);
        return data;
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Location</th>
            <th>Price</th>
            <th>From </th>
            <th>To </th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking?._id}>
              <th>
                <div className="avatar">
                  <div className="w-12 rounded">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
              </th>
              <td>{booking?.guestEmail}</td>
              <td>{booking?.location}</td>
              <td>${booking?.totalPrice}</td>
              <td>11/12/22</td>
              <td>23/12/24</td>
              <td>
                <button className="btn btn-ghost btn-sm">cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBookings;
