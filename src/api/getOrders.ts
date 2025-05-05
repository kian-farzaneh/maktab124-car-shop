import axios from "axios";

export async function getOrders() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/records/orders`,
      { headers: { api_key: process.env.NEXT_PUBLIC_API_KEY } }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
