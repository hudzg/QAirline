import { Avatar, Button, Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { VscFeedback } from "react-icons/vsc";

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
              {/* Trang chủ: Hiển thị chữ trên màn hình lớn và icon Home trên mobile */}
              <div
                onClick={() => navigate("/")}
                className="cursor-pointer font-semibold text-xl flex items-center space-x-2"
              >
                {/* Hiển thị icon Home trên mobile */}
                <div className="lg:hidden flex items-center">
                  <AiOutlineHome size="2rem" /> {/* Icon Home */}
                </div>
                {/* Hiển thị chữ "Trang chủ" trên màn hình lớn */}
                <div className="hidden lg:block">
                  <span>Trang chủ</span>
                </div>
              </div>

              <div
                onClick={() => navigate("/myflight")}
                className="cursor-pointer font-semibold text-xl"
              >
                <div className="lg:hidden flex items-center">
                  <PiAirplaneTakeoffLight size="2rem" /> {/* Icon Home */}
                </div>
                {/* Hiển thị chữ "Trang chủ" trên màn hình lớn */}
                <div className="hidden lg:block">
                  <span>Chuyến bay</span>
                </div>
              </div>

              <div
                onClick={() => navigate("/feedback")}
                className="cursor-pointer font-semibold text-xl"
              >
                <div className="lg:hidden flex items-center">
                  <VscFeedback size="2rem" /> {/* Icon Home */}
                </div>
                {/* Hiển thị chữ "Trang chủ" trên màn hình lớn */}
                <div className="hidden lg:block">
                  <span>Phản hồi</span>
                </div>
              </div>
            </div>

            <div>
              {auth.user?.avatarImage ? (
                <Avatar
                  component="button"
                  onClick={() => navigate("/my-profile")}
                  src={auth.user.avatarImage}
                ></Avatar>
              ) : (
                <Avatar
                  component="button"
                  onClick={() => navigate("/my-profile")}
                  sx={{ bgcolor: "primary.main" }}
                >
                  {auth.user?.firstName[0]}
                </Avatar>
              )}
            </div>
          </>
        )}
      </div>
      <Divider />
    </div>
  );
};

export default Navbar;
