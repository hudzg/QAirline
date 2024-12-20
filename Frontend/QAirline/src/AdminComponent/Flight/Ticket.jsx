import { Typography, Paper, Button, Divider } from "@mui/material";



const Ticket = ({ ticketsInfo }) => {
  const flightClass = {
  ECONOMY_CLASS: { label: "Hạng phổ thông", color: "#B993D6" },
  BUSINESS_CLASS: { label: "Hạng thương gia", color: "#A2A6DB" },
  FIRST_CLASS: { label: "Hạng nhất", color: "#8CA6DB" },
};    

  return (
    <div>
      {ticketsInfo.map((ticket, index) => (
        <Paper key={index} elevation={6} className="flex mb-3">
          <div className="bg-gray-100 flex-grow-[4] p-2">
            <div
              className=""
              style={{
                // backgroundColor: flightClass[ticket.flightClass].color,
              }}
            >
              <Typography variant="h6">
                {ticket.ticketClass === "FIRST_CLASS"
                ? "Hạng nhất"
                : ticket.ticketClass === "BUSINESS_CLASS"
                ? "Hạng thương gia"
                : "Hạng phổ thông"}
              </Typography>
            </div>
            <Divider/>
            <div>
              <Typography variant="body1">
                Số lượng vé: {ticket.amount}
              </Typography>
              <Typography variant="body1">
                Giá vé: {ticket.price} (VNĐ)
              </Typography>
              <Typography variant="body1">
                Hành lý kí gửi tối đa: {ticket.checkedBaggage} (KG)
              </Typography>
              <Typography variant="body1">
                Hành lý mang theo tối đa: {ticket.carryOnBaggage} (KG)
              </Typography>
              <Typography variant="body1">
                Hoàn vé: {ticket.refund === true ? "có" : "không"}
              </Typography>
            </div>
          </div>

          <Divider orientation="vertical" flexItem />
        </Paper>
      ))}
    </div>
  );
};

export default Ticket;
