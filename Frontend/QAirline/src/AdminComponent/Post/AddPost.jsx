import {
  Button,
  CircularProgress,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PreviewIcon from "@mui/icons-material/Preview";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import Markdown from "react-markdown";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { uploadImageToCloudinary } from "../../utils/UploadToCloudinary";
import { useDispatch } from "react-redux";
import { createPost } from "../../State/Post/Action";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [uploadImage, setUploadImage] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    content: "",
  });
  const [alignment, setAlignment] = React.useState("edit");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file);
    setFormData({ ...formData, image });
    setUploadImage(false);
  };
  const handleRemoveImage = () => {
    setFormData({ ...formData, image: "" });
  };

  const handleSubmit = () => {
    console.log(formData);
    dispatch(createPost({ reqData: formData, jwt }));
    navigate("../post");
  };

  return (
    <div className="w-[60vw] justify-self-center m-5">
      <div className="w-[50vw] justify-self-center p-5 bg-indigo-100">
        <div className="mb-4">
          <Typography variant="h4" align="center">
            Thêm bài viết
          </Typography>
        </div>
        <Paper className="p-5 space-y-4">
          <div className="flex justify-between">
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="edit" aria-label="edit">
                <EditIcon />
              </ToggleButton>
              <ToggleButton value="preview" aria-label="preview">
                {/* Preview */}

                <PreviewIcon />
              </ToggleButton>
            </ToggleButtonGroup>
            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit}
              sx={{
                background: "linear-gradient(to right, #B993D6, #8CA6DB)",
              }}
            >
              Lưu
            </Button>
          </div>

          {alignment === "edit" ? (
            <>
              <div className="flex gap-5">
                <input
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="fileInput" className="relative">
                  <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                    <AddPhotoAlternateIcon />
                  </span>
                  {uploadImage && (
                    <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                      <CircularProgress />
                    </div>
                  )}
                </label>
                <div className="flex flex-wrap gap-2">
                  {formData.image && (
                    <div className="relative">
                      <img
                        className="w-24 h-24 object-cover"
                        src={formData.image}
                        alt=""
                      />
                      <IconButton
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          outline: "none",
                        }}
                        onClick={() => handleRemoveImage()}
                      >
                        <CloseIcon sx={{ fontSize: "1rem" }} />
                      </IconButton>
                    </div>
                  )}
                </div>
              </div>
              <TextField
                fullWidth
                variant="outlined"
                id="title"
                name="title"
                label="Tiêu đề"
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                value={formData.title}
              />
              <textarea
                className="block w-full h-[30vh] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-2.5 text-base bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                value={formData.content}
              ></textarea>
            </>
          ) : (
            <div>
              <div>
                {formData.image && (
                  <img
                    className="w-full h-[60vh] py-5 block"
                    src={formData.image}
                    alt=""
                    draggable={false}
                  />
                )}
              </div>
              <h1 className="text-center text-4xl">{formData.title}</h1>
              <div>
                <Markdown
                  components={{
                    h1(props) {
                      const { node, ...rest } = props;
                      return (
                        <h1 className="text-3xl my-4 font-medium" {...rest} />
                      );
                    },
                    h2(props) {
                      const { node, ...rest } = props;
                      return (
                        <h2 className="text-xl my-2 font-medium" {...rest} />
                      );
                    },
                    ul(props) {
                      const { node, ...rest } = props;
                      return <ul className="list-disc list-inside" {...rest} />;
                    },
                  }}
                >
                  {formData.content}
                </Markdown>
              </div>
            </div>
          )}
        </Paper>
      </div>
    </div>
  );
};

export default AddPost;
