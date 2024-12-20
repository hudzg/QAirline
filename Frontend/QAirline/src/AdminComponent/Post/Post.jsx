import React, { useEffect } from "react";
import {
  Button,
  IconButton,
  Paper,
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

const Post = () => {
  const post = useSelector((store) => store.post);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  const handleDelete = (id) => {
    dispatch(deletePost({ postId: id, jwt }));
  };

  return (
    <div className="w-[50vw] mx-auto m-4 p-5 bg-indigo-100">
      <div className="flex justify-between items-center">
        <Typography variant="h4">Quản lí bài viết</Typography>
        <div className="flex">
          <Button onClick={() => navigate("../add-post")}>
            <Typography color="textPrimary">Thêm bài viết</Typography>
            <AddIcon />
          </Button>
        </div>
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
                  Banner
                </TableCell>
                <TableCell align="center" className="w-1/5">
                  Tiêu đề
                </TableCell>
                <TableCell align="center" className="w-1/5"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {post.posts.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="center" className="w-1/5">
                    {item.id}
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    <img src={item.image} alt="" className="w-full h-full" />
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    {item.title}
                  </TableCell>
                  <TableCell align="center" className="w-1/5">
                    <div className="flex justify-between items-center">
                      <IconButton aria-label="edit" onClick={() => {}}>
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
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

export default Post;
