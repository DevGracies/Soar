"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const data = {
  labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
  datasets: [
    {
      data: [30, 15, 35, 20],
      backgroundColor: ["#1E2453", "#F97910", "#141414", "#2D66F8"],
      borderWidth: 5,
      borderColor: "#ffffff",
      offset: [5, 20, 5, 5],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: "#ffffff",
      font: {
        weight: "bold",
      },
      formatter: (value, context) => {
        return `${value}%\n${context.chart.data.labels[context.dataIndex]}`;
      },
      anchor: "center",
      align: "center",
    },
  },
  rotation: -50,
  circumference: 360,
};

export default function Investments() {
  return (
    <div className="p-4 w-full flex justify-center items-center bg-white rounded shadow md:w-[420px] md:h-[320px]">
      <Pie data={data} options={options} />
    </div>
  );
}
