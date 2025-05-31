"use client";

import { useRef, useEffect, useState } from "react";
import { Product } from "@/types";
import { getFilteredProducts } from "../usecases/getFilteredProducts";
import ProductsTable from "./ProductsTable";

function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}

export default function ProductsContainer() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const debouncedSearch = useDebouncedValue(searchTerm, 500);

  useEffect(() => {
    setLoading(true);
    getFilteredProducts(debouncedSearch)
      .then(setProducts)
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          searchInputRef?.current?.focus();
        }, 10)
      });
  }, [debouncedSearch]);


  if (loading) {
    return (
      <div className="space-y-4 animate-pulse">
        {/* title */}
        <div className="h-8 w-1/3 bg-slate-200 rounded" />
        <div className="h-4 w-2/3 bg-slate-200 rounded mb-6" />

        {/* skeleton table */}
        <div className="overflow-hidden rounded-lg border border-slate-200 shadow">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                {Array.from({ length: 9 }).map((_, i) => (
                  <th key={i} className="px-6 py-3">
                    <div className="h-4 w-16 bg-slate-200 rounded" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {Array.from({ length: 6 }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 9 }).map((_, colIndex) => (
                    <td key={colIndex} className="px-6 py-4">
                      <div className="h-4 w-full bg-slate-100 rounded" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

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