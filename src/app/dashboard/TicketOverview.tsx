import SatisfactionChart from './SatisfactionChart';
import StackedBarChart from './StackedBarChart';
/* Container 97 */

const TicketOverview = () => {
  return (
    <>
      {/* Nueva Sección: Apoyo al cliente */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Apoyo al cliente</h1>

        {/* Dropdown y Tag */}
        <div className="flex items-center space-x-4 mt-4">
          {/* Dropdown */}
          <div className="relative">
            <input
              type="text"
              placeholder="Tiempo"
              className="w-32 h-9 px-3 py-1 text-gray-900 bg-white border border-blue-500 rounded-lg focus:outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-2.5 w-4 h-4 text-gray-700 pointer-events-none"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06 0L10 10.92l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Tag */}
          <div className="flex items-center bg-gray-100 px-4 py-1 rounded-lg text-sm text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3z"
                clipRule="evenodd"
              />
            </svg>
            Viendo actualmente: Jul 13, 2022 - Jul 20, 2022
          </div>
        </div>
      </div>

      {/* Sección de tarjetas y gráfico circular */}
      <section className="ticket-overview grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        {/* Sección de tarjetas */}
        <div className="grid grid-cols-2 gap-4 col-span-2">
          {/* TICKETS INDIVIDUAL */}
          <div
            className="p-6 rounded-lg shadow flex flex-col justify-between"
            style={{ background: '#F0F9FFFF' }}
          >
            <h3 className="text-gray-500 text-sm mb-2">TICKETS INDIVIDUAL</h3>
            <p className="text-3xl font-bold text-blue-500 mb-1">123</p>
            <p className="text-green-500 text-sm">↑ 25%</p>
          </div>

          {/* GRUPO DE TICKETS */}
          <div
            className="p-6 rounded-lg shadow flex flex-col justify-between"
            style={{ background: '#FFF9E9FF' }}
          >
            <h3 className="text-gray-500 text-sm mb-2">GRUPO DE TICKETS</h3>
            <p className="text-3xl font-bold text-yellow-500 mb-1">41</p>
            <p className="text-red-500 text-sm">↓ 16%</p>
          </div>

          {/* ENTRADA DE TICKETS */}
          <div
            className="p-6 rounded-lg shadow flex flex-col justify-between"
            style={{ background: '#F0F9FFFF' }}
          >
            <h3 className="text-gray-500 text-sm mb-2">ENTRADA DE TICKETS</h3>
            <p className="text-3xl font-bold text-blue-500 mb-1">0.0%</p>
            <p className="text-gray-400 text-sm">--</p>
          </div>

          {/* UN TOQUE TICKETS */}
          <div
            className="p-6 rounded-lg shadow flex flex-col justify-between"
            style={{ background: '#F0F9FFFF' }}
          >
            <h3 className="text-gray-500 text-sm mb-2">UN TOQUE TICKETS</h3>
            <p className="text-3xl font-bold text-blue-500 mb-1">0.0%</p>
            <p className="text-gray-400 text-sm">--</p>
          </div>
        </div>

        {/* Gráfico circular */}
        <SatisfactionChart />
      </section>

      {/* Nueva Sección: Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Gráfico de barras */}
        <div className="col-span-2 bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500 text-sm mb-2">TOTAL TICKETS</h3>
          <p className="text-3xl font-bold text-blue-500 mb-6">164</p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Widget de chat</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-300 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Redes sociales</span>
            </div>
          </div>

          <StackedBarChart />

        </div>

        {/* Desglose por estado */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500 text-sm mb-4">Desglose por estado</h3>

          {/* Barras horizontales */}
          <div className="h-4 bg-blue-500 rounded-full mb-2" style={{ width: '56%' }}></div>
          <div className="h-4 bg-blue-400 rounded-full mb-2" style={{ width: '31%' }}></div>
          <div className="h-4 bg-blue-300 rounded-full mb-2" style={{ width: '9%' }}></div>
          <div className="h-4 bg-blue-200 rounded-full mb-4" style={{ width: '4%' }}></div>

          {/* Detalles */}
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <span className="text-blue-500 font-bold">●</span> Tickets resueltos: 92
            </li>
            <li>
              <span className="text-blue-400 font-bold">●</span> Tickets sin resolver: 50
            </li>
            <li>
              <span className="text-blue-300 font-bold">●</span> Tickets pendientes: 6
            </li>
            <li>
              <span className="text-blue-200 font-bold">●</span> Otros: 16
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TicketOverview;
