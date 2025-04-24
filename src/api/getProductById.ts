import axios from "axios";

export const getProuductById = async (id:number) => {
  const response = await axios(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/records/products/${id}`,
    {
      headers: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        Authorization: `Bearer ${localStorage.getItem("adminAccessToken")}`,
      },
    }
  );
  return response.data
};
