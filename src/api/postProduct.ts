import axios from "axios";

const postProduct = async (productData: any) => {
  const response = await axios.post(
    `/api/proxy?url=/api/records/products`,
    productData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("adminAccessToken")}`,
      },
    }
  );

  return response.data;
};

export default postProduct;
