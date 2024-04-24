"use server";

import { getAuthToken, setAuthToken, unsetAuthToken } from "./authTokenService";
import apiClient, { ResponseSchema } from "./apiClient";

export type ILoginRequest = {
  email: string;
  password: string;
}

export type ILogin = {
  user: IUser;
  authorization: string;
}

export type IRegisterRequest = {
  email: string;
  display_name: string;
  birth_date: string;
  password: string;
  confirm_password: string;
}

export type IUser = {
  email: string;
  display_name: string;
  birth_date: string;
  active_address: null;
  created_at: string;
  updated_at: string;
}

export async function login(request: ILoginRequest) {
  try {
    const response = await apiClient.post<ResponseSchema<ILogin>>("/users/login", {
      email: request.email,
      password: request.password,
    });

    const token = response.data.data.authorization;
    await setAuthToken(token);

    return 1;
  }
  catch (err) {
    console.error(err);
    return 0;
  }
}

export async function register(request: IRegisterRequest) {
  try {
    await apiClient.post("/users/register", {
      email: request.email,
      display_name: request.display_name,
      birth_date: request.birth_date,
      password: request.password,
      confirm_password: request.confirm_password,
    });

    return 1;
  }
  catch (err) {
    console.log(err);
    return 0;
  }
}

export async function getCurrentUser() {
  try {
    const token = await getAuthToken();

    const response = await apiClient.get<ResponseSchema<IUser>>("/users/me", {
      headers: { 
        Authorization: `Bearer ${token}`
      }
    });

    return response.data.data;
  }
  catch (err) {
    console.error(err);
    return undefined;
  }
}

export async function logout() {
  return unsetAuthToken();
}

