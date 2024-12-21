import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Paper,
  Box,
  Select,
  MenuItem,
  Divider,
  Modal,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  updateFlightInstanceByAdmin,
  updateLegInstanceByAdmin,
} from "../../State/FlightInstanceAdmin/Action";
import EditIcon from "@mui/icons-material/Edit";

const InstanceCard = ({ instanceInfo }) => {
  // console.log(instanceInfo);

  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);

  const [selectedFlightInstanceId, setSelectedFlightInstanceId] =
    useState(null);

  useEffect(() => {
    setSelectedFlightInstanceId(instanceInfo.id);
  }, [instanceInfo.id]);

  const [selectedLegInstanceId, setSelectedLegInstanceId] = useState(null);

  const [formDataLeg, setFormDataLeg] = useState({
    departureTime: null,
    arrivalTime: null,
    status: "",
  });

  const [formDataFlight, setFormDataFlight] = useState({
    status: "",
  });

  const handleOpenEdit = (legInstance) => {
    setSelectedLegInstanceId(legInstance.id);

    setFormDataLeg({
      departureTime: legInstance.departureTime,
      arrivalTime: legInstance.arrivalTime,
      status: legInstance.status,
    });
    setOpen(true);
  };

  const handleOpenStatus = () => {
    setOpenStatus(true);
  }

  const handleClose = () => {
    setOpen(false);
    setOpenStatus(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataLeg({
      ...formDataLeg,
      [name]: value,
    });
  };

  //submit trong modal sửa leg instance
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateLegInstanceByAdmin({
        flightInstanceId: selectedFlightInstanceId,
        legInstanceId: selectedLegInstanceId,
        legInstanceData: formDataLeg,
        jwt,
      })
    );

    handleClose();
  };


  //submit cái flight status
  const handleSubmitStatus = (e) => {
    e.preventDefault();

    console.log("this is flight status: ", formDataFlight)
    dispatch(
      updateFlightInstanceByAdmin({
        flightInstanceId: selectedFlightInstanceId,
        flightInstanceData: formDataFlight,
        jwt,
      })
    );

    handleClose();
  };

  return (
    <div className="mt-2">
      <Accordion elevation={6}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Paper elevation={0} className="p-3 w-full">
            <div>
              <Typography>Mã: {instanceInfo.id}</Typography>
              <Typography>Ngày khởi hành: {instanceInfo.date}</Typography>
              <div className="flex">
                <Typography>
                  Trạng thái: {instanceInfo.status || "chưa bay"}
                </Typography>
                <div
                  onClick={() => {
                    handleOpenStatus()
                  }}
                >
                  <EditIcon
                    sx={{
                      color: "gray",
                    }}
                  />
                </div>
              </div>
            </div>
          </Paper>
        </AccordionSummary>
        <AccordionDetails>
          {Array.isArray(instanceInfo.legInstances) &&
            instanceInfo.legInstances.map((item, index) => (
              <Paper key={index} elevation={6} className="mb-3 p-2 relative">
                <div className="flex justify-between items-center">
                  <Typography>Chặng: {index + 1}</Typography>
                  <div className="flex">
                    <Typography>
                      Trạng thái: {item.status ? item.status : "chưa bay"}
                    </Typography>
                  </div>
                </div>
                <Divider />
                <div>
                  <Typography>
                    Khởi hành: {item.departureAirport.name}(
                    {item.departureAirport.city}),{" "}
                    {item.departureAirport.country}
                  </Typography>
                  <Typography>Thời gian: {item.departureTime}</Typography>
                </div>
                <div>
                  <Typography>
                    Điểm đến: {item.arrivalAirport.name}(
                    {item.arrivalAirport.city}), {item.arrivalAirport.country}
                  </Typography>
                  <Typography>Thời gian: {item.arrivalTime}</Typography>
                </div>
                <div
                  className="absolute bottom-2 right-2 cursor-pointer"
                  onClick={() => {
                    handleOpenEdit(item);
                  }}
                >
                  <EditIcon
                    sx={{
                      color: "gray",
                    }}
                  />
                </div>
              </Paper>
            ))}
        </AccordionDetails>
      </Accordion>
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
            border: "none",
            outline: "none",
          }}
        >
          <div className="mb-2 mt-2">
            <Typography variant="h6" component="h2">
              Cập nhật thông tin chuyến bay
            </Typography>
          </div>
          <div className="mb-10 space-y-4">
            <TextField
              label="Thời gian khởi hành"
              variant="outlined"
              fullWidth
              value={formDataLeg.departureTime}
              name="departureTime"
              onChange={handleInputChange}
              className="mb-4"
            />
            <TextField
              label="Thời gian đến"
              variant="outlined"
              fullWidth
              value={formDataLeg.arrivalTime}
              name="arrivalTime"
              onChange={handleInputChange}
              className="mb-4"
            />
            <Autocomplete
              options={["chưa bay", "đang bay", "đã bay"]}
              value={formDataLeg.status}
              onChange={(event, newValue) => {
                setFormDataLeg({
                  ...formDataLeg,
                  status: newValue,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Trạng thái"
                  variant="outlined"
                  fullWidth
                  className="mb-4"
                />
              )}
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
              Lưu
            </Button>
          </div>
        </Box>
      </Modal>
      {/* Modal sửa trạng thái chuyến bay */}
      <Modal open={openStatus} onClose={handleClose}>
        <Box
          className="bg-white p-5 rounded-md shadow-lg"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "25%",
            height: "40%",
            border: "none",
            outline: "none",
          }}
        >
          <div className="mb-2 mt-2">
            <Typography variant="h6" component="h2">
              Cập nhật trạng thái chuyến bay
            </Typography>
          </div>
          <div className="mb-10 space-y-4">
            <Autocomplete
              options={["chưa bay", "đang bay", "đã bay"]}
              value={formDataFlight.status}
              onChange={(event, newValue) => {
                setFormDataFlight({
                   status: newValue,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Trạng thái"
                  variant="outlined"
                  fullWidth
                  className="mb-4"
                />
              )}
            />
          </div>
          <div className="flex justify-between ml-8 mr-8">
            <Button onClick={handleClose}>Hủy</Button>
            <Button
              variant="contained"
              onClick={handleSubmitStatus}
              sx={{
                background: "linear-gradient(to right, #B993D6, #8CA6DB)",
              }}
            >
              Lưu
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default InstanceCard;
