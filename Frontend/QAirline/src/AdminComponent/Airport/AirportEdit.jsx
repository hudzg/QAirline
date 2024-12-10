import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Modal,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  createAirport,
  deleteAirport,
  getAllAirport,
  updateAirport,
} from "../../State/Airport/Action";

const Airports = () => {
  const airport = useSelector((store) => store.airport);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const [isEditMode, setIsEditMode] = useState(false);
  const [updatingAirport, setUpdatingAirport] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    country: "",
    IATA: "",
  });

  // mở modal để cập nhật airport
  const handleOpenEdit = (airport) => {
    setIsEditMode(true);
    setUpdatingAirport(airport);
    setFormData({
      name: airport.name,
      city: airport.city,
      country: airport.country,
      IATA: airport.IATA,
    });
    setOpen(true);
  };

  // mở modal để thêm airport
  const handleOpenAdd = () => {
    setIsEditMode(false);
    setFormData({
      name: "",
      city: "",
      country: "",
      IATA: "",
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUpdatingAirport(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDeleteAirport = (id) => {
    // console.log("this is id",id);
    dispatch(deleteAirport({ airportId: id, jwt }));
  };

  //submit trong modal
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (isEditMode && updatingAirport) {
      dispatch(
        updateAirport({
          airportId: updatingAirport.id,
          airportData: formData,
          jwt,
        })
      );
    } else {
      dispatch(createAirport({ reqData: formData, jwt }));
    }

    handleClose();
  };
  useEffect(() => {
    dispatch(getAllAirport({ jwt }));
  }, []);

  return (
    <div className="w-[50vw] mx-auto m-4 p-5 bg-indigo-100">
      <div className="flex justify-between items-center">
        <Typography variant="h4">Quản lí sân bay</Typography>
        <div className="flex">
          <Button onClick={handleOpenAdd}>
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
                <TableCell align="center" className="w-1/10"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {airport.airports.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="center" className="w-1/5">
                    {item.IATA}
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
                      <IconButton
                        aria-label="edit"
                        onClick={() => handleOpenEdit(item)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDeleteAirport(item.id)}
                      >
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
      <Modal open={open} onClose={handleClose}>
        <Box
          className="bg-white p-5 rounded-md shadow-lg"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "25%",
            height: "60%",
          }}
        >
          <div className="mb-2 mt-2">
            <Typography variant="h6" component="h2">
              {isEditMode ? "Cập nhật thông tin sân bay" : "Thêm sân bay"}
            </Typography>
          </div>
          <div className="mb-10 space-y-4">
            <TextField
              label="Mã Sân Bay"
              variant="outlined"
              fullWidth
              value={formData.IATA}
              name="IATA"
              onChange={handleInputChange}
              className="mb-4"
            />
            <TextField
              label="Tên Sân Bay"
              variant="outlined"
              fullWidth
              value={formData.name}
              name="name"
              onChange={handleInputChange}
              className="mb-4"
            />
            <TextField
              label="Thành Phố"
              variant="outlined"
              fullWidth
              value={formData.city}
              name="city"
              onChange={handleInputChange}
              className="mb-4"
            />
            <TextField
              label="Quốc Gia"
              variant="outlined"
              fullWidth
              value={formData.country}
              name="country"
              onChange={handleInputChange}
              className="mb-4"
            />
          </div>
          <div className="flex justify-between ml-8 mr-8">
            <Button onClick={handleClose}>Hủy</Button>
            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit}
              sx={{
                background: "linear-gradient(to right, #B993D6, #8CA6DB)",
              }}
            >
              {isEditMode ? "Lưu" : "Thêm"}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Airports;
