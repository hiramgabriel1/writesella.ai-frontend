import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Dom", Todo: 40, Publicos: 10, Internos: 30 },
  { name: "Lun", Todo: 30, Publicos: 20, Internos: 10 },
  { name: "Mar", Todo: 20, Publicos: 30, Internos: 20 },
  { name: "Mié", Todo: 40, Publicos: 20, Internos: 20 },
  { name: "Jue", Todo: 30, Publicos: 15, Internos: 15 },
  { name: "Vie", Todo: 35, Publicos: 10, Internos: 25 },
  { name: "Sáb", Todo: 20, Publicos: 5, Internos: 15 },
];

const AgentCommentsChart: React.FC = () => {
  return (
    <div
      style={{
        top: "1824px",
        left: "432px",
        width: "844px",
        height: "458px",
        background: "#FFFFFF",
        borderRadius: "12px",
        padding: "30px",
      }}
    >
      <h2
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          color: "#171a1f",
          marginBottom: "50px",
        }}
      >
        Comentarios de los agentes por fecha
      </h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Todo" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="Publicos" stroke="#ffc658" strokeWidth={2} />
          <Line type="monotone" dataKey="Internos" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AgentCommentsChart;
