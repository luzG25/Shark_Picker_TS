import React, { useEffect } from "react";
import TubaraoCard from "./TubaraoCard";
import SharksType from "./SharkType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSharks } from "../api/sharkApi";

type Props = {
  mySharks: SharksType[] | [];
};

const Gostaria: React.FC<Props> = ({ mySharks }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (shark: SharksType) =>
      updateSharks(mySharks.filter((s) => s.id !== shark.id)),
    onSuccess: () => {
      // Invalida a query e recarrega os dados de mySharks
      queryClient.invalidateQueries({ queryKey: ["mySharks"] });
    },
  });

  const handleSharkClick = async (shark: SharksType) => {
    try {
      mutation.mutate(shark);
    } catch (err) {
      console.error("Erro ao atualizar:", err);
      alert("Erro ao atualizar os tubarões");
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
