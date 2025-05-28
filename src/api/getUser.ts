import axios from "axios";

export const getUser = async () => {
  const token = localStorage.getItem("userAccessToken");
  const response = await axios.get(
    `/api/proxy?url=/api/users/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.email;
};

