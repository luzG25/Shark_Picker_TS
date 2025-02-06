//import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AdminLayout from "./componentes/AdminPage/AdminLayout.tsx";
import SharksTable from "./componentes/AdminPage/SharksTable.tsx";
import NewSharkForm from "./componentes/AdminPage/NewSharkForm.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="admin" element={<AdminLayout />}>
          <Route path="sharks" element={<SharksTable />} />
          <Route path="sharks/novo" element={<NewSharkForm />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  </BrowserRouter>
);
