// import { useState } from "react";
// import toast from "react-hot-toast";

// const useImage = (image) => {
//   const [imageUrl, setImageUrl] = useState("");

//   const formData = new FormData();
//   formData.append("image", image);

//   const url = `https://api.imgbb.com/1/upload?key=e8c4e4cfbeff56e7bd4a945ac21f3c68`;

//   const loadImage = async () => {
//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         body: formData,
//       });

//       const {
//         data: { display_url },
//       } = await response.json();
//       //   console.log("display_url");

//       setImageUrl(display_url);
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   loadImage();

//   return { imageUrl };
// };

// export default useImage;
