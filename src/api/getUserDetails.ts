import axios from "axios";

const token = localStorage.getItem("userAccessToken");

export const getUserDetails = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/me`,
      {
        headers: {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
