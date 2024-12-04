import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import dayjs from "dayjs";
import FlightIcon from "@mui/icons-material/Flight";
import { useDispatch, useSelector } from "react-redux";
import { getAllAirport } from "../../State/Airport/Action";
import {
  addGetFlightRequest,
  addGetInboundFlightRequest,
} from "../../State/Flight/Action";
import { useNavigate } from "react-router-dom";

const SearchFlight = () => {
  const airport = useSelector((store) => store.airport);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    departureAirport: null,
    arrivalAirport: null,
    departureTime: dayjs(),
    arrivalTime: dayjs(),
    departureAirportInput: "",
    arrivalAirportInput: "",
    numPassenger: 1,
  });

  const [flightType, setflightType] = useState("round-trip");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(getAllAirport({ jwt }));
    // console.log("getAllAirport");
    // console.log(
    //   airport.airports.map((item) => ({
    //     label: `${item.name} (${item.iata}), ${item.country}`,
    //   }))
    // );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    const reqData = {
      departureAirport: formData.departureAirport.airport,
      arrivalAirport: formData.arrivalAirport.airport,
      departureTime: formData.departureTime.format("YYYY-MM-DD"),
      arrivalTime: formData.arrivalTime.format("YYYY-MM-DD"),
      numPassenger: formData.numPassenger,
      flightType: flightType,
    };
    console.log(reqData);
    dispatch(addGetFlightRequest(reqData));
    if (flightType === "round-trip") {
      const InReqData = {
        departureAirport: formData.arrivalAirport.airport,
        arrivalAirport: formData.departureAirport.airport,
        departureTime: formData.arrivalTime.format("YYYY-MM-DD"),
        arrivalTime: formData.departureTime.format("YYYY-MM-DD"),
        numPassenger: formData.numPassenger,
        flightType: flightType,
      };
      dispatch(addGetInboundFlightRequest(InReqData));
    }
    navigate("/booking");
  };
  return (
    <Paper elevation={4} className="p-10 w-[60vw] m-auto mb-5">
      <div className="text-2xl space-x-2 flex items-center">
        <FlightIcon fontSize="large" />
        <h1>Tìm kiếm chuyến bay</h1>
      </div>
      <form onSubmit={handleSubmit} className="mt-5">
        <Grid container spacing={2} className="mb-5">
          <Grid size={{ lg: 12, xs: 12 }}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                // defaultValue={flightType}
                name="radio-buttons-group"
                value={flightType}
                onChange={(e) => setflightType(e.target.value)}
              >
                <FormControlLabel
                  value="round-trip"
                  control={<Radio />}
                  label="Khứ hồi"
                />
                <FormControlLabel
                  value="one-way"
                  control={<Radio />}
                  label="Một chiều"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Autocomplete
              fullWidth
              disablePortal
              value={formData.departureAirport}
              onChange={(event, newValue) => {
                setFormData({
                  ...formData,
                  departureAirport: newValue,
                });
              }}
              inputValue={formData.departureAirportInput}
              onInputChange={(event, newInputValue) => {
                setFormData({
                  ...formData,
                  departureAirportInput: newInputValue,
                });
              }}
              options={airport.airports.map((item) => ({
                label: `${item.name} (${item.iata}), ${item.country}`,
                airport: item,
              }))}
              //   sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Sân bay khởi hành" />
              )}
            />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Autocomplete
              fullWidth
              disablePortal
              value={formData.arrivalAirport}
              onChange={(event, newValue) => {
                setFormData({
                  ...formData,
                  arrivalAirport: newValue,
                });
              }}
              inputValue={formData.arrivalAirportInput}
              onInputChange={(event, newInputValue) => {
                setFormData({
                  ...formData,
                  arrivalAirportInput: newInputValue,
                });
              }}
              options={airport.airports.map((item) => ({
                label: `${item.name} (${item.iata}), ${item.country}`,
                airport: item,
              }))}
              //   sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Sân bay đến" />
              )}
            />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Ngày đi"
                value={formData.departureTime}
                onChange={(newValue) =>
                  setFormData({
                    ...formData,
                    departureTime: newValue,
                  })
                }
                className="w-full"
              />
            </LocalizationProvider>
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                disabled={flightType === "one-way"}
                label="Ngày về"
                value={formData.arrivalTime}
                onChange={(newValue) =>
                  setFormData({
                    ...formData,
                    arrivalTime: newValue,
                  })
                }
                className="w-full"
              />
            </LocalizationProvider>
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <FormControl fullWidth>
              <InputLabel id="passenger-select-label">Hành khách</InputLabel>
              <Select
                labelId="passenger-select-label"
                id="passenger-select"
                value={formData.numPassenger}
                label="Hành khách"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    numPassenger: e.target.value,
                  })
                }
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* <Grid size={{ lg: 6, xs: 12 }}>
            <FormControl fullWidth>
              <InputLabel id="class-select-label">Hạng</InputLabel>
              <Select
                labelId="class-select-label"
                id="class-select"
                label="Hạng"
                // value={""}
                // onChange={handleChange}
              >
                <MenuItem value={"economy"}>Phổ thông</MenuItem>
                <MenuItem value={"business"}>Thương gia</MenuItem>
                <MenuItem value={"first"}>Hạng nhất</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
        </Grid>
        <Button
          sx={{
            background: "linear-gradient(to right, #B993D6, #8CA6DB)",
          }}
          className="mt-5"
          variant="contained"
          type="submit"
        >
          Tìm kiếm
        </Button>
      </form>
    </Paper>
  );
};

export default SearchFlight;
