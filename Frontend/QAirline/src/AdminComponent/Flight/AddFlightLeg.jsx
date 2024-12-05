import React from "react";
import { Typography, Paper, Box, TextField, Button } from "@mui/material";

const AddFlightLeg = ({ legData, handleInputChangeLeg }) => {
  return (
    <div className="w-[50vw] justify-self-center mx-auto m-4 p-5 bg-indigo-100">
      <div className="mb-4">
        <Typography variant="h4" align="center">
          Thêm chặng bay
        </Typography>
      </div>
      <Paper className="p-5">
        {legData.map((leg, index) => (
          <Box key={index} className="space-y-4 mb-8">
            <Typography variant="h6">Chặng bay {index + 1}</Typography>
            <TextField
              variant="outlined"
              fullWidth
              value={leg.departureAirport}
              name="departureAirport"
              onChange={(e) => handleInputChangeLeg(e, index)} // Truyền index vào
              placeholder="Nhập sân bay khởi hành"
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />
            <TextField
              variant="outlined"
              fullWidth
              value={leg.arrivalAirport}
              name="arrivalAirport"
              onChange={(e) => handleInputChangeLeg(e, index)} // Truyền index vào
              placeholder="Nhập sân bay đến"
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />
            <TextField
              label="Thời gian khởi hành"
              variant="outlined"
              fullWidth
              type="datetime-local"
              value={leg.departureTime}
              name="departureTime"
              onChange={(e) => handleInputChangeLeg(e, index)} // Truyền index vào
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />
            <TextField
              label="Thời gian đến"
              variant="outlined"
              fullWidth
              type="datetime-local"
              value={leg.arrivalTime}
              name="arrivalTime"
              onChange={(e) => handleInputChangeLeg(e, index)} // Truyền index vào
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />
            <TextField
              label="Loại máy bay"
              variant="outlined"
              fullWidth
              value={leg.airplane}
              name="airplane"
              onChange={(e) => handleInputChangeLeg(e, index)} // Truyền index vào
              placeholder="Nhập loại máy bay"
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
              s
            />
          </Box>
        ))}
      </Paper>
    </div>
  );
};

export default AddFlightLeg;
