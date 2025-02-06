import { useEffect, useState } from "react";
import api from "./api"; // Certifique-se que está importando a instância do axios
import SharksType from "../componentes/SharkType";

const useFetchSharks = () => {
  const [sharks, setSharks] = useState<SharksType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get<{ sharks: SharksType[] }>("/sharks");
        if (Array.isArray(response.data.sharks)) {
          setSharks(response.data.sharks);
        } else {
          console.error("Os dados recebidos não são um array:", response.data);
          setError("Formato de dados inválido.");
        }
      } catch (err) {
        console.error("Erro ao buscar os tubarões:", err);
        setError("Erro ao carregar os dados.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { sharks, loading, error };
};

export default useFetchSharks;
