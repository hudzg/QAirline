import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 900,
  height: "auto",
  maxHeight: "90vh",
  overflow: "auto", // Cho phép cuộn
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  borderRadius: "8px",
};


const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleOnClose = () => {
    navigate("/");
  };
  return (
    <>
      <Modal
        open={
          location.pathname === "/account/register" ||
          location.pathname === "/account/login"
        }
        onClose={handleOnClose}
      >
        <Box sx={style}>
          {location.pathname === "/account/register" ? (
            <RegisterForm />
          ) : (
            <LoginForm />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Auth;
