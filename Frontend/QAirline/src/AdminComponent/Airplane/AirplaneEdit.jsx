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
  Grid,
  Snackbar,
  Alert
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAirplane,
  createAirplane,
  updateAirplane,
  deleteAirplane,
} from "../../State/Airplane/Action";

const Airplane = () => {
  const airplane = useSelector((store) => store.airplane);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const [isEditMode, setIsEditMode] = useState(false);
  const [updatingAirplane, setUpdatingAirplane] = useState(null);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [formData, setFormData] = useState({
    model: "",
    firstClassCapacity: 0,
    businessCapacity: 0,
    economyCapacity: 0,
    firstClassRow: 0,
    firstClassCol: 0,
    businessRow: 0,
    businessCol: 0,
    economyRow: 0,
    economyCol: 0,
  });

  // mở modal để cập nhật airplane
  const handleOpenEdit = (airplane) => {
    setIsEditMode(true);
    setUpdatingAirplane(airplane);
    setFormData({
      model: airplane.model,
      firstClassCapacity: airplane.firstClassCapacity,
      businessCapacity: airplane.businessCapacity,
      economyCapacity: airplane.economyCapacity,
      firstClassRow: airplane.firstClassRow,
      firstClassCol: airplane.firstClassCol,
      businessRow: airplane.businessRow,
      businessCol: airplane.businessCol,
      economyRow: airplane.economyRow,
      economyCol: airplane.economyCol,
    });
    setOpen(true);
  };

  //mở modal để thêm airplane
  const handleOpenAdd = () => {
    setIsEditMode(false);
    setFormData({
      model: "",
      firstClassCapacity: 0,
      businessCapacity: 0,
      economyCapacity: 0,
      firstClassRow: 0,
      firstClassCol: 0,
      businessRow: 0,
      businessCol: 0,
      economyRow: 0,
      economyCol: 0,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUpdatingAirplane(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedForm = { ...prev, [name]: value };

      const calculateCapacity = (row, col) => {
        if (row > 0 && col > 0) {
          return row * col;
        }
        return 0;
      };

      if (name.startsWith("firstClass")) {
        const capacity = calculateCapacity(
          parseInt(updatedForm.firstClassRow || 0),
          parseInt(updatedForm.firstClassCol || 0)
        );
        return {
          ...updatedForm,
          firstClassCapacity: capacity,
        };
      }
      if (name.startsWith("business")) {
        const capacity = calculateCapacity(
          parseInt(updatedForm.businessRow || 0),
          parseInt(updatedForm.businessCol || 0)
        );
        return {
          ...updatedForm,
          businessCapacity: capacity,
        };
      }
      if (name.startsWith("economy")) {
        const capacity = calculateCapacity(
          parseInt(updatedForm.economyRow || 0),
          parseInt(updatedForm.economyCol || 0)
        );
        return {
          ...updatedForm,
          economyCapacity: capacity,
        };
      }

      return updatedForm;
    });
  };

  const handleDeleteAirplane = (id) => {
    // console.log("this is airplane id: ", id);
    dispatch(deleteAirplane({ airplaneId: id, jwt }));
  };

  //submit trong modal
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode && updatingAirplane) {
      dispatch(
        updateAirplane({
          airplaneId: updatingAirplane.id,
          airplaneData: formData,
          jwt,
        })
      );
    } else {
      dispatch(createAirplane({ reqData: formData, jwt }));
    }
    handleClose();
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  useEffect(() => {
    dispatch(getAllAirplane({ jwt }));
  }, []);

  return (
    <div className="w-[50vw] mx-auto m-4 p-5 bg-indigo-100">
      <div className="flex justify-between items-center">
        <Typography variant="h4">Quản lí máy bay</Typography>
        <div className="flex">
          <Button onClick={handleOpenAdd}>
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
                  Vé thương gia
                </TableCell>
                <TableCell align="center" className="w-1/5">
                  Vé phổ thông
                </TableCell>
                <TableCell align="center" className="w-1/5"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {airplane.airplanes.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="center" className="w-1/5">
                    {item.model}
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    {item.firstClassCapacity}
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    {item.businessCapacity}
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    {item.economyCapacity}
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
                        onClick={() => {
                          handleDeleteAirplane(item.id);
                        }}
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
            width: "40%",
            height: "90%",
            outline: "none",
            border: "none",
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            {isEditMode ? "Chỉnh sửa thông tin máy bay" : "Thêm máy bay"}
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Loại máy bay */}
              <TextField
                label="Loại máy bay"
                variant="outlined"
                fullWidth
                value={formData.model}
                name="model"
                onChange={handleInputChange}
                className="mb-4"
              />

              {/* Vé hạng nhất */}
              <Typography variant="subtitle1">Vé hạng nhất</Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    label="Số ghế"
                    variant="outlined"
                    fullWidth
                    value={formData.firstClassCapacity}
                    name="firstClassCapacity"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Hàng ngang"
                    variant="outlined"
                    fullWidth
                    value={formData.firstClassRow}
                    name="firstClassRow"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Hàng dọc"
                    variant="outlined"
                    fullWidth
                    value={formData.firstClassCol}
                    name="firstClassCol"
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              {/* Vé thương gia */}
              <Typography variant="subtitle1">Vé thương gia</Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    label="Số ghế"
                    variant="outlined"
                    fullWidth
                    value={formData.businessCapacity}
                    name="businessCapacity"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Hàng ngang"
                    variant="outlined"
                    fullWidth
                    value={formData.businessRow}
                    name="businessRow"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Hàng dọc"
                    variant="outlined"
                    fullWidth
                    value={formData.businessCol}
                    name="businessCol"
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              {/* Vé phổ thông */}
              <Typography variant="subtitle1">Vé phổ thông</Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    label="Số ghế"
                    variant="outlined"
                    fullWidth
                    value={formData.economyCapacity}
                    name="economyCapacity"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Hàng ngang"
                    variant="outlined"
                    fullWidth
                    value={formData.economyRow}
                    name="economyRow"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Hàng dọc"
                    variant="outlined"
                    fullWidth
                    value={formData.economyCol}
                    name="economyCol"
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
            </div>

            {/* Nút hành động */}
            <div className="flex justify-between mt-4">
              <Button onClick={handleClose} variant="outlined">
                Hủy
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "linear-gradient(to right, #B993D6, #8CA6DB)",
                }}
              >
                {isEditMode ? "Lưu" : "Thêm"}
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          sx={{
            width: "100%",
            backgroundColor: "rgb(212, 255, 218)",
            color: "rgb(120, 120, 120)",
            fontWeight: "bold",
          }}
        >
          {isEditMode ? "Sửa thông tin máy bay thành công" : "Thêm máy bay thành công"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Airplane;
