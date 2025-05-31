import api from "@/lib/api";
import { Product } from "@/types";

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>(`/product`);
  return response.data;
};