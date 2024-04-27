import apiClient, { ResponseSchema } from "./apiClient";
import { getAuthToken } from "./authTokenService";

export type IUpload = {
  id: string;
  image_url: string;
}

export async function uploadStoreImage(file: Blob) {
  try {
    const token = await getAuthToken();

    const formData = new FormData();
    formData.append("file", file);

    const response = await apiClient.post<ResponseSchema<IUpload>>("/upload/store", formData, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      validateStatus: () => true,
    });

    return response.data;
  }
  catch (err) {
    console.error(err);
    return undefined;
  }
}
