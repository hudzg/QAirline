import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Paper, Typography, TextField, Card, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../State/Authentication/Action";

const Profile = () => {
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <Paper
        elevation={3}
        sx={{
          padding: "2rem",
          width: "1000px",
          borderRadius: "16px",
          position: "relative"
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
            </div>
          </div>
          <div>
            <div className="grid gap-4">
              <Card sx={{ padding: "1rem", backgroundColor: "#f5f5f5"}}>
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
            <div
              className="flex justify-end mt-4 mr-4">
              <IconButton
                sx={{
                  // background: "linear-gradient(to right, #B993D6, #8CA6DB)",
                  // color: "white",
                  // padding: "1rem",
                  // fontSize: "2rem", // Điều chỉnh kích thước biểu tượng
                  // '&:hover': {
                  //   background: "linear-gradient(to right, #8CA6DB, #B993D6)",
                  // },
                }}
                onClick={handleLogout}
              >
                <LogoutIcon sx={{ fontSize: "3rem" }} />
              </IconButton>
            </div>

          </div>
        </div>
      </Paper>
    </div>



  );
};

export default Profile;
