import React from "react";
import { Paper, Typography } from "@mui/material";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const LineChartExample = ({ seats, flights }) => {
  const options = {
    plugins: {
      legend: {
        position: "bottom", // Đưa ghi chú xuống dưới
        labels: {
          boxWidth: 40, // Độ rộng của hộp màu
          padding: 15, // Khoảng cách giữa các ghi chú
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Hành khách",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: seats || [],
      },
      {
        type: "bar",
        label: "Số chuyến bay",
        backgroundColor: "rgb(53, 162, 235)",
        data: flights || [],
      },
    ],
  };

  return (
    <Paper elevation={3}>
      <Typography variant="h6" gutterBottom>
        Số chuyến bay thực hiện và số lượng hành khách
      </Typography>
      <div className="w-[55vw]">
        <Chart data={data} options={options} />
      </div>
    </Paper>
  );
};

export default LineChartExample;
