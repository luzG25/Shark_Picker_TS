//import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AdminLayout from "./componentes/AdminPage/AdminLayout.tsx";
import SharksTable from "./componentes/AdminPage/SharksTable.tsx";
import NewSharkForm from "./componentes/AdminPage/NewSharkForm.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="admin" element={<AdminLayout />}>
        <Route path="sharks" element={<SharksTable />} />
        <Route path="sharks/novo" element={<NewSharkForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
