import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../State/Authentication/Action";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(loginUser({ userData: formData, navigate }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="grid grid-cols-2">
      <div className="relative flex items-center justify-center">
        <img
          src="https://wallpaperbat.com/img/294144-airplane-4k-wallpaper-top-free-airplane-4k-background.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute text-center bottom-20">
          <Typography
            variant="h5"
            sx={{ color: "#FFB6C1", fontWeight: "bold", textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}
          >
            Chào mừng đến với QAirline
          </Typography>
        </div>
      </div>
      <div className="p-8">
        <Typography
          variant="h4" className="pb-5"
          sx={{ fontWeight: "bold" }}
        >
          Đăng nhập
        </Typography>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="standard"
            id="email"
            name="email"
            label="Email"
            onChange={handleInputChange}
            value={formData.email}
          />
          <TextField
            fullWidth
            variant="standard"
            id="password"
            name="password"
            label="Mật khẩu"
            type={"password"}
            onChange={handleInputChange}
            value={formData.password}
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
            Đăng nhập
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Chưa có tài khoản?
            <Button size="small" onClick={() => navigate("/account/register")}>
              đăng ký
            </Button>
          </Typography>
        </form>
      </div>
    </div>



  );
};

export default LoginForm;
