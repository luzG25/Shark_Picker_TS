import { useEffect, useState } from "react";
import Header from "./componentes/Header";
import Gostaria from "./componentes/Gostaria";
import TubaroesExistentes from "./componentes/TubaroesExistentes";
import SharksType from "./componentes/SharkType";
import TubaraoCard from "./componentes/TubaraoCard";
import api from "./api/api";

function App() {
  const [sharks, setSharks] = useState<SharksType[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await api.get<{ sharks: SharksType[] }>("/sharks");

        if (Array.isArray(response.data.sharks)) {
          setSharks(response.data.sharks);
        } else {
          console.error("Os dados recebidos não são um array:", response.data);
        }
      } catch (err) {
        console.error("Erro ao carregar os dados:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-20 ">
      <Header />

      <div className="flex flex-col gap-5">
        <Gostaria />
        <div className="flex flex-col items-center border border-gray-700 rounded-lg  p-2">
          <h1 className="text-blue-200 font-bold text-sm">
            Tubarōes existentes
          </h1>

          {/*Mostar Imagens */}
          <div className="mt-2 grid grid-cols-3 gap-2 ">
            {sharks.map((shark, index) => (
              <TubaraoCard
                key={index}
                nome={shark.title}
                url={"http://localhost:4000/" + shark.image.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
