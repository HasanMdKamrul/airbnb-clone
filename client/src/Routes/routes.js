import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MyBookings from "../Components/Dashboard/MyBookings";
import Welcome from "../Components/Dashboard/Welcome";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddHomes from "../Pages/AddHomes/AddHomes";
import AllBookings from "../Pages/AllBookings/AllBookings";
import AllUsers from "../Pages/AllUsers/AllUsers";
import Checkout from "../Pages/Checkout";
import BecomeAHost from "../Pages/Dashboard/Sidebar/BecomeAHost";
import Details from "../Pages/Details";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import ManageHomes from "../Pages/ManageHomes/ManageHomes";
import SearchResult from "../Pages/SearchResult";
import ComingSoon from "../Pages/Shared/ComingSoon";
import ErrorPage from "../Pages/Shared/ErrorPage";
import AdminRoute from "./AdminRoute";
import HostRoute from "./HostRoute";
import PrivateRoute from "./PrivateRoute";

// ** private route sppiner loading

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/service-details",
        element: <Details />,
      },
      {
        path: "/search-result",
        element: <SearchResult />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            {" "}
            <Welcome />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-bookings",
        element: (
          <PrivateRoute>
            {" "}
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/become-host",
        element: (
          <PrivateRoute>
            {" "}
            <BecomeAHost />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            {" "}
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-bookings",
        element: (
          <AdminRoute>
            {" "}
            <AllBookings />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-home",
        element: (
          <HostRoute>
            {" "}
            <AddHomes />
          </HostRoute>
        ),
      },
      {
        path: "/dashboard/manage-homes",
        element: (
          <HostRoute>
            {" "}
            <ManageHomes />
          </HostRoute>
        ),
      },
    ],
  },
]);

export default router;
