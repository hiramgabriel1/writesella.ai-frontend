import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Datos de ejemplo
const data = [
  { name: "Semana 1", tiempo: 10 },
  { name: "Semana 2", tiempo: 40 },
  { name: "Semana 3", tiempo: 30 },
  { name: "Semana 4", tiempo: 40 },
  { name: "Semana 5", tiempo: 40 },
];

const ResponseTimeChart: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="font-bold text-gray-800 mb-4">
        Tiempo medio de respuesta de los tickets
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="tiempo" fill="#FBBF24" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResponseTimeChart;
