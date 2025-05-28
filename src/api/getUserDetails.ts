import axios from "axios";

export const getUserDetails = async () => {
  const token = localStorage.getItem("userAccessToken");
  try {
    const response = await axios.get(`/api/proxy?url=/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
