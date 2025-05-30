"use client";

import { useEffect, useState } from "react";
import { getProducts, Product } from "@/services/productsService";

export default function Products() {
  const [data, setData] = useState<Product[] | null>(null);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProducts().then(setData).catch(console.error);
  }, []);

  if (!data) {
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


  const filtered = data
    .slice()
    .sort((a, b) => b.id - a.id)
    .filter((product) => {
      const term = searchTerm.toLowerCase();
      return (
        product.name.toLowerCase().includes(term) ||
        product.brand?.toLowerCase().includes(term) ||
        product.address.toLowerCase().includes(term) ||
        product.availableAmount >= Number(term) ||
        product.reservedAmount >= Number(term) ||
        product.pendingAmount >= Number(term) ||
        product.minimumAmount >= Number(term)
      );
    });

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
          className="border p-2 rounded-md shadow-sm w-[50%] mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="relative w-full max-h-96 overflow-auto shadow rounded-lg">
        <table className="min-w-full text-sm text-left text-slate-600">
          <thead className="bg-slate-50 text-xs text-slate-500 uppercase border-b">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Nome</th>
              <th className="px-6 py-3">Marca</th>
              <th className="px-6 py-3">Disponível</th>
              <th className="px-6 py-3">Reservado</th>
              <th className="px-6 py-3">Pendente</th>
              <th className="px-6 py-3">Mínimo</th>
              <th className="px-6 py-3">Endereço</th>
              <th className="px-6 py-3">Ações</th>
            </tr>
          </thead>
          <tbody className="max-h-[400px] overflow-y-auto divide-y divide-slate-200">
            {filtered.map(product => (
              <tr key={product.id} className="hover:bg-slate-50">
                <td className="px-6 py-4">{product.id}</td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.brand || "Indisponível"}</td>
                <td className="px-6 py-4">{product.availableAmount}</td>
                <td className="px-6 py-4">{product.reservedAmount}</td>
                <td className="px-6 py-4">{product.pendingAmount}</td>
                <td className="px-6 py-4">{product.minimumAmount || 0}</td>
                <td className="px-6 py-4">{product.address}</td>
                <td className="px-6 py-4">
                  <a href="#" className="rounded-md bg-slate-800 text-white px-4 py-2 text-sm hover:bg-slate-700">
                    Ver
                  </a>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={9} className="text-center py-4 text-slate-400">Nenhum produto encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
