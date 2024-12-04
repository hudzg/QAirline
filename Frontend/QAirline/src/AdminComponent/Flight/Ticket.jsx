import { Typography, Paper, Button, Divider } from "@mui/material";

const flightClass = {
  ECONOMY_CLASS: { label: "Hạng phổ thông", color: "#B993D6" },
  BUSINESS_CLASS: { label: "Hạng thương gia", color: "#A2A6DB" },
  FIRST_CLASS: { label: "Hạng nhất", color: "#8CA6DB" },
};

const Ticket = ({ ticketInfo }) => {
  return (
    <div>
      <Paper elevation={6} className="flex mb-3">
        <div className="bg-gray-100 flex-grow-[4] p-2">
          <div
            className={`flex justify-center`}
            style={{
              backgroundColor: flightClass[ticketInfo.flightClass].color,
            }}
          >
            <Typography variant="h4" color="primary.contrastText">
              {flightClass[ticketInfo.flightClass].label}
            </Typography>
          </div>
          <div>
            <Typography variant="body1">
              Số lượng vé: {ticketInfo.amount}
            </Typography>
            <Typography variant="body1">Giá vé: {ticketInfo.price} (VNĐ)</Typography>
            <Typography variant="body1">
              Hành lý kí gửi tối đa: {ticketInfo.checkedBaggage} (KG)
            </Typography>
            <Typography variant="body1">
              Hành lý mang theo tối đa: {ticketInfo.carryOnBaggage} (KG)
            </Typography>
            <Typography variant="body1">
              Hoàn tiền/vé: {ticketInfo.refund === true ? "có" : "không"}
            </Typography>
          </div>
        </div>

        <Divider orientation="vertical" flexItem />
      </Paper>
    </div>
  );
};

export default Ticket;
