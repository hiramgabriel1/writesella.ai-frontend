import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type SatisfactionChartProps = {
  title: string;
  labels: string[];
  data: number[];
  colors: string[];
};

const SatisfactionChar: React.FC<SatisfactionChartProps> = ({
  title,
  labels,
  data,
  colors,
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: colors,
        borderWidth: 1,
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
  };

  return (
    <div className="p-4 rounded-lg shadow flex flex-col items-center justify-between bg-[#F0F9FFFF]">
      <h3 className="text-gray-700 font-bold mb-2 text-center">{title}</h3>
      <div style={{ width: "150px", height: "150px" }}>
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default SatisfactionChar;
