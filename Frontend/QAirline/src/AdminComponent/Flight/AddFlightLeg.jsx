import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";

const AddFlightLeg = ({
  legData,
  setLegData,
  handleInputChangeLeg,
  airportOptions,
  airplaneOptions,
}) => {
  const [sharedAirplane, setSharedAirplane] = useState(null);

  useEffect(() => {
    if (sharedAirplane) {
      const updatedLegData = legData.map((leg) => ({
        ...leg,
        airplane: sharedAirplane, 
      }));
      setLegData(updatedLegData);
    }
  }, [sharedAirplane, legData, setLegData]);

  // Thêm chặng bay
  const handleAddFlightLeg = () => {
    setLegData([
      ...legData,
      {
        departureAirport: null,
        arrivalAirport: null,
        departureTime: null,
        arrivalTime: null,
        airplane: sharedAirplane,
      },
    ]);
  };

  // Xóa chặng bay
  const handleRemoveFlightLeg = (index) => {
    if (legData.length > 1) {
      const updatedLegData = legData.filter((_, i) => i !== index);
      setLegData(updatedLegData);
    }
  };

  return (
    <div className="w-[50vw] justify-self-center p-5 bg-indigo-100">
      <div className="mb-4">
        <Typography variant="h4" align="center">
          Thêm chặng bay
        </Typography>
      </div>
      <Paper className="p-5">
        

        {/* Render từng chặng bay */}
        {legData.map((leg, index) => (
          <Box key={index} className="space-y-4 mb-8">
            <Typography variant="h6">Chặng bay {index + 1}</Typography>

            {/* Sân bay khởi hành */}
            <Autocomplete
              options={airportOptions}
              getOptionLabel={(option) => option.name}
              value={leg.departureAirport}
              onChange={(event, newValue) => {
                const updatedLegData = [...legData];
                updatedLegData[index].departureAirport = newValue || null;
                setLegData(updatedLegData);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Nhập hoặc chọn sân bay khởi hành"
                  fullWidth
                />
              )}
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />

            {/* Sân bay đến */}
            <Autocomplete
              options={airportOptions}
              getOptionLabel={(option) => option.name}
              value={leg.arrivalAirport}
              onChange={(event, newValue) => {
                const updatedLegData = [...legData];
                updatedLegData[index].arrivalAirport = newValue || null;
                setLegData(updatedLegData);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Nhập hoặc chọn sân bay đích đến"
                  fullWidth
                />
              )}
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />

            {/* Thời gian khởi hành */}
            <TextField
              label="Thời gian khởi hành"
              variant="outlined"
              fullWidth
              type="time"
              value={leg.departureTime}
              name="departureTime"
              onChange={(e) => handleInputChangeLeg(e, index)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />

            {/* Thời gian đến */}
            <TextField
              label="Thời gian đến"
              variant="outlined"
              fullWidth
              type="time"
              value={leg.arrivalTime}
              name="arrivalTime"
              onChange={(e) => handleInputChangeLeg(e, index)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />

            {/* Loại máy bay  */}
            <Autocomplete
              options={airplaneOptions}
              getOptionLabel={(option) => option.model}
              value={sharedAirplane}
              onChange={(event, newValue) => setSharedAirplane(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Loại máy bay cho tất cả chặng bay"
                  fullWidth
                  disabled
                />
              )}
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />

            {/* Nút xóa chặng bay */}
            <Box textAlign="right">
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleRemoveFlightLeg(index)}
                disabled={legData.length === 1}
              >
                Xóa chặng bay
              </Button>
            </Box>
          </Box>
        ))}

        {/* Nút thêm chặng bay */}
        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddFlightLeg}
          >
            Thêm chặng bay
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default AddFlightLeg;
