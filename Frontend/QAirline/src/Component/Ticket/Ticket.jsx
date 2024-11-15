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

const InfoField = ({ label, value }) => (
  <div>
    <Typography variant="caption" color="textSecondary">
      {label}
    </Typography>
    <Typography variant="body1">{value}</Typography>
  </div>
);

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
              <InfoField label={"Mã chuyến bay"} value={"ABC123"}/>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-center">
                <InfoField label={"Khởi hành"} value={"HANOI"}/>   
              </div>
              <DoubleArrowIcon />
              <div className="text-center">
                <InfoField label={"Điểm đến"} value={"DANANG"}/>
              </div>
            </div>
          </div>
          <div>
            <div>
              <InfoField label={"Giờ khởi hành"} value={"12:00"}/>
            </div>
            <div>
              <InfoField label={"Giờ hạ cánh(dự kiến)"} value={"16:00"}/>
            </div>
          </div>
          <div>
          <InfoField label={"Hành khách"} value={"Hoàng Công Hữu"}/>
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
