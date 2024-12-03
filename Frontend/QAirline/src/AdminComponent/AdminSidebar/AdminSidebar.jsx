import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PersonIcon from "@mui/icons-material/Person";
import AirlinesIcon from "@mui/icons-material/Airlines";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightIcon from '@mui/icons-material/Flight';
const menu = [
  { title: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { title: "Sân bay", icon: <AirlinesIcon />, path: "/airport" },
  { title: "Máy bay", icon: <FlightIcon />, path: "/airplane"},
  { title: "Chuyến bay", icon: <FlightTakeoffIcon />, path: "/flight" },
  {
    title: "Trạng thái chuyến bay",
    icon: <LocalAirportIcon />,
    path: "/flight-status",
  },
  { title: "Hành khách", icon: <PersonIcon />, path: "/passenger" },
  { title: "Phản hồi", icon: <FeedbackIcon />, path: "/feedback" },
];

console.log(menu.length)
const AdminSidebar = () => {
  const isSmallScreen = useMediaQuery("(max-width:1080px)");

  const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const handleNavigate = (item) => {
    navigate(`/admin${item.path}`);
    // if (item.title === "Logout") {
    //   navigate("/");
    //   dispatch(logout());
    //   handleClose();
    // }
  };

  const handleClose = () => {};

  return (
    <div className="w-full">
      <>
        <Drawer
          className="w-full"
          variant={isSmallScreen ? "temporary" : "permanent"}
          sx={{ zIndex: 1 }}
          open={true}
          anchor="left"
          onClose={handleClose}
        >
          <List>
            {menu.map((item, index) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton onClick={() => handleNavigate(item)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </>
    </div>
  );
};

export default AdminSidebar;
