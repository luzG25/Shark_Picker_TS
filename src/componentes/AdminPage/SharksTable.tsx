import React, { useEffect, useState } from "react";
import api from "../../api/api";

type Shark = {
  id: string;
  title: string;
  image: { src: string; alt: string };
  lat: number;
  lon: number;
};

const SharksTable = () => {
  const [sharks, setSharks] = useState<Shark[]>([]);

  useEffect(() => {
    const fetchSharks = async () => {
      try {
        const response = await api.get("/sharks");
        setSharks(response.data.sharks);
      } catch (err) {
        console.error("Erro ao buscar tubarões:", err);
      }
    };

    fetchSharks();
  }, []);

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
          {sharks.map((shark) => (
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
