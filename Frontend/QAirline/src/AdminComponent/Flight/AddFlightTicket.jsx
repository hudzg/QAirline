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
  // không cho nhập giá trị âm
  const handleNonNegativeInputChange = (e, className) => {
    const { name, value } = e.target;
    if (value >= 0) {
      handleInputChangeTicket(e, className);
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
        {["FIRST_CLASS", "BUSINESS_CLASS", "ECONOMY_CLASS"].map((className) => (
          <Box key={className} className="space-y-4 mb-8">
            <Typography variant="h6">
              {className === "FIRST_CLASS"
                ? "Hạng nhất"
                : className === "BUSINESS_CLASS"
                ? "Hạng thương gia"
                : "Hạng phổ thông"}
            </Typography>
            {/* Số lượng vé */}
            <TextField
              label="Số lượng vé"
              type="number"
              fullWidth
              name="amount"
              value={ticketData[className].amount}
              onChange={(e) => handleNonNegativeInputChange(e, className)}
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
              value={ticketData[className].price}
              onChange={(e) => handleNonNegativeInputChange(e, className)}
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
              value={ticketData[className].checkedBaggage}
              onChange={(e) => handleNonNegativeInputChange(e, className)}
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
              value={ticketData[className].carryOnBaggage}
              onChange={(e) => handleNonNegativeInputChange(e, className)}
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
              value={ticketData[className].refund ? "Có" : "Không"}
              onChange={(e) => handleRefundChange(e, className)}
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
