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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const AddFlight = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    numOfLeg: 0,
    airplane: "",
    ticketTypes: {
      firstTicket: false,
      businessTicket: false,
      economyTicket: false,
    },
  });

  const airplanes = ["Airbus A320", "Boeing 737", "Cessna 172"];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu chuyến bay:", formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Thêm chuyến bay</DialogTitle>
      <DialogContent>
        <Paper elevation={6} className="p-5">
          <form className="space-y-4">
            <TextField
              label="Số chặng bay"
              variant="outlined"
              fullWidth
              value={formData.numOfLeg}
              name="numOfLeg"
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
            <Typography variant="h6">Chọn loại vé</Typography>
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
          </form>
        </Paper>
      </DialogContent>
      <DialogActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            pl: 2,
            pr: 2,
          }}
        >
          <Button onClick={onClose} variant="outlined">
            Hủy
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #B993D6, #8CA6DB)",
            }}
          >
            Lưu
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default AddFlight;
