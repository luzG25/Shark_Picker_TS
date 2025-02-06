import React from "react";
import TubaraoCard from "./TubaraoCard";

const Gostaria: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-10 border border-gray-700 rounded-lg p-5">
      <h2 className="text-blue-200 text-sm font-bold ">
        Eu gostaria de ver ...
      </h2>
      <div className="text-gray-200 text-xs mt-2 ">
        Selecione abaixo tubarões que você gostaria de ver.
      </div>

      {/* Mostrar imagens */}
      <div
        className="flex gap-2
      "
      >
        <TubaraoCard
          nome="Tubarao xrldd"
          url="https://static.wixstatic.com/media/fe5d56_feb87044ca5745b58b34848cde902b8a~mv2.jpg/v1/fill/w_568,h_326,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fe5d56_feb87044ca5745b58b34848cde902b8a~mv2.jpg"
        />
        <TubaraoCard
          nome="Tubarao xrldd"
          url="https://static.wixstatic.com/media/fe5d56_feb87044ca5745b58b34848cde902b8a~mv2.jpg/v1/fill/w_568,h_326,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fe5d56_feb87044ca5745b58b34848cde902b8a~mv2.jpg"
        />
        <TubaraoCard
          nome="Tubarao xrldd"
          url="https://static.wixstatic.com/media/fe5d56_feb87044ca5745b58b34848cde902b8a~mv2.jpg/v1/fill/w_568,h_326,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fe5d56_feb87044ca5745b58b34848cde902b8a~mv2.jpg"
        />
      </div>
    </div>
  );
};

export default Gostaria;
