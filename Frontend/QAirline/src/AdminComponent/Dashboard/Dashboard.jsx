import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import PieChartExample from "./FeedbackPieChart";
import LineChartExample from "./LineChartExample";
import TestExample from "./TestExample";
import PersonIcon from "@mui/icons-material/Person";
import AirlinesIcon from "@mui/icons-material/Airlines";
import FlightIcon from "@mui/icons-material/Flight";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { useDispatch, useSelector } from "react-redux";
import { getDashboard } from "../../State/Dashboard/Action";

const Dashboard = () => {
  const dashboard = useSelector((store) => store.dashboard.dashboard);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    dispatch(getDashboard({ jwt }));
  }, []);
  return (
    <div className="space-y-4">
      <div className="pl-8 pr-8">
        <Typography variant="h4">Chào mừng quay trở lại</Typography>
      </div>
      <div className="flex justify-between pl-8 pr-8">
        <TestExample label="Người dùng" data={dashboard?.numUser}>
          <PersonIcon />
        </TestExample>
        <TestExample label="Sân bay" data={dashboard?.numAirport}>
          <AirlinesIcon />
        </TestExample>
        <TestExample label="Máy bay" data={dashboard?.numAirplane}>
          <FlightIcon />
        </TestExample>
        <TestExample label="Phản hồi" data={dashboard?.numFeedback}>
          <FeedbackIcon />
        </TestExample>
        <TestExample label="Doanh thu" data={dashboard?.revenue}>
          <AttachMoneyIcon />
        </TestExample>
      </div>
      <div className="flex pl-8 pr-8 space-x-4">
        <LineChartExample
          seats={dashboard?.seats}
          flights={dashboard?.flights}
        />
        <PieChartExample feedbacks={dashboard?.feedbacks} />
      </div>
    </div>
  );
};

export default Dashboard;
