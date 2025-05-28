import axios from "axios";

interface OrderData {
  userData: any;
  cartData: any[];
  totalPrice: number;
}

export async function postOrder(orderData: OrderData) {
  try {
    const response = await axios.post(
      `/api/proxy?url=/api/records/orders`,
      { ...orderData, isDelivered: false },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userAccessToken")}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
