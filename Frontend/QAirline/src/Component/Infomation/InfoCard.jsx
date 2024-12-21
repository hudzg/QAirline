import {
  Card,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
  FormHelperText,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";

const InfoCard = ({ infor, updateInfor }) => {
  const handleChange = (field, value) => {
    // console.log(field, value);
    updateInfor(infor.id, { [field]: value });
  };

  return (
    <div>
      <Paper className="mt-5 mb-5 p-5">
        <div>
          <Typography variant="h5" align="center">
            Hành khách {infor.id}
          </Typography>
        </div>
        <div className="">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <TextField
                label="Căn cước công dân"
                fullWidth
                variant="standard"
                value={infor.citizenId}
                onChange={(e) => handleChange("citizenId", e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <TextField
                label="Tên"
                fullWidth
                variant="standard"
                value={infor.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <TextField
                label="Họ đệm"
                fullWidth
                variant="standard"
                value={infor.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <TextField
                label="Số điện thoại"
                fullWidth
                variant="standard"
                value={infor.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Ngày sinh"
                  slotProps={{
                    textField: {
                      variant: "standard",
                      fullWidth: true,
                    },
                  }}
                  value={infor.dob}
                  onChange={(newValue) => handleChange("dob", newValue)}
                />
              </LocalizationProvider>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <FormControl variant="standard" fullWidth>
                <InputLabel>Giới tính</InputLabel>
                <Select
                  value={infor.gender}
                  onChange={(e) => handleChange("gender", e.target.value)}
                  label="Giới tính"
                  displayEmpty
                >
                  <MenuItem value="male">Nam</MenuItem>
                  <MenuItem value="female">Nữ</MenuItem>
                  <MenuItem value="other">Khác</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

        </div>
      </Paper>
    </div>
  );
};

export default InfoCard;
