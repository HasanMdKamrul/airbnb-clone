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
