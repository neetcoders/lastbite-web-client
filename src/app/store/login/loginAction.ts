"use server";

import axios from "axios";
import { cookies } from "next/headers";

interface IuserDataLogin {
  email: string;
  password: string;
}

export default async function loginAction(userDataLogin: IuserDataLogin) {
  const url = "http://localhost:8000/api/v1/store/login";

  try {
    const response = await axios.post(url, userDataLogin);
    const authToken = response.data.data.authorization;
    cookies().set("access_token", authToken);
    return 1;
  } catch (error) {
    console.log(error);
    return 0;
  }
}
