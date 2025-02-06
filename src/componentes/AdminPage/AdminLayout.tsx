import { Outlet, Link } from "react-router";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/admin/sharks" className="hover:text-yellow-300">
            📊 Gerir Tubarões
          </Link>
          <Link to="/admin/sharks/novo" className="hover:text-yellow-300">
            ➕ Adicionar Tubarão
          </Link>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet /> {/* Renderiza as rotas aninhadas */}
      </main>
    </div>
  );
};

export default AdminLayout;
