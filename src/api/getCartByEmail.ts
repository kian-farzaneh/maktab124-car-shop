import axios from "axios";

export async function getCartByEmail(email: string) {
  try {
    const response = await axios.get(
      `/api/proxy?url=/api/records/carts?filterValue=${email}&filterKey=user`
    );
    return response.data.records;
  } catch (err) {
    console.log(err);
  }
}
