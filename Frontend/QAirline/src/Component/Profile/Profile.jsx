import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Button,
  Paper,
  Typography,
  TextField,
  Card,
  IconButton,
  Box,
  Modal,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../State/Authentication/Action";

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
    reNewPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <Paper
        elevation={3}
        sx={{
          padding: "2rem",
          width: "1000px",
          borderRadius: "16px",
          position: "relative",
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "2rem" }}
            >
              Thông tin cá nhân
            </Typography>
            <div className="flex flex-col items-center">
              <AccountCircleIcon sx={{ fontSize: "6rem", color: "#8CA6DB" }} />
              <Typography
                variant="h6"
                sx={{ marginTop: "1rem", fontWeight: "bold" }}
              >
                {auth.user.firstName} {auth.user.lastName}
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: "0.5rem", color: "gray" }}
              >
                {auth.user.email}
              </Typography>
              <div className="mt-10">
                <Button onClick={handleOpen}>Đổi mật khẩu</Button>
              </div>
            </div>
          </div>
          <div>
            <div className="grid gap-4">
              <Card sx={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Họ
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      {auth.user.lastName || "N/A"}
                    </Typography>
                  </div>
                </div>
              </Card>
              <Card sx={{ padding: "1rem", border: "none", boxShadow: "none" }}>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Tên
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      {auth.user.firstName || "N/A"}
                    </Typography>
                  </div>
                </div>
              </Card>

              {/* Card chứa "Email" và giá trị của "Email" */}
              <Card sx={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Email
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      {auth.user.email || "N/A"}
                    </Typography>
                  </div>
                </div>
              </Card>
              <Card sx={{ padding: "1rem", border: "none", boxShadow: "none" }}>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Mật khẩu
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      ********
                    </Typography>
                  </div>
                </div>
              </Card>
            </div>

            {/* Nút Logout */}
            <div className="flex justify-end mt-4 mr-4">
              <IconButton
                sx={
                  {
                    // background: "linear-gradient(to right, #B993D6, #8CA6DB)",
                    // color: "white",
                    // padding: "1rem",
                    // fontSize: "2rem", // Điều chỉnh kích thước biểu tượng
                    // '&:hover': {
                    //   background: "linear-gradient(to right, #8CA6DB, #B993D6)",
                    // },
                  }
                }
                onClick={handleLogout}
              >
                <LogoutIcon sx={{ fontSize: "3rem" }} />
              </IconButton>
            </div>
          </div>
        </div>
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="bg-white p-5 rounded-md shadow-lg"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "30%",
            height: "40%",
            outline: "none",
            border: "none",
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Đổi mật khẩu
          </Typography>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="standard"
              label="Mật khẩu"
              type={"password"}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={formData.password}
            />
            <TextField
              fullWidth
              variant="standard"
              label="Mật khẩu mới"
              type={"password"}
              onChange={(e) =>
                setFormData({ ...formData, newPassword: e.target.value })
              }
              value={formData.newPassword}
            />
            <TextField
              fullWidth
              variant="standard"
              label="Nhập lại mật khẩu mới"
              type={"password"}
              onChange={(e) =>
                setFormData({ ...formData, reNewPassword: e.target.value })
              }
              value={formData.reNewPassword}
            />
            <Button
              fullWidth
              // className="bg-gradient-to-r from-cyan-500 to-blue-500"
              variant="contained"
              type="submit"
              sx={{
                p: "1rem",
                background: "linear-gradient(to right, #B993D6, #8CA6DB)",
              }}
            >
              Đổi
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Profile;
