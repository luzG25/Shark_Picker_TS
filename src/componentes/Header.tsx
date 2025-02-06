import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center  mt-6">
      <div>
        <img src="" alt="" />
      </div>
      <h1
        id="titulo"
        className="text-4xl font-bold text-white  
      "
      >
        SHARKPICKER
      </h1>
      <p className="text-gray-400 text-xs mt-2">
        Criar sua coleção pessoal de tubarões que já <br /> viu ou gostaria de
        ver nos mares de Cabo Verde
      </p>
    </div>
  );
};

export default Header;
