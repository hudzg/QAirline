import React from "react";
import {
  Typography,
  Paper,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const AddFlightTicket = ({
  ticketData,
  handleInputChangeTicket,
  handleRefundChange,
}) => {
  const handleNonNegativeInputChange = (e, index) => {
    const { name, value } = e.target;
  
    const numericValue = name === "amount" || name === "price" || name === "checkedBaggage" || name === "carryOnBaggage" 
      ? value === "" ? 0 : Number(value)  
      : value;

    if (numericValue >= 0 || (name === "refund" && (value === "Có" || value === "Không"))) {
      handleInputChangeTicket(e, index);
    }
  };
  
  

  return (
    <div className="w-[50vw] justify-self-center mx-auto p-5 bg-indigo-100">
      <div className="mb-4">
        <Typography variant="h4" align="center">
          Thêm loại vé
        </Typography>
      </div>
      <Paper className="p-5">
        {ticketData.map((ticket, index) => (
          <Box key={index} className="space-y-4 mb-8">
            <Typography variant="h6">
              {ticket.ticketClass === "FIRST_CLASS"
                ? "Hạng nhất"
                : ticket.ticketClass === "BUSINESS_CLASS"
                ? "Hạng thương gia"
                : "Hạng phổ thông"}
            </Typography>
            {/* Số lượng vé */}
            <TextField
              label="Số lượng vé"
              type="number"
              fullWidth
              name="amount"
              value={ticket.amount}
              onChange={(e) => handleNonNegativeInputChange(e, index)}
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />
            {/* Giá vé */}
            <TextField
              label="Giá vé"
              type="number"
              fullWidth
              name="price"
              value={ticket.price}
              onChange={(e) => handleNonNegativeInputChange(e, index)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">VNĐ</InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />
            {/* Hành lý ký gửi */}
            <TextField
              label="Hành lý ký gửi"
              type="number"
              fullWidth
              name="checkedBaggage"
              value={ticket.checkedBaggage}
              onChange={(e) => handleNonNegativeInputChange(e, index)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">KG</InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />
            {/* Hành lý mang theo */}
            <TextField
              label="Hành lý mang theo"
              type="number"
              fullWidth
              name="carryOnBaggage"
              value={ticket.carryOnBaggage}
              onChange={(e) => handleNonNegativeInputChange(e, index)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">KG</InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />
            {/* Hoàn vé */}
            <TextField
              label="Hoàn vé"
              select
              fullWidth
              value={ticket.refund ? "Có" : "Không"}
              onChange={(e) => handleRefundChange(e, index)}
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            >
              <MenuItem value="Có">Có</MenuItem>
              <MenuItem value="Không">Không</MenuItem>
            </TextField>
          </Box>
        ))}
      </Paper>
    </div>
  );
};

export default AddFlightTicket;
