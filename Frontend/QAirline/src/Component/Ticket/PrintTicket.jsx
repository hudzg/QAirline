import { Button, Typography } from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';
import Ticket from "./Ticket";

const PrintTicket = () => {
  return (
    <div className="w-[60vw] m-auto mb-5 mt-5 p-5 bg-indigo-50">
      <div>
        <Typography variant="h3" textAlign="Center" gutterBottom>Vé điện tử</Typography>
      </div>
      <div>
        {[1, 1, 1].map(() => (<Ticket/>))}
      </div>
      <div className="flex justify-center">
      <Button
          sx={{
            background: "linear-gradient(to right, #B993D6, #8CA6DB)",
          }}
          className="mt-5"
          variant="contained"
          startIcon={<PrintIcon/>}
        >
          In
        </Button>
      </div>
    </div>
  );
};

export default PrintTicket;