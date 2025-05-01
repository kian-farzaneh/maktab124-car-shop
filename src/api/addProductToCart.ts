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
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/records/carts`,
      {
        user,
        selectedColor,
        quantity,
        productId,
        name,
        isAvailable,
        image,
        discountedPrice
      },
      {
        headers: {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
        },
      }
    );
    return response.data;
  } catch {
    (err: any) => console.error(err);
  }
}
