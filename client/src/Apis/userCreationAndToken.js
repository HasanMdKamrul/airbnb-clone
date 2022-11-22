// ** Save the new user in db and get token from db and save to ls

export const saveUserAndTokenGenerate = async (userData) => {
  try {
    console.log(userData);
    const currentUser = {
      email: userData?.email,
    };

    const response = await fetch(`http://localhost:8000/users`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      // ** token generate now

      const response = await fetch(
        `http://localhost:8000/jwt?email=${userData?.email}`
      );

      const tokenData = await response.json();
      if (tokenData.success) {
        localStorage.setItem("token", tokenData.token);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

// ** Update user role when user request to become a hos -> requested -> host

export const updateRoleData = async (hostData) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_url}/users`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(hostData),
    });
    const data = await response.json();
    if (data?.success) {
      return data?.data;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserRole = async (email) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_url}/users?email=${email}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
