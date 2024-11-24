import { Card, TextField, Typography, MenuItem, Select, InputLabel, FormControl, Paper, FormHelperText } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import React, { useState } from "react";

const InfoCard = () => {
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const [gender, setGender] = useState("");
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <Paper className="mt-5 mb-5 p-5">
        <div>
          <Typography variant="h5" align="center">Hành khách 1</Typography>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-5">
        <FormControl variant="standard" fullWidth>
            <InputLabel>Danh xưng</InputLabel>
            <Select
              value={title}
              onChange={handleTitleChange}
              label="Danh xưng"
              displayEmpty
            >
              <MenuItem value="Ông">Ông</MenuItem>
              <MenuItem value="Bà">Bà</MenuItem>
              <MenuItem value="Anh">Anh</MenuItem>
              <MenuItem value="Chị">Chị</MenuItem>

            </Select>
          </FormControl>
          <TextField label="Tên" fullWidth variant="standard" />
          <TextField label="Họ đệm" fullWidth variant="standard" />
          <TextField label="Số điện thoại" fullWidth variant="standard" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Ngày sinh"
              slotProps={{
                textField: {
                  variant: "standard",
                  fullWidth: true,
                },
              }}
            />
          </LocalizationProvider>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Giới tính</InputLabel>
            <Select
              value={gender}
              onChange={handleGenderChange}
              label="Giới tính"
              displayEmpty
            >
              <MenuItem value="Nam">Nam</MenuItem>
              <MenuItem value="Nữ">Nữ</MenuItem>
              <MenuItem value="Khác">Khác</MenuItem>
            </Select>
          </FormControl>

        </div>
      </Paper>
    </div>
  );
};

export default InfoCard;
