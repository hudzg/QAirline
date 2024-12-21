import React, { useState } from "react";
import { Rating, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createFeedback } from "../../State/Feedback/Action";
const Feedback = () => {
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    numStar: 5,
    customerFeedback: "",
  });
  const handleSubmit = () => {
    console.log(formData);
    dispatch(createFeedback({ reqData: formData, jwt }));
  };
  return (
    <div className="mx-auto flex flex-col justify-center items-center w-[90vw] lg:w-[40vw] h-[40vh] lg:h-[40vw] space-y-4">
      <Typography variant="h6" align="center">
        Phản hồi của khách hàng về dịch vụ của chuyến bay
      </Typography>
      <textarea
        className="block w-[80%] h-[30vh] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-2.5 text-base bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
        onChange={(e) =>
          setFormData({ ...formData, customerFeedback: e.target.value })
        }
      ></textarea>
      {/* <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Write your thoughts here..."
      ></textarea> */}
      <Rating
        name="half-rating"
        // defaultValue={5}
        precision={1}
        size="large"
        value={formData.numStar}
        onChange={(event, newValue) => {
          setFormData({ ...formData, numStar: newValue });
        }}
      ></Rating>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(to right, #B993D6, #8CA6DB)",
        }}
        onClick={handleSubmit}
      >
        Gửi
      </Button>
    </div>
  );
};

export default Feedback;
