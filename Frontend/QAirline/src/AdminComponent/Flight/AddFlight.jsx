import {
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddFlightTicket from "./AddFlightTicket";
import AddFlightLeg from "./AddFlightLeg";
import { getAllAirport } from "../../State/Airport/Action";
import { getAllAirplane } from "../../State/Airplane/Action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createFlight } from "../../State/FlightAdmin/Action";

const AddFlight = () => {
  const navigate = useNavigate();

  const jwt = localStorage.getItem("jwt");
  const airport = useSelector((store) => store.airport);
  const airplane = useSelector((store) => store.airplane);
  const dispatch = useDispatch();

  const [weekdays, setWeekDays] = useState(0);

  const [selectedDays, setSelectedDays] = useState([]);
  const daysOfWeek = [
    { label: "Thứ Hai", value: 0 },
    { label: "Thứ Ba", value: 1 },
    { label: "Thứ Tư", value: 2 },
    { label: "Thứ Năm", value: 3 },
    { label: "Thứ Sáu", value: 4 },
    { label: "Thứ Bảy", value: 5 },
    { label: "Chủ Nhật", value: 6 },
  ];

  useEffect(() => {
    dispatch(getAllAirport({ jwt }));
    dispatch(getAllAirplane({ jwt }));
  }, []);

  const [legData, setLegData] = useState([
    {
      departureAirport: null,
      arrivalAirport: null,
      departureTime: null,
      arrivalTime: null,
      airplane: null,
    },
  ]);

  const [ticketData, setTicketData] = useState([
    {
      ticketClass: "FIRST_CLASS",
      amount: 0,
      price: 0,
      refund: false,
      checkedBaggage: 0,
      carryOnBaggage: 0,
    },
    {
      ticketClass: "BUSINESS_CLASS",
      amount: 0,
      price: 0,
      refund: false,
      checkedBaggage: 0,
      carryOnBaggage: 0,
    },
    {
      ticketClass: "ECONOMY_CLASS",
      amount: 0,
      price: 0,
      refund: false,
      checkedBaggage: 0.0,
      carryOnBaggage: 0.0,
    },
  ]);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  //chuyển về flight
  const navToFlight = () => {
    navigate("/admin/flight");
  };

  //nhập ticket data
  const handleInputChangeTicket = (e, index) => {
    const { name, value } = e.target;
    setTicketData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = {
        ...updatedData[index],
        [name]: value,
      };
      return updatedData;
    });
  };

  const handleRefundChange = (e, index) => {
    const { value } = e.target;
    const refundValue = value === "Có" ? true : false;
    setTicketData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = {
        ...updatedData[index],
        refund: refundValue,
      };
      return updatedData;
    });
  };

  const handleInputChangeLeg = (e, index) => {
    const { name, value } = e.target;
    const updatedLegData = [...legData];
    updatedLegData[index] = {
      ...updatedLegData[index],
      [name]: value,
    };
    setLegData(updatedLegData);
  };

  //chọn thú trong tuần
  const handleDayChange = (valueDay) => {
    let newWeekdays = weekdays;

    if (!selectedDays.includes(valueDay)) {
      newWeekdays += Math.pow(2, valueDay); // Thêm ngày mới vào `weekdays`
      setSelectedDays((prev) => [...prev, valueDay]);
    } else {
      newWeekdays -= Math.pow(2, valueDay); // Loại bỏ ngày khỏi `weekdays`
      setSelectedDays((prev) => prev.filter((day) => day !== valueDay));
    }

    setWeekDays(newWeekdays);
  };

  // chọn tất cả weekdays
  const handleSelectAll = () => {
    if (selectedDays.length === daysOfWeek.length) {
      setSelectedDays([]);
      setWeekDays(0);
    } else {
      const allDays = daysOfWeek.map((day) => day.value);
      setSelectedDays(allDays);

      // Cập nhật `weekdays` bằng cách tổng hợp tất cả giá trị
      const allWeekdays = allDays.reduce(
        (acc, day) => acc | Math.pow(2, day),
        0
      );
      setWeekDays(allWeekdays);
    }
  };

  const handleSubmit = () => {
    // console.log("weekdays: ", weekdays);
    // console.log("Thông tin các loại vé: ", ticketData);
    // console.log("Thông tin các chặng bay: ", legData);
    const newFlight = {
      weekdays: weekdays,
      flightLegs: legData,
      tickets: ticketData,
    };
    // console.log("newFlight: ", newFlight);

    dispatch(createFlight({ reqData: newFlight, jwt }));
    setLegData([
      {
        departureAirport: null,
        arrivalAirport: null,
        departureTime: null,
        arrivalTime: null,
        airplane: null,
      },
    ]);

    setTicketData([
      {
        ticketClass: "FIRST_CLASS",
        amount: 0,
        price: 0,
        refund: false,
        checkedBaggage: 0,
        carryOnBaggage: 0,
      },
      {
        ticketClass: "BUSINESS_CLASS",
        amount: 0,
        price: 0,
        refund: false,
        checkedBaggage: 0,
        carryOnBaggage: 0,
      },
      {
        ticketClass: "ECONOMY_CLASS",
        amount: 0,
        price: 0,
        refund: false,
        checkedBaggage: 0.0,
        carryOnBaggage: 0.0,
      },
    ]);
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="w-[60vw] justify-self-center m-5">
      {/* Hàng chọn ngày trong tuần */}
      <div className="mb-5 flex justify-center gap-2">
        <Button
          variant={
            selectedDays.length === daysOfWeek.length ? "contained" : "outlined"
          }
          onClick={handleSelectAll}
          sx={{
            textTransform: "none",
            backgroundColor:
              selectedDays.length === daysOfWeek.length
                ? "primary.main"
                : "inherit",
            color:
              selectedDays.length === daysOfWeek.length ? "white" : "inherit",
          }}
        >
          {selectedDays.length === daysOfWeek.length
            ? "Bỏ chọn tất cả"
            : "Chọn tất cả"}
        </Button>

        {daysOfWeek.map((day) => (
          <Button
            key={day.value}
            variant={
              selectedDays.includes(day.value) ? "contained" : "outlined"
            }
            onClick={() => handleDayChange(day.value)}
            sx={{
              textTransform: "none",
              backgroundColor: selectedDays.includes(day.value)
                ? "primary.main"
                : "inherit",
              color: selectedDays.includes(day.value) ? "white" : "inherit",
            }}
          >
            {day.label}
          </Button>
        ))}
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
          airplane={legData[0].airplane}
          setTicketData = {setTicketData}
        />
      </div>

      <div className="flex justify-between mt-5 pr-60 pl-60">
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          sx={{
            width: "100%",
            backgroundColor: "rgb(212, 255, 218)",
            color: "rgb(120, 120, 120)",
            fontWeight: "bold",
          }}
        >
          Thêm chuyến bay thành công!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddFlight;
