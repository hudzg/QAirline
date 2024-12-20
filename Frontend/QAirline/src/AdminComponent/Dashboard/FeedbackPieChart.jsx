import React from "react";
import { Paper, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const fakeData = {
    "1": 5,
    "2": 6,
    "3": 2,
    "4": 2,
    "5": 1
}

const PieChartExample = () => {
    const data = {
        labels: Object.keys(fakeData).map(key => `${key} star`),
        datasets: [{
            label: 'Rating',
            data: Object.values(fakeData),
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(0, 0, 0)',
                'rgb(0, 255, 0)'
            ],
            hoverOffset: 4
        }]
    };

    const options = {
        plugins: {
            legend: {
                position: 'bottom',  // Đưa ghi chú xuống dưới
                labels: {
                    boxWidth: 40,  // Độ rộng của hộp màu
                    padding: 15     // Khoảng cách giữa các ghi chú
                }
            }
        }
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
                    <div className="w-[20vw] items-center"> {/* Biểu đồ sẽ được căn giữa */}
                        <Pie data={data} options={options} /> 
                    </div>
                </div>
            </div>

        </Paper>
    );
};

export default PieChartExample;
