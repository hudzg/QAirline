import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
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
    <div className="min-h-[80vh] flex felx-col justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center">
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className="py-5 text-2xl font-semibold">{auth.user.firstName}</h1>
        <p>Email: {auth.user.email}</p>
        <Button
          sx={{
            margin: "2rem 0rem",
            background: "linear-gradient(to right, #B993D6, #8CA6DB)",
          }}
          onClick={handleLogout}
          variant="contained"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;
