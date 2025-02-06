import axios from "axios";
import SharksType from "../componentes/SharkType";

// Função para atualizar a lista de tubarões
export const updateSharks = async (updatedSharks: SharksType[]) => {
  const response = await axios.post(
    "http://localhost:4000/mySharks",
    updatedSharks
  );
  return response.data;
};

// Função para buscar os tubarões do usuário
export const fetchMySharks = async (): Promise<SharksType[]> => {
  const response = await axios.get("http://localhost:4000/mySharks");
  return response.data;
};

// Função para buscar os tubarões disponíveis
export const fetchSharks = async (): Promise<SharksType[]> => {
  const response = await axios.get("http://localhost:4000/sharks");
  return response.data;
};
