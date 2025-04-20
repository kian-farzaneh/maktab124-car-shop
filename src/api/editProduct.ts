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
  

export const updateProduct = async (id: string , data: UpdateProductData) => {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/records/products/${id}`,data,{headers:{
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        Authorization: `Bearer ${localStorage.getItem('adminAccessToken')}`
    }})
    return response.data
}