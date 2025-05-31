"use client";

import { useRef, useEffect, useState } from "react";
import { Product } from "@/types";
import { getFilteredProducts } from "../usecases/getFilteredProducts";
import ProductsTable from "./ProductsTable";

export default function ProductsContainer() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLoading(true);
    getFilteredProducts(searchTerm)
      .then(setProducts)
      .finally(() => setLoading(false) );
  }, [searchTerm]);

  return (
    <>
      <div className="text-left w-full mb-4">
        <h3 className="text-4xl font-semibold text-slate-800">Produtos</h3>
        <p className="text-slate-500 mb-5">Exemplo de uma lista de produtos. Você também pode filtrar.</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Buscar"
          id="search-product"
          ref={searchInputRef}
          className="border p-2 rounded-md shadow-sm w-[50%] mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ProductsTable products={products} />
    </>
  );
}