import axios from "axios";

export const getUser = async () => {
  const token = localStorage.getItem("userAccessToken");
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/me`,
    {
      headers: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.email;
};
