import React, { useState } from "react";
import TubaraoCard from "./TubaraoCard";
import SharksType from "./SharkType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSharks } from "../api/sharkApi";

type Props = {
  mySharks: SharksType[] | [];
};

const Gostaria: React.FC<Props> = ({ mySharks }) => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState<string | null>(null); // Estado para controlar o modal

  const mutation = useMutation({
    mutationFn: (id: string | null) =>
      updateSharks(mySharks.filter((s) => s.id !== id)),
    onSuccess: () => {
      // Invalida a query e recarrega os dados de mySharks
      queryClient.invalidateQueries({ queryKey: ["mySharks"] });
    },
  });

  const handleDelete = async () => {
    try {
      mutation.mutate(isOpen);
    } catch (err) {
      console.error("Erro ao atualizar:", err);
      alert("Erro ao atualizar os tubarões");
    } finally {
      setIsOpen(null);
    }
  };

  const handleClose = (): void => {
    setIsOpen(null); // Fecha o modal
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
            handleClick={() => setIsOpen(shark.id)}
          />
        ))}
      </div>

      {/* Modal (Popup) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            <h1 id="modal-title" className="text-xl font-bold mb-4">
              Tem a certeza?
            </h1>
            <p className="mb-6">Quer mesmo remover este tubarão?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleClose}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Não
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Sim
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gostaria;
