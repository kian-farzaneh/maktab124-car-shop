import axios from "axios";

const addProduct = async (productData: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/records/products`,
    productData,
    {
      headers: {
        "Content-Type": "application/json",
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        Authorization: `Bearer ${localStorage.getItem("adminAccessToken")}`,
      },
    }
  );

  return response.data;
};

export default addProduct;
