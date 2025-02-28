"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
  ],
  datasets: [
    {
      data: [100, 300, 230, 210, 440, 410, 790, 200, 590, 230, 630, 610], 
      borderColor: "#2D60FF",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
        gradient.addColorStop(0, "rgba(45, 96, 255, 0.25)");
        gradient.addColorStop(1, "rgba(45, 96, 255, 0)");
        return gradient;
      },
      borderWidth: 3,
      fill: true,
      tension: 0.5,
      pointRadius: 0, 
      pointHoverRadius: 0, 
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 800,
      ticks: {
        stepSize: 200,
      },
    },
  },
};

export default function Loans() {
  return (
    <div className="w-full p-4 md:h-72 bg-white rounded shadow">
      <Line data={data} options={options} />
    </div>
  );
}
