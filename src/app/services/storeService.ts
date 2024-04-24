"use server";

import { getAuthToken, setAuthToken, unsetAuthToken } from "./authTokenService";
import apiClient, { ResponseSchema } from "./apiClient";
import { IAddress } from "./addressService";

export type ILoginRequest = {
  email: string;
  password: string;
}

export type ILogin = {
  store: IStore;
  authorization: string;
}

export type IStore = {
  email: string;
  display_name: string;
  birth_date: string;
  address: IAddress;
  created_at: string;
  updated_at: string;
}

export async function login(request: ILoginRequest) {
  try {
    const response = await apiClient.post<ResponseSchema<ILogin>>("/store/login", {
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

export async function getCurrentStore() {
  try {
    const token = await getAuthToken();

    const response = await apiClient.get<ResponseSchema<IStore>>("/store/me", {
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

