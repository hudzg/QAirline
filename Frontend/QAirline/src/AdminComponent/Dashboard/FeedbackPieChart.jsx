import React from "react";
import { Paper, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartExample = ({ feedbacks }) => {
  const data = {
    labels: [1, 2, 3, 4, 5].map((key) => `${key} sao`),
    datasets: [
      {
        label: "Rating",
        data: feedbacks || [],
        backgroundColor: [
          "#f24444",
          "#f2b705",
          "#f2b6dd",
          "#ADDDCE",
          "#09a603",
        ],
        hoverOffset: 4,
      },
    ],
  };

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

  return (
    <Paper elevation={3}>
      <div className="w-[25vw] space-y-16">
        <div>
          <Typography variant="h6" gutterBottom>
            Đánh giá phản hồi
          </Typography>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="w-[20vw] items-center">
            {" "}
            {/* Biểu đồ sẽ được căn giữa */}
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default PieChartExample;
