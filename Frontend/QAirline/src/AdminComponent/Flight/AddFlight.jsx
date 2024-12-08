import {
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddFlightTicket from "./AddFlightTicket";
import AddFlightLeg from "./AddFlightLeg";
import { getAllAirport } from "../../State/Airport/Action";
import { getAllAirplane } from "../../State/Airplane/Action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddFlight = () => {
  const navigate = useNavigate();

  const jwt = localStorage.getItem("jwt");
  const airport = useSelector((store) => store.airport);
  const airplane = useSelector((store) => store.airplane);
  const dispatch = useDispatch();

  const [weekdays, setWeekDays] = useState(0);

  const [selectedDays, setSelectedDays] = useState(null);
  const daysOfWeek = [
    { label: "Thứ Hai", value: 1 },
    { label: "Thứ Ba", value: 2 },
    { label: "Thứ Tư", value: 3 },
    { label: "Thứ Năm", value: 4 },
    { label: "Thứ Sáu", value: 5 },
    { label: "Thứ Bảy", value: 6 },
    { label: "Chủ Nhật", value: 7 },
  ];

  useEffect(() => {
    dispatch(getAllAirport({ jwt }));
    dispatch(getAllAirplane({ jwt }));
  }, []);

  const [ticketData, setTicketData] = useState({
    FIRST_CLASS: {
      amount: 0,
      price: 0,
      refund: false,
      checkedBaggage: 0.0,
      carryOnBaggage: 0.0,
    },
    BUSINESS_CLASS: {
      amount: 0,
      price: 0,
      refund: false,
      checkedBaggage: 0.0,
      carryOnBaggage: 0.0,
    },
    ECONOMY_CLASS: {
      amount: 0,
      price: 0,
      refund: false,
      checkedBaggage: 0.0,
      carryOnBaggage: 0.0,
    },
  });

  //chuyển về flight
  const navToFlight = () => {
    navigate("/admin/flight");
  };

  const handleDayChange = (event) => {
    const selectedValue = event.target.value;

    const newWeekdays = Math.pow(2, selectedValue);
    setWeekDays(newWeekdays);
    setSelectedDays(selectedValue);
  };

  const handleInputChangeTicket = (e, className) => {
    const { name, value } = e.target;
    setTicketData({
      ...ticketData,
      [className]: {
        ...ticketData[className],
        [name]: value,
      },
    });
  };

  const handleRefundChange = (e, className) => {
    const { value } = e.target;
    const refundValue = value === "Có" ? true : false;
    setTicketData({
      ...ticketData,
      [className]: {
        ...ticketData[className],
        refund: refundValue,
      },
    });
  };

  const [legData, setLegData] = useState([
    {
      departureAirport: null,
      arrivalAirport: null,
      departureTime: null,
      arrivalTime: null,
      airplane: null,
    },
  ]);

  const handleInputChangeLeg = (e, index) => {
    const { name, value } = e.target;
    const updatedLegData = [...legData];
    updatedLegData[index] = {
      ...updatedLegData[index],
      [name]: value,
    };
    setLegData(updatedLegData);
  };

  const handleSubmit = () => {
    console.log("weekdays: ", weekdays);
    console.log("Thông tin các loại vé: ", ticketData);
    console.log("Thông tin các chặng bay: ", legData);
  };

  return (
    <div className="w-[60vw] justify-self-center m-5">
      {/* Chọn ngày trong tuần */}
      <div className="mb-5">
        <FormControl fullWidth>
          <InputLabel id="select-days-label">Chọn ngày trong tuần</InputLabel>
          <Select
            labelId="select-days-label"
            value={selectedDays || ""}
            onChange={handleDayChange}
            label="Chọn ngày trong tuần"
          >
            {daysOfWeek.map((day) => (
              <MenuItem key={day.value} value={day.value}>
                {day.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* bảng thêm chặng bay */}
      <div className="mb-10">
        <AddFlightLeg
          legData={legData}
          setLegData={setLegData}
          handleInputChangeLeg={handleInputChangeLeg}
          airportOptions={airport.airports}
          airplaneOptions={airplane.airplanes}
        />
      </div>
      {/* bảng thêm vé */}
      <div>
        <AddFlightTicket
          ticketData={ticketData}
          handleInputChangeTicket={handleInputChangeTicket}
          handleRefundChange={handleRefundChange}
        />
      </div>

      <div className="flex justify-between mt-5">
        <Button variant="outlined" onClick={navToFlight}>
          Hủy
        </Button>
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          sx={{
            background: "linear-gradient(to right, #B993D6, #8CA6DB)",
          }}
        >
          Lưu
        </Button>
      </div>
    </div>
  );
};

export default AddFlight;
