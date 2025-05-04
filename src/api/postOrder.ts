import axios from "axios";

interface OrderData {
  userData: any;
  cartData: any[];
  totalPrice: number;
}

export async function postOrder(orderData: OrderData) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/records/orders`,
      { ...orderData, isDelivered: false },
      {
        headers: {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          Authorization: `Bearer ${localStorage.getItem("userAccessToken")}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
