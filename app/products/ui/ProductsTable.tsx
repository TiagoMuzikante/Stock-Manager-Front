"use client";

import { Product } from "@/types";

interface ProductsTableProps {
  products: Product[];
}

export default function ProductsTable({ products }: ProductsTableProps) {
  return (
    <div className="relative w-full max-h-96 overflow-auto shadow rounded-lg">
      <table className="min-w-full text-sm text-left text-slate-600">
        <thead className="bg-slate-50 text-xs text-slate-500 uppercase border-b">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Nome</th>
            <th className="px-6 py-3">Marca</th>
            <th className="px-6 py-3">Disponível</th>
            <th className="px-6 py-3">Localização</th>
            <th className="px-6 py-3">Ações</th>
          </tr>
        </thead>
        <tbody className="max-h-[400px] overflow-y-auto divide-y divide-slate-200">
          {products.map(product => (
            <tr key={product.id} className="hover:bg-slate-50">
              <td className="px-6 py-4">{product.id || "Indisponível"}</td>
              <td className="px-6 py-4">{product.name || "Indisponível"}</td>
              <td className="px-6 py-4">{product.brand || "Indisponível"}</td>
              <td className="px-6 py-4">{product.availableAmount || 0}/{product.minimumAmount || 0}</td>
              <td className="px-6 py-4">{product.address || "Indisponível"}</td>
              <td className="px-6 py-4">
                <a href="#" className="rounded-md bg-slate-800 text-white px-4 py-2 text-sm hover:bg-slate-700">
                  Ver
                </a>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan={9} className="text-center py-4 text-slate-400">Nenhum produto encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}