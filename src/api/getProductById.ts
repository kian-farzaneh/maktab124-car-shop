import axios from "axios";

export const getProuductById = async (id: number) => {
  const response = await axios(
    `/api/proxy?url=/api/records/products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminAccessToken")}`,
      },
    }
  );
  return response.data;
};
