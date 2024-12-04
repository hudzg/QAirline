import React, { useState } from "react";
import {
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const AddFlight = () => {
  const [formData, setFormData] = useState({
    legNumber: 0,
    airplane: "",
    departureAirport: "",
    arrivalAirport: "",
    departureTime: "",
    arrivalTime: "",
    ticketTypes: {
      firstTicket: false,
      businessTicket: false,
      economyTicket: false,
    },
  });

  const airplanes = ["Airbus A320", "Boeing 737", "Cessna 172"];
  const airports = ["Nội bài (HAN)", "Tân Sơn Nhất (SGN)"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      ticketTypes: {
        ...formData.ticketTypes,
        [name]: checked,
      },
    });
  };

  const handleClose = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu chặng bay:", formData);
  };

  return (
    <div className="w-[50vw] justify-self-center mx-auto m-4 p-5 bg-indigo-100">
      <div className="mb-4">
        <Typography variant="h4">Thêm chuyến bay</Typography>
      </div>
      <Paper className="p-5">
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Số chặng bay"
            variant="outlined"
            fullWidth
            value={formData.legNumber}
            name="legNumber"
            onChange={handleInputChange}
          />
          <FormControl fullWidth>
            <InputLabel>Máy bay</InputLabel>
            <Select
              label="Máy bay"
              value={formData.airplane}
              name="airplane"
              onChange={handleInputChange}
            >
              {airplanes.map((plane, index) => (
                <MenuItem key={index} value={plane}>
                  {plane}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Sân bay khởi hành</InputLabel>
            <Select
              label="Sân bay khởi hành"
              value={formData.departureAirport}
              name="departureAirport"
              onChange={handleInputChange}
            >
              {airports.map((airport, index) => (
                <MenuItem key={index} value={airport}>
                  {airport}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Thời gian khởi hành"
            type="datetime-local"
            variant="outlined"
            fullWidth
            value={formData.departureTime}
            name="departureTime"
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
          <FormControl fullWidth>
            <InputLabel>Sân bay hạ cánh</InputLabel>
            <Select
              label="Sân bay hạ cánh"
              value={formData.arrivalAirport}
              name="arrivalAirport"
              onChange={handleInputChange}
            >
              {airports.map((airport, index) => (
                <MenuItem key={index} value={airport}>
                  {airport}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Thời gian hạ cánh"
            type="datetime-local"
            variant="outlined"
            fullWidth
            value={formData.arrivalTime}
            name="arrivalTime"
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />

          <Typography variant="h6" className="">
            Chọn loại vé
          </Typography>
          <Box className="space-x-5">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.ticketTypes.firstTicket}
                  onChange={handleCheckboxChange}
                  name="firstTicket"
                />
              }
              label="Hạng nhất"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.ticketTypes.businessTicket}
                  onChange={handleCheckboxChange}
                  name="businessTicket"
                />
              }
              label="Hạng thương gia"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.ticketTypes.economyTicket}
                  onChange={handleCheckboxChange}
                  name="economyTicket"
                />
              }
              label="Hạng phổ thông"
            />
          </Box>

          <Box className="flex justify-between">
            <Button onClick={handleClose} variant="outlined">
              Quay lại
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              type="submit"
              sx={{
                background: "linear-gradient(to right, #B993D6, #8CA6DB)",
              }}
            >
              Tiếp tục
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default AddFlight;
