import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import api from "../../api/api";
import SharksType from "../SharkType";

const fetchSharks = async (): Promise<SharksType[]> => {
  const response = await api.get("/sharks");
  return response.data.sharks;
};

const SharksTable = () => {
  const {
    data: sharks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["sharks"],
    queryFn: fetchSharks,
  });

  if (isLoading) return <p>Carregando tubarões...</p>;
  if (isError) return <p>Erro ao carregar tubarões!</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Nome</th>
            <th className="px-4 py-2 text-left">Imagem</th>
            <th className="px-4 py-2 text-left">Localização</th>
          </tr>
        </thead>
        <tbody>
          {sharks?.map((shark) => (
            <tr key={shark.id}>
              <td className="px-4 py-2">{shark.id}</td>
              <td className="px-4 py-2">{shark.title}</td>
              <td className="px-4 py-2">
                <img
                  src={`http://localhost:4000/${shark.image.src}`}
                  alt={shark.title}
                  className="w-20 h-20 object-cover"
                />
              </td>
              <td className="px-4 py-2">
                {shark.lat}, {shark.lon}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SharksTable;
