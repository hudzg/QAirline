import { Typography, Paper, Button } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";


const FlightCard = () => {
  return (
    <div className="">
      <Paper elevation={6} className="mb-3">
        <div className="flex justify-between items-center p-3">
          <div>
            <Typography>Khởi hành</Typography>
            <Typography>HANOI</Typography>
            <Typography>12:00</Typography>
          </div>
          <div>
            <DoubleArrowIcon />
          </div>
          <div>
            <Typography>Đích đến</Typography>
            <Typography>LANGSON</Typography>
            <Typography>19:00</Typography>
          </div>
        </div>
      </Paper>
      <Button 
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #B993D6, #8CA6DB)",
            }}
          >
            Xóa
          </Button>
    </div>
  );
};

export default FlightCard;
