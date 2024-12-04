import Link from "next/link";
import { redirect } from "next/navigation";

const Sidebar = () => {

  const redirectDashboard =  () => {
    return redirect("/home/report");
  }

  return (
    <div className="sidebar w-50 bg-white shadow-lg h-screen flex flex-col justify-between">
      {/* Paneles */}
      <div>
        <div className="p-6 font-bold text-lg">Paneles</div>
        <nav className="mt-4">
          <ul className="space-y-4 px-6 text-gray-800">
            <Link href="/home/dashboard" className="cursor-pointer hover:text-blue-700">
              Visión general
            </Link>
            <li className="cursor-pointer hover:text-blue-700">
              Apoyo al cliente
            </li>
            <li className="cursor-pointer hover:text-blue-700">
              Generación de leads y ROI
            </li>
            <li className="cursor-pointer hover:text-blue-700">
              Compromiso con el cliente
            </li>
            <li className="cursor-pointer hover:text-blue-700">
              Productividad
            </li>
          </ul>
        </nav>

        {/* Informes Personalizados */}
        <div className="mt-10 px-6">
          <h3 className="text-gray-1100 font-bold text-sm">
            Informes personalizados
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li className="truncate hover:text-blue-500 cursor-pointer">
              May 2022 - Performance...
            </li>
            <li className="truncate hover:text-blue-500 cursor-pointer">
              April 2022 - Performance...
            </li>
            <li className="truncate hover:text-blue-500 cursor-pointer">
              Cycle-time reduction...
            </li>
            <li className="truncate hover:text-blue-500 cursor-pointer">
              Promotion campaign...
            </li>
          </ul>
        </div>
      </div>

      {/* Botón Personalizar */}
      <div className="p-2">
        <button onClick={redirectDashboard} className="w-full bg-yellow-500 text-white font-semibold text-sm px-4 py-2 rounded-lg flex items-center justify-between hover:bg-yellow-600">
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Personalizar un informe
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
