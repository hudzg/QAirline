import { Avatar, Button, Divider, Typography } from "@mui/material";
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
            <div className="flex items-end justify-start">
              {/* Div chứa ảnh */}
              <div >
                <img
                  src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/462552585_1964677780681993_1519442838786906789_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=XajbBzJrFA4Q7kNvgG9JbLw&_nc_oc=Adhd13oBHH-LmgmyllkYA_M8RU9d0OPPxBZkhvJyaaeju-xCG0LdPDzHI2KwgMlt3WUO0cNCKflzyMwbR7FpWgyN&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&oh=03_Q7cD1gFIXC8Cc_O6GJwfU_5j0pYczIrjIrl8XB94J4Wc-DAFgw&oe=678E32B1"
                  alt="Background"
                  className="w-11 h-11 object-cover"
                />
              </div>

              {/* Div chứa chữ */}
              <div>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#B9D6F3",
                    fontWeight: "bold",
                    fontFamily: "Poppins"
                  }}
                >
                  Airline
                </Typography>
              </div>
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
            <div className="flex items-end justify-start">
              {/* Div chứa ảnh */}
              <div >
                <img
                  src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/462552585_1964677780681993_1519442838786906789_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=XajbBzJrFA4Q7kNvgG9JbLw&_nc_oc=Adhd13oBHH-LmgmyllkYA_M8RU9d0OPPxBZkhvJyaaeju-xCG0LdPDzHI2KwgMlt3WUO0cNCKflzyMwbR7FpWgyN&_nc_zt=23&_nc_ht=scontent.fhan14-2.fna&oh=03_Q7cD1gFIXC8Cc_O6GJwfU_5j0pYczIrjIrl8XB94J4Wc-DAFgw&oe=678E32B1"
                  alt="Background"
                  className="w-11 h-11 object-cover"
                />
              </div>

              {/* Div chứa chữ */}
              <div>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#B9D6F3",
                    fontWeight: "bold",
                    fontFamily: "Poppins"
                  }}
                >
                  Airline
                </Typography>
              </div>
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
