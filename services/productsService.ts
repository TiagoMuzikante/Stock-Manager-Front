import api from "@/lib/api";
import { Product } from "@/types";

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>(`/product`);
  if (!response.data) throw new Error("No products found");
  if (!Array.isArray(response.data)) throw new Error("Invalid products data format");
  if (response.data.length === 0) throw new Error("No products available");
  return response.data;
};

// Enums
// {
//   "PlateTypes": ["120", "145", "FAIXA"],
//   "PlateMaterial": ["TEMPERADO", "LAMINADO", "TREFILADA"],
//   "HoseType": ["PRENSADA", "MANGOTE"],
//   "HoseAdapterPoint": ["RETA", "90", "90 LONGO"],
//   "CableTieMaterial": ["ZINCADO_BRANCO", "ZINCADO_AMARELO", "INOX"],
//   "ScrewFlange": ["MA", "MB", "MAQUINA", "SOBERBA", "AUTO_BROCANTE", "AUTO_TRAVANTE"],
//   "ScrewNutsMaterial": ["ENEGRECIDO", "ZINCADO_BRANCO", "BICROMATIZADO", "INOX", "ACO"], //AÇO
//   "NutsType": ["TORQUE", "TRAVANTE", "ALTA_DUPLA", "ALTA", "BAIXA"],
//   "NutsFlange": ["MA", "MB", "MAQUINA"],
//   "MaterialType": ["MATERIAL_LIMPEZA", "MATERIAL_ESCRITORIO", "INSUMO", "LIMPEZA"],
//   "TubeType": ["RETANGULAR", "QUADRADO", "REDONDO"],
//   "TubeMaterial": ["TEMPERADO", "LAMINADO", "TREFILADA"],
//   "FormType": ["GENERIC", "PLATE", "HOSE", "ADAPTER", "CABLE_TIE", "SCREW", "NUTS", "MATERIAL", "TUBE"]
// }