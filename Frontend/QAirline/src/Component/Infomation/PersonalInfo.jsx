import { Typography, Card, Button } from "@mui/material";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addGetFlightRequest } from "../../State/Flight/Action";
import { addCustomer } from "../../State/Seat/Action";
import InfoCard from "./InfoCard";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const flight = useSelector((store) => store.flight);

  const [inforData, setInforData] = useState([]);

  useEffect(() => {
    const getFlightReq = localStorage.getItem("getFlightReq");
    if (getFlightReq) {
      dispatch(addGetFlightRequest(JSON.parse(getFlightReq)));
    }
  }, []);

  useEffect(() => {
    if (flight.getFlightReq.numPassenger) {
      // console.log(flight.getFlightReq.numPassenger);
      const newInforData = [];
      for (let i = 0; i < flight.getFlightReq.numPassenger; i++) {
        newInforData.push({
          id: i + 1,
          citizenId: "",
          firstName: "",
          lastName: "",
          phone: "",
          dob: dayjs(),
          gender: "",
        });
      }
      setInforData(newInforData);
      // console.log(inforData);
    }
  }, [flight.getFlightReq]);

  const updateInforData = (id, item) => {
    setInforData((prevInforData) =>
      prevInforData.map((infor) =>
        infor.id === id ? { ...infor, ...item } : infor
      )
    );
  };

  const handleSubmit = () => {
    console.log(inforData);
    dispatch(addCustomer(inforData));
    navigate("/preview");
  };

  return (
    <div className="w-[60vw] m-auto mb-5 mt-5 p-5 bg-indigo-50">
      <div>
        <Typography variant="h3" textAlign="Center" gutterBottom>
          Thông tin cá nhân
        </Typography>
      </div>
      <div>
        {inforData.map((item, index) => (
          <InfoCard key={index} infor={item} updateInfor={updateInforData} />
        ))}
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-end pr-5">
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #B993D6, #8CA6DB)",
            }}
          >
            Quay lại
          </Button>
        </div>
        <div className="flex justify-start pl-5">
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #B993D6, #8CA6DB)",
            }}
          >
            Tiếp tục
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
