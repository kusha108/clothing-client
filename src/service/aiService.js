
// import axios from "axios";

// export const analyzeImage = async (file, gender) => {
//   const formData = new FormData();

//   //  FIX 1: backend expects "file"
//   formData.append("file", file);

//   //  FIX 2: send gender
//   formData.append("gender", gender);

//   const res = await axios.post(
//     "https://clothing-server-tpsh.onrender.com/api/ai/analyze",
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

  formData.append("file", file);
  formData.append("gender", gender);

  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://clothing-server-tpsh.onrender.com/api/ai/analyze"
      : "http://localhost:8000/api/ai/analyze";

  const res = await axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};