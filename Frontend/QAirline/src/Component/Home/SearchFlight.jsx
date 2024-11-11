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
import React from "react";
import Grid from "@mui/material/Grid2";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import dayjs from "dayjs";

const airports = [
  { label: "Hà Nội" },
  { label: "Hồ Chí Minh" },
  { label: "Đà Nẵng" },
];

const SearchFlight = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Paper elevation={4} className="p-5 w-[50vw] m-auto mb-5">
      <h1 className="text-2xl">Tìm chuyến bay</h1>
      <form onSubmit={handleSubmit} className="mt-5">
        <Grid container spacing={2} className="mb-5">
          <Grid size={12}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="round-trip"
                name="radio-buttons-group"
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
          <Grid size={6}>
            <Autocomplete
              fullWidth
              disablePortal
              options={airports}
              //   sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Sân bay khởi hành" />
              )}
            />
          </Grid>
          <Grid size={6}>
            <Autocomplete
              fullWidth
              disablePortal
              options={airports}
              //   sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Sân bay đến" />
              )}
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Ngày đi"
                value={dayjs("2022-04-17T15:30")}
                // onChange={(newValue) => handleDateChange(newValue, "startedAt")}
                className="w-full"
              />
            </LocalizationProvider>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Ngày về"
                value={dayjs("2022-04-17T15:30")}
                // onChange={(newValue) => handleDateChange(newValue, "startedAt")}
                className="w-full"
              />
            </LocalizationProvider>
          </Grid>
          <Grid size={6}>
            <FormControl fullWidth>
              <InputLabel id="passenger-select-label">Hành khách</InputLabel>
              <Select
                labelId="passenger-select-label"
                id="passenger-select"
                // value={age}
                label="Hành khách"
                // onChange={handleChange}
              >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={6}>
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
          </Grid>
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
