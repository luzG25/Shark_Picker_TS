import React from "react";
import TubaraoCard from "./TubaraoCard";
import SharksType from "./SharkType";
import updateSharks from "../api/useUpdateMySharks";

type Props = {
  mySharks: SharksType[];
  setMySharks: React.Dispatch<React.SetStateAction<SharksType[] | []>>;
};

const Gostaria: React.FC<Props> = ({ mySharks, setMySharks }) => {
  const handleSharkClick = async (shark: SharksType) => {
    try {
      await updateSharks(mySharks.filter((s) => s.id !== shark.id));
      setMySharks((prevSharks: SharksType[]) =>
        prevSharks.filter((s) => s.id !== shark.id)
      );
      alert("Lista de tubarões atualizada!");
    } catch (err) {
      console.error("Erro ao atualizar:", err);
      alert("Erro ao atualizar os tubaroes");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 border border-gray-700 rounded-lg p-5">
      <h2 className="text-blue-200 text-sm font-bold ">
        Eu gostaria de ver ...
      </h2>

      {/*Mostar Imagens */}
      <div className="mt-2 grid grid-cols-3 gap-2 ">
        {mySharks.map((shark, index) => (
          <TubaraoCard
            key={index}
            shark={shark}
            handleClick={handleSharkClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Gostaria;
