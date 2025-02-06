import React from "react";
import TubaraoCard from "./TubaraoCard";
import SharksType from "./SharkType";

interface Props {
  sharks: SharksType[];
}

const TubaroesExistentes: React.FC<Props> = (props) => {
  console.log(props);

  // Verificar se sharks está vazio
  if (props.sharks.length === 0) {
    return <p>Sem tubarões disponíveis.</p>;
  }

  return (
    <div className="flex flex-col items-center border border-gray-700 rounded-lg  p-2">
      <h1 className="text-blue-200 font-bold text-sm">Tubarōes existentes</h1>

      {/*Mostar Imagens */}
      <div className="mt-2 flex flex-row gap-2">
        {props.sharks.map((shark, index) => (
          <TubaraoCard
            key={index}
            nome={shark.title}
            url={"http://localhost:4000/" + shark.image.src}
          />
        ))}
        sharks
      </div>
    </div>
  );
};

export default TubaroesExistentes;
