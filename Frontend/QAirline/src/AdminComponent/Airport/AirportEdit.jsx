import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { getAllAirport } from "../../State/Airport/Action";
const AirportList = [1, 1, 1, 1];

const Airports = () => {
  const airport = useSelector((store) => store.airport);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAirport({ jwt }));
  }, []);

  return (
    <div className="w-[50vw] mx-auto m-4 p-5 bg-indigo-100">
      <div className="flex justify-between items-center">
        <Typography variant="h4">Quản lí sân bay</Typography>
        <div className="flex">
          <Button>
            <Typography color="textPrimary">Thêm sân bay </Typography>
            <AddIcon />
          </Button>
        </div>
      </div>
      <div className="flex justify-items-center">
        <Paper className="mt-2">
          {/* <TableContainer component={Paper}> */}
          <Table className="table-fixed w-full">
            <TableHead>
              <TableRow>
                <TableCell align="center" className="w-1/5">
                  Mã sân bay
                </TableCell>
                <TableCell align="center" className="w-1/5">
                  Tên sân bay
                </TableCell>
                <TableCell align="center" className="w-1/5">
                  Thành phố
                </TableCell>
                <TableCell align="center" className="w-1/5">
                  Quốc gia
                </TableCell>
                <TableCell align="center" className="w-1/5"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {airport.airports.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="center" className="w-1/5">
                    {item.iata}
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    {item.name}
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    {item.city}
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    {item.country}
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    <div className="flex justify-between items-center">
                      <IconButton aria-label="delete">
                        <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* </TableContainer> */}
        </Paper>
      </div>
    </div>
  );
};

export default Airports;
