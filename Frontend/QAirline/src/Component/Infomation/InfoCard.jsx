import { Card, TextField, Typography, MenuItem, Select, InputLabel, FormControl, FormHelperText } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import React, { useState } from "react";

const InfoCard = () => {
  const [gender, setGender] = useState("");
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <Card className="m-5 p-5">
        <div>
          <Typography variant="h5" align="center">Hành khách 1</Typography>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-5">
          <TextField label="Title" fullWidth variant="standard" />
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
      </Card>
    </div>
  );
};

export default InfoCard;
