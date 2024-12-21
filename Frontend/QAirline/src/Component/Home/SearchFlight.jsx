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
import React, { forwardRef, useEffect, useState } from "react";
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

const SearchFlight = forwardRef((props, ref) => {
  const airport = useSelector((store) => store.airport);
  const selectedHightlightFlight = useSelector(
    (store) => store.flight.selectedHightlightFlight
  );
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    departureAirport: null,
    arrivalAirport: null,
    departureTime: null,
    arrivalTime: null,
    departureAirportInput: "",
    arrivalAirportInput: "",
    numPassenger: 1,
  });

  const [formError, setFormError] = useState({
    departureAirport: false,
    arrivalAirport: false,
    departureTime: false,
    arrivalTime: false,
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

  useEffect(() => {
    if (selectedHightlightFlight.departureAirport) {
      console.log(
        "selectedHightlightFlight",
        selectedHightlightFlight.departureAirport
      );
      setFormData({
        ...formData,
        departureAirport: {
          label: `${selectedHightlightFlight.departureAirport.name} (${selectedHightlightFlight.departureAirport.iata}), ${selectedHightlightFlight.departureAirport.country}`,
          airport: selectedHightlightFlight.departureAirport,
        },
        arrivalAirport: {
          label: `${selectedHightlightFlight.arrivalAirport.name} (${selectedHightlightFlight.arrivalAirport.iata}), ${selectedHightlightFlight.arrivalAirport.country}`,
          airport: selectedHightlightFlight.arrivalAirport,
        },
        // departureAirportInput: selectedHightlightFlight.departureAirport.name,
        // arrivalAirportInput: selectedHightlightFlight.arrivalAirport.name,
        flightType: selectedHightlightFlight.flightType,
      });
    }
  }, [selectedHightlightFlight]);

  const validate = () => {
    const newFormError = {
      ...formError,
      departureAirport: formData.departureAirport === null ? "error" : false,
      arrivalAirport: formData.arrivalAirport === null ? "error" : false,
      departureTime: formData.departureTime === null ? "error" : false,
    };

    if (flightType === "round-trip") {
      newFormError.arrivalTime =
        formData.arrivalTime === null ? "error" : false;
    }

    setFormError(newFormError);

    console.log(newFormError);

    return Object.values(newFormError).every((value) => value === false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    if (!validate()) return;
    const reqData = {
      departureAirport: formData.departureAirport.airport,
      arrivalAirport: formData.arrivalAirport.airport,
      departureTime: formData.departureTime.format("YYYY-MM-DD"),
      arrivalTime:
        formData.arrivalTime === null
          ? null
          : formData.arrivalTime.format("YYYY-MM-DD"),
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
    <Paper elevation={4} className="p-10 w-[90vw] lg:w-[60vw] m-auto mb-5">
      <div ref={ref} className="text-2xl space-x-2 flex items-center">
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
                onChange={(e) => {
                  setflightType(e.target.value);
                  if (e.target.value === "one-way") {
                    setFormData({ ...formData, arrivalTime: null });
                    setFormError({ ...formError, arrivalTime: false });
                  }
                }}
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
                // if (!newValue) formError.departureAirport = "error";
                // else formError.departureAirport = false;
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
                <TextField
                  {...params}
                  error={formError.departureAirport ? true : false}
                  helperText={formError.departureAirport}
                  label="Sân bay khởi hành"
                />
              )}
              // error={formError.departureAirport ? true : false}
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
                <TextField
                  error={formError.arrivalAirport ? true : false}
                  helperText={formError.arrivalAirport}
                  {...params}
                  label="Sân bay đến"
                />
              )}
            />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                slotProps={{
                  textField: {
                    error: formError.departureTime ? true : false,
                    helperText: formError.departureTime,
                  },
                }}
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
                slotProps={{
                  textField: {
                    error: formError.arrivalTime ? true : false,
                    helperText: formError.arrivalTime,
                  },
                }}
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
});

export default SearchFlight;
