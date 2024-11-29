import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar los módulos de Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StackedBarChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Días de la semana
    datasets: [
      {
        label: 'Widget de chat',
        data: [20, 25, 5, 15, 10, 30, 15], // Valores del dataset
        backgroundColor: '#FFC700', // Color amarillo oscuro
      },
      {
        label: 'Redes sociales',
        data: [20, 15, 5, 10, 10, 20, 10], // Valores del dataset
        backgroundColor: '#FFE299', // Color amarillo claro
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StackedBarChart;
