import React from "react";
import Sidebar from './Sidebar';
import Header from './Header';
import HomeLayout from '@/components/layout'; // Asegúrate de importar HomeLayout
import ResponseTimeChart from './ResponseTimeChart'; // Importa el gráfico
import ChartSettings from "./ChartSettings";

const Report: React.FC = () => {
  return (
    <HomeLayout>
      <div className="dashboard-container flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="main-content flex-1">
          {/* Header */}
          <Header />

          {/* Content Section */}
          <div className="content-section p-6">
            {/* Report Header */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                Junio 2022 - Informe de eficiencia
              </h1>
              <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300">
                  Exportar
                </button>
                <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                  Guardar informe
                </button>
                
              </div>
              
            </div>
            <button className="text-gray-400 mb-5 font-medium hover:underline">
                + Añade una descripción 
              </button>
            {/* Time Filter */}
            <div className="bg-white p-4 shadow rounded mb-6 flex items-center justify-between">
              <span className="text-gray-600 font-medium">
                Tiempo: Jun 01, 2022 - Jun 30, 2022
              </span>
              <button className="text-blue-500 font-medium hover:underline">
                + Añadir filtro
              </button>
            </div>

            {/* Chart Section */}
            <section className="grid grid-cols-3 gap-6">
              {/* Bar Chart */}
              <div className="col-span-2 bg-white p-6 shadow rounded">

                <div className="col-span-2">
                <ResponseTimeChart /> {/* Gráfico del tiempo medio */}
                <button className="mt-100 flex items-center text-yellow-600 font-bold hover:text-yellow-700 focus:outline focus:outline-yellow-500 gap-2">
      <span className="text-xl font-bold">+</span>
      Agregar gráfico
    </button>
              </div>
              </div>
              <ChartSettings />

             

                
            </section>
          </div>

        </main>
      </div>
    </HomeLayout>
  );
};

export default Report;
