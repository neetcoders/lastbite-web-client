import { headers } from "next/headers";
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
  category: ICategory;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export type ICategory = {
  slug: string;
  display_name: string;
}

export async function getProductDetails(id: string) {
  try {
    const response = await apiClient.get<ResponseSchema<IProduct>>(`/product/${id}`);
    return response.data.data;
  }
  catch (err) {
    console.error(err);
    return null;
  }
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

export async function editProduct(id: string, formData: any) {
  const updatedProductData = {
    display_name: formData.name,
    description: formData.description,
    price_before: formData.price_before,
    price_after: formData.price_after,
    expiration_date: formData.exp_date,
    // stock: formData.stock,
    category_slug: formData.category,
    image_id: formData.image_id,
  };
  
  try {
    const token = await getAuthToken();
    const response = await apiClient.put<ResponseSchema<IProduct>>(`/product/${id}`, updatedProductData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function deleteProductById ( id : string ) {
  try {
    const token = await getAuthToken();
    const response = await apiClient.delete<ResponseSchema<IProduct>>(`/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function addNewProduct ( newProductData : any ) {
  try {
    const token = await getAuthToken();
    const response = await apiClient.post<ResponseSchema<IProduct>>('/product/new', newProductData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data.data
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getPublicProduct ( searchedProduct? : string ){
  try {
    const response = await apiClient.get<ResponseSchema<IProduct[]>>(`/product/public?limit=20&offset=0&distance=2000000&search=${searchedProduct || 'indomie'}`)
    if(response.data.data){
      return response.data.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getUserNearestProduct (searchedProduct? : string){
  try {
    const token = await getAuthToken()
    const response = await apiClient.get<ResponseSchema<IProduct[]>>(`/product?limit=20&offset=0&distance=10000&search=${searchedProduct || 'indomie'}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if(response.data.data){
      return response.data.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}