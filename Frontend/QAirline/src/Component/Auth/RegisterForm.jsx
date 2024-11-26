import { Button, TextField, Typography } from "@mui/material";
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
  return (
    <div>
      <Typography variant="h5" className="pb-5 text-center">
        Đăng ký
      </Typography>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          id="firstName"
          name="firstName"
          label="Tên"
          onChange={handleInputChange}
          value={formData.firstName}
        />
        <TextField
          fullWidth
          variant="outlined"
          id="lastName"
          name="lastName"
          label="Họ"
          onChange={handleInputChange}
          value={formData.lastName}
        />
        <TextField
          fullWidth
          variant="outlined"
          id="email"
          name="email"
          label="Email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <TextField
          fullWidth
          variant="outlined"
          id="password"
          name="password"
          label="Mật khẩu"
          type={"password"}
          onChange={handleInputChange}
          value={formData.password}
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
  );
};

export default RegisterForm;
