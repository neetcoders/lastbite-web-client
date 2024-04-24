import apiClient, { ResponseSchema } from "./apiClient";
import { getAuthToken } from "./authTokenService";
import { IStore } from "./storeService";

export type IProduct = {
  id: string;
  display_name: string;
  description: string;
  price_before: string;
  price_after: string;
  expiration_date: string;
  stock: number;
  store: IStore;
  category: null;
  created_at: string;
  updated_at: string;
}

export async function getMyProducts() {
  try {
    const token = await getAuthToken();

    const response = await apiClient.get<ResponseSchema<IProduct[]>>("/product/my-products", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    return response.data.data;
  }
  catch (err) {
    console.error(err);
    return null;
  }
}