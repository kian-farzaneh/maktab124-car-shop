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

  const response = await axios.post(
    `/api/proxy?url=/api/users/register`,
    body
  );

  return response.data.accessToken;
};
