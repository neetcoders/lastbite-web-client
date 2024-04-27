import apiClient, { ResponseSchema } from "./apiClient";
import { getAuthToken } from "./authTokenService";

export type IStore = {
  id: string;
  display_name: string;
}

export type IUser = {
  email: string;
  display_name: string;
}

export type IProduct = {
  id: string;
  selected: boolean;
  quantity: number;
  display_name: string;
  price_before: number;
  price_after: number;
  stock: number;
  image_url: string;
}

export type IOrder = {
  id: string;
  status: string;
  store: IStore;
  user: IUser;
  products: IProduct[];
  total_price: number;
}

export async function getOrderUserList () {
  try {
    const token = await getAuthToken()
    const response = await apiClient.get<ResponseSchema<IOrder[]>>('/order/details?status=waiting', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}