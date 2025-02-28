"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri"],
  datasets: [
    {
      label: "Withdraw",
      data: [490, 320, 320, 490, 140, 400, 400],
      backgroundColor: "#000000",
      barThickness: 13,
      borderRadius: 10,
    },
    {
      label: "",
      data: [0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "rgba(0, 0, 0, 0)",
      barThickness: 3,
    },
    {
      label: "Deposit",
      data: [220, 120, 290, 380, 250, 250, 350],
      backgroundColor: "#0000FF",
      barThickness: 13,
      borderRadius: 10,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
    datalabels: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      max: 500,
      ticks: {
        stepSize: 100,
        callback: function (value) {
          return value;
        },
      },
    },
  },
};

export default function Accounts() {
  return (
    <div className="flex justify-center items-center p-3 bg-white shadow-md rounded-lg w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
}
