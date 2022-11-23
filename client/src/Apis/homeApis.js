// ** add a home to db

import toast from "react-hot-toast";

export const addHome = async (homeData) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_url}/homes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(homeData),
    });
    const data = await response.json();
    data.success && toast.success("Home added");
  } catch (error) {
    console.log(error.message);
  }
};
