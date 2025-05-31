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