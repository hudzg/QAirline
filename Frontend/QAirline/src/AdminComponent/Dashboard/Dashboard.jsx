import React from "react";
import { Typography } from "@mui/material";
import PieChartExample from "./FeedbackPieChart";
import LineChartExample from "./LineChartExample";
import TestExample from "./TestExample";
import PersonIcon from '@mui/icons-material/Person';
import AirlinesIcon from "@mui/icons-material/Airlines";
import FlightIcon from '@mui/icons-material/Flight';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FeedbackIcon from "@mui/icons-material/Feedback";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <div className="pl-8 pr-8">
        <Typography variant="h4">
          Xin chào quay trở lại
        </Typography>
      </div>
      <div className="flex justify-between pl-8 pr-8">
        <TestExample label="Hành khách" data="4"><PersonIcon /></TestExample>
        <TestExample label="Sân bay" data="4"><AirlinesIcon /></TestExample>
        <TestExample label="Máy bay" data="4"><FlightIcon /></TestExample>
        <TestExample label="Phản hồi" data="4"><FeedbackIcon /></TestExample>
        <TestExample label="Doanh thu" data="4"><AttachMoneyIcon /></TestExample>
      </div>
      <div className="flex pl-8 pr-8 space-x-4">
        <LineChartExample />
        <PieChartExample />
      </div>
    </div>
  );
};

export default Dashboard;
