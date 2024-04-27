import { headers } from "next/headers";
import apiClient, { ResponseSchema } from "./apiClient";
import { getAuthToken } from "./authTokenService";

export type productDetails = {
    id: string;
    display_name: string;
    image_url: string | null;
    price_after: number;
    price_before: number;
    quantity: number;
    selected: boolean;
    stock: number;
}

export type user = {
    email: string;
    display_name: string;
  }
  
export type orderList = {
    id: string;
    products: productDetails[];
    status: string;
    user: user;
    total_price: number;
}

export async function getOrderList () {
    try {
        const token = await getAuthToken()
        const response = await apiClient.get<ResponseSchema<orderList[]>>('/order/store/details?status=waiting', {
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

export async function getOrderDetail (id : string ) {
    try {
        const token = await getAuthToken()
        const response = await apiClient.get<ResponseSchema<orderList>>(`/order/store/details/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        // console.log(response.data.data)
        return(response.data.data)
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function changeOrderStatus ( id : string, payload: {} ) {
    try {
        const token = await getAuthToken();
        const response = await apiClient.put<ResponseSchema<orderList>>(`/order/store/details/${id}`, payload, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        // console.log(response.data.data)
        return response.data.data
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function addToCart ( product_id : string ) {
    try {
        const token = await getAuthToken();
        const response = await apiClient.post<ResponseSchema<{}>>(`order/add`, { product_id } ,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data.data
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getUserCart (){
    try {
        const token = await getAuthToken();
        const response = await apiClient.get<ResponseSchema<{}>>('/order?selected_only=true', {
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