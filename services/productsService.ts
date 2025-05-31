import api from "@/lib/api";
import { Product } from "@/types";

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>(`/product`);
  if (!response.data) throw new Error("No products found");
  if (!Array.isArray(response.data)) throw new Error("Invalid products data format");
  if (response.data.length === 0) throw new Error("No products available");
  return response.data;
};