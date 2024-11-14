import {
  Card,
  Paper,
  Typography,
  Divider,
  Box,
  TextField,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

const Ticket = () => {
  return (
    <div className="mb-5">
      <Paper elevation={6} className="flex">
        <div className="bg-gray-100 flex-grow-[4] p-2">
          <div className="flex justify-center mb-2">
            <Typography variant="h4">Hạng thương gia</Typography>
          </div>
          <Divider />
          <div className="flex items-center justify-between">
            <div>
              <Typography variant="caption" color="textSecondary">
                Mã chuyến bay
              </Typography>
              <Typography variant="body1">ABC123</Typography>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-center">
                <Typography variant="caption" color="textSecondary">
                  Khởi hành
                </Typography>
                <Typography variant="body1">HANOI</Typography>
              </div>
              <DoubleArrowIcon />
              <div className="text-center">
                <Typography variant="caption" color="textSecondary">
                  Điểm đến
                </Typography>
                <Typography variant="body1">DANANG</Typography>
              </div>
            </div>
          </div>
          <div>
            <Typography variant="caption" color="textSecondary">
              Hành khách
            </Typography>
            <Typography variant="body1">Hoàng Công Hữu</Typography>
          </div>
        </div>

        <Divider orientation="vertical" flexItem />

        <Box
          className="flex-grow-0"
          sx={{
            flexBasis: "20%",
            background: "linear-gradient(to right, #B993D6, #8CA6DB)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: 1,
          }}
        >
          <Typography variant="h5">QAirline</Typography>
          <AirplaneTicketIcon
            sx={{
              fontSize: 100,
            }}
          />
          <Typography variant="body2" className="break-words">
            Cảm ơn bạn đã lựa chọn chúng tôi.
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default Ticket;
