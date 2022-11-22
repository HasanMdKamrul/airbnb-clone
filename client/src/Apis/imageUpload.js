export const imageUpload = async (imageData) => {
  try {
    const formData = new FormData();
    formData.append("image", imageData);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_image_key}`;
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data?.data?.url);
    return data?.data?.url;
  } catch (error) {
    console.log(error.message);
  }
};
