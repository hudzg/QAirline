import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
        Đăng nhập
      </Typography>
      <form className="space-y-4" onSubmit={handleSubmit}>
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
  );
};

export default LoginForm;
