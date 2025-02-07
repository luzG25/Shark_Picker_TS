import SharksType from "../componentes/SharkType";
import api from "./api";

// Função para atualizar a lista de tubarões
export const updateSharks = async (updatedSharks: SharksType[]) => {
  const response = await api.put("/user-sharks", { sharks: updatedSharks });
  return response.data.message;
};

// Função para buscar os tubarões do usuário
export const fetchMySharks = async (): Promise<SharksType[]> => {
  const response = await api.get("/user-sharks");
  return response.data.sharks;
};

// Função para buscar os tubarões disponíveis
export const fetchSharks = async (): Promise<SharksType[]> => {
  const response = await api.get("/sharks");
  return response.data.sharks;
};
