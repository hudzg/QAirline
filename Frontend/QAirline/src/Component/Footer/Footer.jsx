import { IconButton, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Box
      className="flex flex-col m-auto p-5 gap-10"
      sx={{ background: "linear-gradient(to right, #B993D6, #8CA6DB)" }}
    >
      <div className="flex justify-center gap-10">
        <Typography sx={{ color: "text.secondary" }}>Giới thiệu</Typography>
        <Typography sx={{ color: "text.secondary" }}>Giới thiệu</Typography>
        <Typography sx={{ color: "text.secondary" }}>Giới thiệu</Typography>
        <Typography sx={{ color: "text.secondary" }}>Giới thiệu</Typography>
      </div>
      <div className="flex justify-center gap-5">
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <YouTubeIcon />
        </IconButton>
        <IconButton>
          <GitHubIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
      </div>
      <div className="flex justify-around gap-5">
        <Typography sx={{ color: "text.secondary" }}>
          @ 2024 QAirline
        </Typography>
      </div>
    </Box>
  );
};

export default Footer;
