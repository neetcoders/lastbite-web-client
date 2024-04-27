import { headers } from "next/headers";
import apiClient, { ResponseSchema } from "./apiClient";
import { getAuthToken } from "./authTokenService";
import { productDetails } from "./orderServices";

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

export type ICart = {
  orders: IOrder[];
  total_price: number;  
}

export async function getOrderUserList () {
  try {
    const token = await getAuthToken()
    const response = await apiClient.get<ResponseSchema<IOrder[]>>('/order/details?status=all', {
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

export async function getUserCart(){
  try {
    const token = await getAuthToken();
    const response = await apiClient.get<ResponseSchema<ICart>>('/order?selected_only=false', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    // console.log(response.data.data) ;
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function toggleStoreSelected ( store_id: string ) {
  try {
    const token = await getAuthToken();
    const response = await apiClient.post<ResponseSchema<IOrder>>(`/order/store/${store_id}/toggle_selected`, { store_id }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function toggleProductSelected ( product_id: string ) {
  try {
    const token = await getAuthToken();
    const response = await apiClient.post<ResponseSchema<IOrder>>(`/order/product/${product_id}/toggle_selected`, { product_id }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function deleteStoreFromCart ( store_id : string ) {
  try {
    const token = await getAuthToken();
    const response = await apiClient.delete<ResponseSchema<{}>>(`/order/store/${store_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function deleteProductFromCart ( product_id : string ) {
  try {
    const token = await getAuthToken();
    const response = await apiClient.delete<ResponseSchema<{}>>(`/order/product/${product_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })    
    return response.data.data
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function increaseProductQty ( product_id: string ){
  try {
    const token = await getAuthToken(); 
    const response = await apiClient.post<ResponseSchema<productDetails>>(`/order/qty/${product_id}/increase`, {product_id} ,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })    
    return response.data.data
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function decreaseProductQty ( product_id: string ){
  try {
    const token = await getAuthToken(); 
    const response = await apiClient.post<ResponseSchema<productDetails>>(`/order/qty/${product_id}/decrease`, {product_id}, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })    
    return response.data.data
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getUserOrderDetail(){
  try {
    const token = await getAuthToken();
    const response = await apiClient.get<ResponseSchema<ICart>>('/order?selected_only=true', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    // console.log(response.data.data) ;
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function checkout() {
  try {
    const token = await getAuthToken();
    const response = await apiClient.post<ResponseSchema<{}>>('/order/checkout', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}