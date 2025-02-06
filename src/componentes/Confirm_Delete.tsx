import React, { useState } from "react";

const Confirm_Delete: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Estado para controlar o modal

  const handleClose = (): void => {
    setIsOpen(true); // Fecha o modal
  };

  const handleDelete = (): void => {
    console.log("Tubarão removido!"); // Lógica de remoção
    setIsOpen(false);
  };

  return (
    <div>
      {/* Botão para abrir o popup 
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Remover Tubarão
      </button> */}

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

export default Confirm_Delete;
