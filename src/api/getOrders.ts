import axios from "axios";

export async function getOrders() {
  try {
    const response = await axios.get(`/api/proxy?url=/api/records/orders`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
