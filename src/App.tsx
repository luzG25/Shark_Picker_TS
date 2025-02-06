import { useEffect, useState } from "react";
import Header from "./componentes/Header";
import Gostaria from "./componentes/Gostaria";
import SharksType from "./componentes/SharkType";
import TubaraoCard from "./componentes/TubaraoCard";
import useFetchSharks from "./api/useFetchSharks";
import updateSharks from "./api/useUpdateMySharks";
import useFetchMySharks from "./api/useFetchMySharks";

function App() {
  const { sharks, loading, error } = useFetchSharks();
  const {
    sharks: mySharks,
    loading: loadingMySharks,
    error: errorMySharks,
    setSharks: setMySharks,
  } = useFetchMySharks();

  const handleClick = async (shark: SharksType) => {
    alert("tubarao clicado " + shark.title);

    try {
      // Exemplo de como atualizar a lista de tubarões
      await updateSharks([...mySharks, shark]);
      setMySharks([...mySharks, shark]);
      alert("Lista de tubarões atualizada!");
    } catch (err) {
      console.error("Erro ao atualizar:", err);
      alert("Erro ao atualizar os tubaroes");
    }
  };

  return (
    <div className="px-20 ">
      <Header />

      <div className="flex flex-col gap-5">
        <Gostaria mySharks={mySharks} setMySharks={setMySharks} />
        <div className="flex flex-col items-center border border-gray-700 rounded-lg  p-2">
          <h1 className="text-blue-200 font-bold text-sm">
            Tubarōes existentes
          </h1>

          <div className="text-gray-200 text-xs mt-2 ">
            Selecione abaixo tubarões que você gostaria de ver.
          </div>

          {/*Mostar Imagens */}
          <div className="mt-2 grid grid-cols-3 gap-2 ">
            {sharks.map((shark, index) => (
              <TubaraoCard
                key={index}
                shark={shark}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
