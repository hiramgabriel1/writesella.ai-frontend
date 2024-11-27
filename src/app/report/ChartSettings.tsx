import React from "react";

const ChartSettings: React.FC = () => {
  return (
    <div className="bg-gray p-6 shadow rounded">
      {/* Título */}
      <h2 className="font-bold text-gray-800 mb-4">Tipo de gráfico</h2>

      {/* Tipos de Gráfico */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { name: "Auto", icon: "" },
          { name: "Column", icon: "" },
          { name: "Pie", icon: "" },
          { name: "Bar", icon: "" },
          { name: "Line", icon: "" },
          { name: "Area", icon: "" },
          { name: "Funnel", icon: "" },
          { name: "Table", icon: "" },
          { name: "Candle", icon: "" },
          { name: "Count", icon: "" },
          { name: "Timeline", icon: "" },
          { name: "Treemap", icon: "" },
        ].map((type) => (
          <button
            key={type.name}
            className="flex flex-col items-center justify-center p-4 border rounded hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
          >
            <span className="text-xl">{type.icon}</span>
            <span className="text-xs font-medium mt-1">{type.name}</span>
          </button>
        ))}
      </div>

      {/* Métricas */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Métricas
        </label>
        <select className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500">
          <option>Tiempo de respuesta de tickets</option>
          <option>Resolución de tickets</option>
          <option>Satisfacción del cliente</option>
        </select>
      </div>

      {/* Agregación */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Agregación
        </label>
        <select className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500">
          <option>Mediana</option>
          <option>Promedio</option>
          <option>Moda</option>
        </select>
      </div>

      {/* Ver por */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ver por
        </label>
        <div className="flex space-x-1">
          {["Hora", "Día", "Semana", "Mes"].map((time) => (
            <button
              key={time}
              className={`px-3 py-1 rounded ${
                time === "Semana"
                  ? "bg-yellow-400 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          Cancelar
        </button>
        <button className="px-1 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500">
          Guardar gráfico
        </button>
      </div>
    </div>
    
  );
};

export default ChartSettings;
