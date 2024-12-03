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
    Modal,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import AddIcon from "@mui/icons-material/Add";
  import EditIcon from "@mui/icons-material/Edit";
  import DeleteIcon from "@mui/icons-material/Delete";
  import { useDispatch, useSelector } from "react-redux";
  
  const AirplaneList = [1, 1, 1, 1]
  const Airplane = () => {
    const airport = useSelector((store) => store.airport);
    const jwt = localStorage.getItem("jwt");
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
  
    const [formData, setFormData] = useState({
      model: "",
      firstClassCapacity: 0,
      businessCapacity: 0,
      economyCapacity: 0
    })
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData)
      handleClose()
    }
    return (
      <div className="w-[50vw] mx-auto m-4 p-5 bg-indigo-100">
        <div className="flex justify-between items-center">
          <Typography variant="h4">Quản lí máy bay</Typography>
          <div className="flex">
            <Button onClick={handleOpen}>
              <Typography color="textPrimary">Thêm máy bay </Typography>
              <AddIcon />
            </Button>
          </div>
        </div>
        <div className="flex justify-items-center">
          <Paper className="mt-2">
            {/* <TableContainer component={Paper}> */}
            <Table className="table-fixed w-full p-2">
              <TableHead>
                <TableRow>
                  <TableCell align="center" className="w-1/5">
                    Loại máy bay
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    Vé hạng nhất
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    Vé Phổ thông
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    Vé thương gia
                  </TableCell>
                  <TableCell align="center" className="w-1/5"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {AirplaneList.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell align="center" className="w-1/5">
                      1234
                    </TableCell>
                    <TableCell align="center" className="w-1/5">
                      10
                    </TableCell>
                    <TableCell align="center" className="w-1/5">
                      15
                    </TableCell>
                    <TableCell align="center" className="w-1/5">
                      20
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
        <Modal open={open} onClose={handleClose}>
          <Box
            className="bg-white p-5 rounded-md shadow-lg"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "25%",
              height: "60%"
            }}
          >
            <div className="mb-2 mt-2">
              <Typography variant="h6" component="h2">
                Thêm Máy Bay
              </Typography>
            </div>
            <div className="mb-10 space-y-4">
              <TextField
                label="Loại máy bay"
                variant="outlined"
                fullWidth
                value={formData.model}
                name="model"
                onChange={handleInputChange}
                className="mb-4"
              />
              <TextField
                label="Vé phổ thông"
                variant="outlined"
                fullWidth
                value={formData.economyCapacity}
                name="economyCapacity"
                onChange={handleInputChange}
                className="mb-4"
              />
              <TextField
                label="Vé hạng nhất"
                variant="outlined"
                fullWidth
                value={formData.firstClassCapacity}
                name="firstClassCapacity"
                onChange={handleInputChange}
                className="mb-4"
              />
              <TextField
                label="Vé thương gia"
                variant="outlined"
                fullWidth
                value={formData.businessCapacity}
                name="businessCapacity"
                onChange={handleInputChange}
                className="mb-4"
              />
            </div>
            <div className="flex justify-between ml-8 mr-8">
              <Button onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="contained" type="submit" onClick={handleSubmit} 
                sx={{
                  background: "linear-gradient(to right, #B993D6, #8CA6DB)",
                }}>
                Thêm
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    );
  };
  
  export default Airplane;
  