import React, { useState } from "react";
import api from "../../api/api";

const NewSharkForm = () => {
  const [title, setTitle] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [lat, setLat] = useState<number>(0);
  const [lon, setLon] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newShark = {
        title,
        image: { src: imageSrc, alt: title },
        lat,
        lon,
      };

      const response = await api.post("/sharks", newShark);
      setSuccess("Tubarão adicionado com sucesso!");
      setTitle("");
      setImageSrc("");
      setLat(0);
      setLon(0);
    } catch (err) {
      console.error("Erro ao adicionar tubarão:", err);
      setError("Houve um erro ao adicionar o tubarão.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Adicionar Novo Tubarão</h2>
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">{success}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-semibold">
            Nome
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-semibold">
            URL da Imagem
          </label>
          <input
            type="text"
            id="image"
            value={imageSrc}
            onChange={(e) => setImageSrc(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="lat" className="block text-sm font-semibold">
              Latitude
            </label>
            <input
              type="number"
              id="lat"
              value={lat}
              onChange={(e) => setLat(parseFloat(e.target.value))}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="lon" className="block text-sm font-semibold">
              Longitude
            </label>
            <input
              type="number"
              id="lon"
              value={lon}
              onChange={(e) => setLon(parseFloat(e.target.value))}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default NewSharkForm;
