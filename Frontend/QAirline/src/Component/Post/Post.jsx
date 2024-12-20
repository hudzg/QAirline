import React, { useEffect } from "react";
import Markdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findPostById } from "../../State/Post/Action";

const Post = () => {
  const { id } = useParams();
  const post = useSelector((store) => store.post.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findPostById(id));
  }, []);

  const markdown = `# QAirline

  **QAirline** là một dự án quản lý hệ thống đặt vé máy bay, cung cấp giao diện người dùng thân thiện và hệ thống backend mạnh mẽ. Dự án sử dụng React cho frontend và Spring Boot cho backend để xây dựng một hệ thống đặt vé nhanh chóng và hiệu quả.
  
  ## Tính năng
  
  - **Đặt vé máy bay**: Người dùng có thể tìm kiếm chuyến bay, xem thông tin và đặt vé.
  - **Quản lý tài khoản**: Hệ thống đăng nhập/đăng ký cho phép người dùng quản lý thông tin cá nhân.
  - **Quản lý chuyến bay**: Chức năng dành riêng cho quản trị viên để thêm, chỉnh sửa, và xóa các chuyến bay.
`;
  return (
    <div className="p-10 w-[60vw] m-auto mb-5">
      <div>
        <img
          className="w-full h-[60vh] py-5 block"
          src={post?.image}
          alt=""
          draggable={false}
        />
      </div>
      <h1 className="text-center text-4xl">{post?.title}</h1>
      <div>
        <Markdown
          components={{
            h1(props) {
              const { node, ...rest } = props;
              return <h1 className="text-3xl my-4 font-medium" {...rest} />;
            },
            h2(props) {
              const { node, ...rest } = props;
              return <h2 className="text-xl my-2 font-medium" {...rest} />;
            },
            ul(props) {
              const { node, ...rest } = props;
              return <ul className="list-disc list-inside" {...rest} />;
            },
          }}
        >
          {post?.content}
        </Markdown>
      </div>
    </div>
  );
};

export default Post;
