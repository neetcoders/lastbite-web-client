"use server";

import { getAuthToken, setAuthToken, unsetAuthToken } from "./authTokenService";
import apiClient from "./apiClient";

export async function login(email: string, password: string) {
  try {
    const response = await apiClient.post("/users/login", { email, password });
    const token = response.data.data.authorization;
    await setAuthToken(token);

    return 1;
  }
  catch (err) {
    console.error(err);
    return 0;
  }
}

export async function getCurrentUser() {
  try {
    const token = await getAuthToken();

    const response = await apiClient.get("/users/me", {
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

