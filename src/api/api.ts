import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000", // URL base da API
  timeout: 5000, // Tempo máximo de resposta (5 segundos)
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
