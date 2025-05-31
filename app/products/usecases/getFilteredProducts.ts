import { getProducts } from "@/services/productsService";
import { Product } from "@/types";

export async function getFilteredProducts(searchTerm: string): Promise<Product []> {
  const data = await getProducts();

  const term = searchTerm.toLowerCase();

  return data
    .slice()
    .sort((a, b) => b.id - a.id)
    .filter((product) => {
      return (
        product.name.toLowerCase().includes(term) ||
        product.brand?.toLowerCase().includes(term) ||
        product.address.toLowerCase().includes(term) ||
        product.availableAmount >= Number(term) ||
        product.minimumAmount >= Number(term)
      );
    });
}