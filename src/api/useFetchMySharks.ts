import { useState, useEffect } from "react";
import api from "./api";
import SharksType from "../componentes/SharkType";

// Hook para buscar os tubarões do usuário
const useFetchMySharks = () => {
  const [sharks, setSharks] = useState<SharksType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get<{ sharks: SharksType[] }>(
          "/user-sharks"
        );
        if (Array.isArray(response.data.sharks)) {
          setSharks(response.data.sharks);
        } else {
          console.error("Os dados recebidos não são um array:", response.data);
          setError("Formato de dados inválido.");
        }
      } catch (err) {
        console.error("Erro ao buscar os tubarões do usuário:", err);
        setError("Erro ao carregar os dados.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { sharks, loading, error, setSharks };
};

export default useFetchMySharks;
