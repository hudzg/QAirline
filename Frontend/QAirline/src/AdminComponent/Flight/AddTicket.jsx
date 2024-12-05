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

const AddTicket = ({
  ticketData,
  handleInputChangeTicket,
  handleRefundChange,
}) => {
  return (
    <div className="w-[50vw] justify-self-center mx-auto m-4 p-5 bg-indigo-100">
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
            <TextField
              label="Số lượng vé"
              type="number"
              fullWidth
              name="amount"
              value={ticketData[className].amount}
              onChange={(e) => handleInputChangeTicket(e, className)}
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            />
            <TextField
              label="Giá vé"
              type="number"
              fullWidth
              name="price"
              value={ticketData[className].price}
              onChange={(e) => handleInputChangeTicket(e, className)}
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
            <TextField
              label="Hành lý ký gửi"
              type="number"
              fullWidth
              name="checkedBaggage"
              value={ticketData[className].checkedBaggage}
              onChange={(e) => handleInputChangeTicket(e, className)}
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
            <TextField
              label="Hành lý mang theo"
              type="number"
              fullWidth
              name="carryOnBaggage"
              value={ticketData[className].carryOnBaggage}
              onChange={(e) => handleInputChangeTicket(e, className)}
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
            <FormControl
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            >
              <Select
                value={ticketData[className].refund ? "Có" : "Không"}
                onChange={(e) => handleRefundChange(e, className)}
              >
                <MenuItem value="Có">Có</MenuItem>
                <MenuItem value="Không">Không</MenuItem>
              </Select>
            </FormControl>
          </Box>
        ))}
      </Paper>
    </div>
  );
};

export default AddTicket;
