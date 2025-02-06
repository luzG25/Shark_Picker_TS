import React from "react";
import SharksType from "./SharkType";

type Props = {
  shark: SharksType;
  handleClick: (shark: SharksType) => void;
};

const TubaraoCard: React.FC<Props> = ({ shark, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(shark)}
      className="relative transform transition duration-300 hover:rotate-12 hover:scale-105 hover:shadow-xl "
    >
      <img
        className="rounded-lg"
        src={"http://localhost:4000/" + shark.image.src}
        alt={shark.title}
      />
      <p className="absolute bottom-1  right-3 rounded-lg  px-2 py-1 inline bg-yellow-200 text-xs ">
        {shark.title}
      </p>
    </div>
  );
};

export default TubaraoCard;
