import axios from "axios";

export async function addProductToCart(
  user: any,
  selectedColor: string | null,
  quantity: number,
  productId: number,
  name: string,
  isAvailable: boolean,
  image: string,
  discountedPrice: string
) {
  try {
    const response = await axios.post(
      `/api/proxy?url=/api/records/carts`,
      {
        user,
        selectedColor,
        quantity,
        productId,
        name,
        isAvailable,
        image,
        discountedPrice,
      }
    );
    return response.data;
  } catch {
    (err: any) => console.error(err);
  }
}
