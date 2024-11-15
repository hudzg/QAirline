import React, { useRef } from "react";
import { Button, Typography } from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';
import Ticket from "./Ticket";
import { useReactToPrint } from 'react-to-print';

const PrintTicket = () => {
  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    documentTitle: "Vé điện tử",
    contentRef: printRef,
  });
  

  return (
    <div className="w-[60vw] m-auto mb-5 mt-5 p-5 bg-indigo-50">
      <div>
        <Typography variant="h3" textAlign="center" gutterBottom>Vé điện tử</Typography>
      </div>
      <div ref={printRef}>
        {[1, 1, 1, 1, 1].map((_, index) => (<Ticket key={index} />))}
      </div>
      <div className="flex justify-center">
        <Button
          sx={{
            background: "linear-gradient(to right, #B993D6, #8CA6DB)",
          }}
          className="mt-5"
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
        >
          In
        </Button>
      </div>
    </div>
  );
};

export default PrintTicket;
