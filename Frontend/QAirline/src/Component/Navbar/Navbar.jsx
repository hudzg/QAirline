import { Avatar, Button, Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);
  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="py-5 px-5 lg:px-20 flex justify-between">
        {!auth.user ? (
          <>
            <div
              onClick={() => navigate("/")}
              className="cursor-pointer font-semibold text-2xl"
            >
              QAirline
            </div>
            <div className="space-x-4">
              <Button onClick={() => navigate("/account/login")}>
                Đăng nhập
              </Button>
              <Button
                // className="bg-gradient-to-r from-cyan-500 to-blue-500"
                variant="contained"
                onClick={() => navigate("/account/register")}
                sx={{
                  // p: "1rem",
                  background: "linear-gradient(to right, #B993D6, #8CA6DB)",
                }}
              >
                Đăng ký
              </Button>
            </div>
          </>
        ) : (
          <>
            <div
              onClick={() => navigate("/")}
              className="cursor-pointer font-semibold text-2xl"
            >
              QAirline
            </div>
            <div className="flex justify-between w-[40%] items-center">
              <div className="cursor-pointer font-semibold text-xl">
                Trang chủ
              </div>
              <div className="cursor-pointer font-semibold text-xl">
                Chuyến bay
              </div>
              <div className="cursor-pointer font-semibold text-xl">
                Phản hồi
              </div>
            </div>
            <div>
              <Avatar
                component="button"
                onClick={() => navigate("/my-profile")}
                sx={{ bgcolor: "primary.main" }}
              >
                {auth.user.firstName[0]}
              </Avatar>
            </div>
          </>
        )}
      </div>
      <Divider />
    </div>
  );
};

export default Navbar;
