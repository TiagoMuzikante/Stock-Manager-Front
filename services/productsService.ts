import api from "@/lib/api";

export interface Product {
  id: number;
  name: string;
  brand: string;
  availableAmount: number,
  reservedAmount: number,
  pendingAmount: number,
  minimumAmount: number,
  address: string
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>(`/product`);
  return response.data;
};