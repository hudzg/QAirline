import React, { useEffect } from "react";
import {
  Button,
  IconButton,
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getAllPost } from "../../State/Post/Action";
import { getAllFeedback } from "../../State/Feedback/Action";

const Feedback = () => {
  const feedbacks = useSelector((store) => store.feedback.feedbacks);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllFeedback({ jwt }));
  }, []);

  return (
    <div className="w-[50vw] mx-auto m-4 p-5 bg-indigo-100">
      <div className="flex justify-between items-center">
        <Typography variant="h4">Phản hồi từ người dùng</Typography>
      </div>
      <div className="flex justify-items-center">
        <Paper className="mt-2">
          {/* <TableContainer component={Paper}> */}
          <Table className="table-fixed w-full p-2">
            <TableHead>
              <TableRow>
                <TableCell align="center" className="w-1/5">
                  ID
                </TableCell>
                <TableCell align="center" className="w-1/5">
                  Người dùng
                </TableCell>
                <TableCell align="center" className="w-1/5">
                  Đánh giá
                </TableCell>
                <TableCell align="center" className="w-1/5">
                  Nội dung
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feedbacks.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="center" className="w-1/5">
                    {item.id}
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    {item.user.firstName + " " + item.user.lastName}
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    <Rating
                      name="half-rating"
                      // defaultValue={5}
                      precision={1}
                      //   size="
                      readOnly
                      value={item.numStar}
                    ></Rating>
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    {item.customerFeedback}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* </TableContainer> */}
        </Paper>
      </div>
    </div>
  );
};

export default Feedback;
