import api from "./api";
import SharksType from "../componentes/SharkType";

const updateSharks = async (sharks: SharksType[]) => {
  try {
    const response = await api.put("/user-sharks", { sharks });
    console.log(response.data.message);
    return response.data.message;
  } catch (err) {
    console.error("Erro ao atualizar os tubarões:", err);

    //setUpdateError("Erro ao atualizar os tubarões.");
    throw err;
  } finally {
    //setIsUpdating(false);
  }
};

export default updateSharks;
