import axios from "axios";

interface UpdateProductData {
  name?: string;
  brand?: string;
  model?: string;
  year?: string;
  price?: string;
  discountPercentage?: string;
  discountedPrice?: string;
  category?: string;
  colors?: string;
  stock?: string;
  condition?: string;
  image?: string;
  gallery?: string[];
  description?: string;
  fuelType?: string;
  gearbox?: string;
  seats?: string;
  isAvailable?: boolean;
}

export const updateProduct = async (id: string, data: UpdateProductData) => {
  const token = localStorage.getItem("adminAccessToken");

  const response = await axios.post(
    `/api/proxy?url=/api/records/products/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};