import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SatisfactionChart = () => {
  const data = {
    labels: ["Excelente", "Bien", "Bueno", "Regular", "Malo"],
    datasets: [
      {
        label: "Calificaciones de Satisfacción",
        data: [40, 30, 15, 10, 5], // Datos de ejemplo
        backgroundColor: [
            "#001f3f", // Azul oscuro profundo
            "#003f7f", // Azul más claro
            "#005faf", // Azul medio
            "#007fff", // Azul brillante
            "#3399ff", // Azul muy claro
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const, // Leyenda a la derecha
      },
    },
  };

  return (
    <div
    className="p-6 rounded-lg shadow flex flex-col justify-between"
    style={{ background: '#F0F9FFFF' }}>
      <h3 className="text-gray-700 font-bold mb-4">Calificaciones de Satisfacción</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default SatisfactionChart;
