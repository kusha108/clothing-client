// import axios from "axios";

// export const analyzeImage = async (file) => {
//   const formData = new FormData();
//   formData.append("image", file);

//   const res = await axios.post(
//     "http://localhost:8000/api/ai/analyze",
//     formData,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     }
//   );

//   return res.data;
// };



import axios from "axios";

export const analyzeImage = async (file, gender) => {
  const formData = new FormData();

  // 🔥 FIX 1: backend expects "file"
  formData.append("file", file);

  // 🔥 FIX 2: send gender
  formData.append("gender", gender);

  const res = await axios.post(
    "http://localhost:8000/api/ai/analyze",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};