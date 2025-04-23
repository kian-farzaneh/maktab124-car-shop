import axios from "axios";

export const getProductsByBrand = (brandName:string) => {
  const response = axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/records/products?filterValue=${brandName}&filterKey=brand`,
    {
      headers: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        Authorization: `Bearer ${localStorage.getItem('adminAccessToken')}`,
      },
    }
  );
  return response;
};
