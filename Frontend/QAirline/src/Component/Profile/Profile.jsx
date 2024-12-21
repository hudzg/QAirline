import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Paper, Typography, TextField, Card } from "@mui/material";
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
      width: "800px",
      borderRadius: "16px",
    }}
  >
    <div className="grid grid-cols-2 gap-4">
      {/* Cột 1: Avatar và họ tên */}
      <div>
        {/* Tiêu đề ở góc trái */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "2rem" }}
        >
          Thông tin cá nhân
        </Typography>

        {/* Avatar và họ tên */}
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

      {/* Cột 2: Thông tin chi tiết */}
      <div className="grid grid-cols-2 gap-4">
        {/* Dòng 1: "Họ" và giá trị của "Họ" */}
        <div>
          <Card sx={{ padding: "1rem", height: "100%" }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Họ
            </Typography>
          </Card>
        </div>
        <div>
          <Card sx={{ padding: "1rem", height: "100%" }}>
            <Typography variant="body2" sx={{ color: "gray" }}>
              {auth.user.lastName || "N/A"}
            </Typography>
          </Card>
        </div>

        {/* Dòng 2: "Tên" và giá trị của "Tên" */}
        <div>
          <Card sx={{ padding: "1rem", height: "100%" }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Tên
            </Typography>
          </Card>
        </div>
        <div>
          <Card sx={{ padding: "1rem", height: "100%" }}>
            <Typography variant="body2" sx={{ color: "gray" }}>
              {auth.user.firstName || "N/A"}
            </Typography>
          </Card>
        </div>

        {/* Dòng 3: "Email" và giá trị của "Email" */}
        <div>
          <Card sx={{ padding: "1rem", height: "100%" }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Email
            </Typography>
          </Card>
        </div>
        <div>
          <Card sx={{ padding: "1rem", height: "100%" }}>
            <Typography variant="body2" sx={{ color: "gray" }}>
              {auth.user.email || "N/A"}
            </Typography>
          </Card>
        </div>

        {/* Dòng 4: "Mật khẩu" và giá trị của "Mật khẩu" */}
        <div>
          <Card sx={{ padding: "1rem", height: "100%" }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Mật khẩu
            </Typography>
          </Card>
        </div>
        <div>
          <Card sx={{ padding: "1rem", height: "100%" }}>
            <Typography variant="body2" sx={{ color: "gray" }}>
              ********
            </Typography>
          </Card>
        </div>
      </div>

      {/* Nút Logout */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          background: "linear-gradient(to right, #B993D6, #8CA6DB)",
          padding: "0.8rem",
          marginTop: "2rem",
        }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  </Paper>
</div>


  );
};

export default Profile;
