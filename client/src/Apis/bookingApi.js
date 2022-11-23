// ** Save booking data to server
export const saveBooking = async (bookingData) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_url}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await response.json();
    if (data?.success) {
      return data?.data;
    }
  } catch (error) {
    console.log(error.message);
  }
};

// ** Get booking data according to email

export const getBooking = async (email) => {
  console.log(email);
  const url = `${process.env.REACT_APP_url}/bookings?email=${email}`;
  console.log(url);
  try {
    let response;
    if (email) {
      response = await fetch(
        `${process.env.REACT_APP_url}/bookings?email=${email}`
      );
    } else {
      response = await fetch(`${process.env.REACT_APP_url}/bookings`);
    }

    const data = await response.json();
    if (data?.success) {
      console.log(data.data);
      return data?.data;
    }
  } catch (error) {
    console.log(error.message);
  }
};

// ** get all bookings as admin

export const getAllBookings = async (email) => {
  console.log(email);
  const url = `${process.env.REACT_APP_url}/allbookings?email=${email}`;
  console.log(url);
  try {
    const response = await fetch(`${process.env.REACT_APP_url}/bookings`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await response.json();
    if (data?.success) {
      console.log(data.data);
      return data?.data;
    }
  } catch (error) {
    console.log(error.message);
  }
};
