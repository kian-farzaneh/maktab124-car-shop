import axios from "axios";

export async function getCartByEmail(email: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/records/carts?filterValue=${email}&filterKey=user`,
      { headers: { api_key: process.env.NEXT_PUBLIC_API_KEY } }
    );
    return response.data.records;
  } catch (err) {
    console.log(err);
  }
}
