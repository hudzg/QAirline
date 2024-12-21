import { Button, TextField, Typography, FormControlLabel, Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../State/Authentication/Action";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER",
    agreeToTerms: false
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(registerUser({ userData: formData, navigate }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData({
      ...formData,
      agreeToTerms: checked,
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
        <div className="absolute bottom-20">
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
          Đăng ký
        </Typography>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <TextField
              fullWidth
              variant="standard"
              id="firstName"
              name="firstName"
              label="Tên"
              onChange={handleInputChange}
              value={formData.firstName}
              sx={{ flex: 1 }}
            />
            <TextField
              fullWidth
              variant="standard"
              id="lastName"
              name="lastName"
              label="Họ"
              onChange={handleInputChange}
              value={formData.lastName}
              sx={{ flex: 1 }}
            />
          </div>
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
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.agreeToTerms}
                onChange={handleCheckboxChange}
                name="agreeToTerms"
                color="primary"
              />
            }
            label="Tôi đồng ý với các điều khoản của QAirline"
          />
          <Button
            fullWidth
            className="bg-gradient-to-r from-cyan-500 to-blue-500"
            variant="contained"
            type="submit"
            sx={{
              p: "1rem",
              background: "linear-gradient(to right, #B993D6, #8CA6DB)",
            }}
          >
            Đăng ký
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Đã có tài khoản?
            <Button size="small" onClick={() => navigate("/account/login")}>
              đăng nhập
            </Button>
          </Typography>
        </form>
      </div>
    </div>

  );
};

export default RegisterForm;
