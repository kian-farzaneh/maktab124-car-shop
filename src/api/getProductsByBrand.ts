import axios from "axios";

export const getProductsByBrand = (brandName: string) => {
  const response = axios.get(
    `/api/proxy?url=/api/records/products?filterValue=${brandName}&filterKey=brand`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminAccessToken')}`,
      },
    }
  );
  return response;
};
