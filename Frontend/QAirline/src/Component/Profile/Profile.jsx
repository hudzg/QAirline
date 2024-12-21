import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Button,
  Paper,
  Typography,
  CircularProgress,
  TextField,
  Card,
  IconButton,
  Box,
  Modal,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  logout,
  updateImage,
} from "../../State/Authentication/Action";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { uploadImageToCloudinary } from "../../utils/UploadToCloudinary";

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const jwt = localStorage.getItem("jwt");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [uploadImage, setUploadImage] = useState(false);
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
    if (formData.newPassword !== formData.reNewPassword) {
      console.log("nhaap lai sai");
      return;
    }
    dispatch(
      changePassword({
        userData: {
          email: auth.user.email,
          password: formData.password,
          newPassword: formData.newPassword,
        },
      })
    );
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file);
    // setFormData({ ...formData, image });
    setUploadImage(false);
    dispatch(updateImage({ image, jwt }));
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
              <div className="flex">
                {auth.user?.avatarImage ? (
                  <Avatar
                    sx={{ width: 56, height: 56 }}
                    src={auth.user.avatarImage}
                  ></Avatar>
                ) : (
                  <Avatar
                    component="button"
                    sx={{ bgcolor: "primary.main", width: 56, height: 56 }}
                  >
                    {auth.user?.firstName[0]}
                  </Avatar>
                )}
                <input
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="fileInput" className="relative">
                  <span className="w-4 h-4 cursor-pointer flex items-center justify-center p-3 rounded-md">
                    <AddPhotoAlternateIcon />
                  </span>
                  {uploadImage && (
                    <div className="absolute left-0 right-0 top-0 bottom-0 w-4 h-4 flex justify-center items-center">
                      <CircularProgress />
                    </div>
                  )}
                </label>
              </div>
              <Typography
                variant="h6"
                sx={{ marginTop: "1rem", fontWeight: "bold" }}
              >
                {auth.user?.firstName} {auth.user?.lastName}
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: "0.5rem", color: "gray" }}
              >
                {auth.user?.email}
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
                      {auth.user?.lastName || "N/A"}
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
                      {auth.user?.firstName || "N/A"}
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
                      {auth.user?.email || "N/A"}
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
