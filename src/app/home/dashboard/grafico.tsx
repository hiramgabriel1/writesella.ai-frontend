import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SatisfactionChartt = () => {
  const ticketsByStateData = {
    labels: ["Tickets abiertos", "Nuevo tickets"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#007BFF", "#85C8FF"],
        hoverBackgroundColor: ["#0056b3", "#63B4FF"],
      },
    ],
  };

  const ticketsByAssignmentData = {
    labels: ["Tickets asignados", "Tickets no asignados"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#007BFF", "#85C8FF"],
        hoverBackgroundColor: ["#0056b3", "#63B4FF"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="flex gap-4">
      {/* Primer gráfico */}
      <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-sm font-bold text-gray-700 mb-4">
          TICKETS SIN RESOLVER POR ESTADO
        </h3>
        <div style={{ width: "150px", height: "150px", margin: "0 auto" }}>
          <Doughnut data={ticketsByStateData} options={options} />
        </div>
      </div>

      {/* Segundo gráfico */}
      <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-sm font-bold text-gray-700 mb-4">
          TICKETS SIN RESOLVER POR ESTADO DE ASIGNACIÓN
        </h3>
        <div style={{ width: "150px", height: "150px", margin: "0 auto" }}>
          <Doughnut data={ticketsByAssignmentData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SatisfactionChartt;
