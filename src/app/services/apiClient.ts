import axios from "axios";

export type ResponseSchema<T> = {
  status: "success" | "error";
  message: string;
  data: T;
}

const apiClient = axios.create({
  baseURL: "https://squid-app-nty8u.ondigitalocean.app/api/v1",
});

export default apiClient;