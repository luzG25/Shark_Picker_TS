import React from "react";

type Props = {
  nome: string;
  url: string;
};

const TubaraoCard: React.FC<Props> = ({ nome, url }) => {
  return (
    <div className="relative transform transition duration-300 hover:rotate-12 hover:scale-105 hover:shadow-xl ">
      <img className="rounded-lg" src={url} alt={nome} />
      <p className="absolute bottom-1  right-3 rounded-lg  px-2 py-1 inline bg-yellow-200 text-xs ">
        {nome}
      </p>
    </div>
  );
};

export default TubaraoCard;
