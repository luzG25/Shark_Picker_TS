import Header from "./componentes/Header";
import Gostaria from "./componentes/Gostaria";
import SharksType from "./componentes/SharkType";
import TubaraoCard from "./componentes/TubaraoCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchMySharks, fetchSharks, updateSharks } from "./api/sharkApi";

function App() {
  const queryClient = useQueryClient();

  const {
    data: sharks,
    isLoading,
    isError,
    error,
  } = useQuery<SharksType[] | []>({
    queryKey: ["sharks"],
    queryFn: fetchSharks,
  });

  const {
    data: mySharks = [],
    isLoading: loadingMySharks,
    isError: errorMySharks,
  } = useQuery<SharksType[] | []>({
    queryKey: ["mySharks"],
    queryFn: fetchMySharks,
  });

  const mutation = useMutation({
    mutationFn: (shark: SharksType) => updateSharks([...mySharks, shark]),
    onSuccess: () => {
      // Invalida e refaz o fetch da lista de tubarões
      queryClient.invalidateQueries({ queryKey: ["mySharks"] });
    },
  });

  const handleClick = async (shark: SharksType) => {
    try {
      mutation.mutate(shark);
    } catch (err) {
      console.error("Erro ao atualizar:", err);
      alert("Erro ao atualizar os tubarões");
    }
  };

  return (
    <div className="px-20 ">
      <Header />

      <div className="flex flex-col gap-5">
        <Gostaria mySharks={mySharks} />
        <div className="flex flex-col items-center border border-gray-700 rounded-lg  p-2">
          <h1 className="text-blue-200 font-bold text-sm">
            Tubarōes existentes
          </h1>

          <div className="text-gray-200 text-xs mt-2 ">
            Selecione abaixo tubarões que você gostaria de ver.
          </div>

          {/*Mostar Imagens */}
          <div className="mt-2 grid grid-cols-3 gap-2 ">
            {sharks?.map((shark, index) => (
              <TubaraoCard
                key={index}
                shark={shark}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
