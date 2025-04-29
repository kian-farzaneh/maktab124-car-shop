import axios from "axios";

export const signUpUser = async ({
  name,
  lastName,
  phoneNumber,
  email,
  password,
  address,
}: {
  name: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  password: string;
  address: string;
}) => {
  const body = {
    name,
    lastName,
    phoneNumber,
    email,
    password,
    address,
  };

  const header = {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
  };

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/register`,
    body,
    { headers: header }
  );

  return response.data.accessToken;
};
