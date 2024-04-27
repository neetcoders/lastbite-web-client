import apiClient, { ResponseSchema } from "./apiClient";
import { getAuthToken } from "./authTokenService";

export type IAddress = {
  id: string;
  street: string;
  longitude: number;
  latitude: number;
}

export type IActiveAddress = {
  active_address_id: string;
}

export async function addNewAddress ( newAddressData : any ) {
  try {
    const token = await getAuthToken();
    const response = await apiClient.post<ResponseSchema<IAddress>>('/address/new', newAddressData, {
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

export async function getAllAddress() {
  try {
    const token = await getAuthToken();

    const response = await apiClient.get<ResponseSchema<IAddress[]>>("/address/all", {
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

export async function editAddress(id: string, formData: any) {
  const updatedAddressData = {
    street: formData.street,
    longitude: formData.longitude,
    latitude: formData.latitude,
  };
  
  try {
    const token = await getAuthToken();
    const response = await apiClient.put<ResponseSchema<IAddress>>(`/address/${id}`, updatedAddressData, {
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

export async function deleteAddressById ( id : string ) {
  try {
    const token = await getAuthToken();
    const response = await apiClient.delete<ResponseSchema<IAddress>>(`/address/${id}`, {
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

export async function setUserActiveAddress(active_address_id: string) {
  const updatedActiveAddressData = {
    active_address_id: active_address_id,
  };

  try {
    const token = await getAuthToken();
    const response = await apiClient.put<ResponseSchema<IActiveAddress>>(`/address/active`, updatedActiveAddressData, {
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

export async function getUserActiveAddress() {
  try {
    const token = await getAuthToken();
    const response = await apiClient.get<ResponseSchema<IAddress>>(`/address/active`, {
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