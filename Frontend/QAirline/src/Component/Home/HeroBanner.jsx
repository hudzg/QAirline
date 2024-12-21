import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getAllHeroBanner } from "../../State/HeroBanner/Action";
import { getAllPost } from "../../State/Post/Action";

const HeroBanner = () => {
  const heroBanner = useSelector((store) => store.heroBanner);
  const post = useSelector((store) => store.post);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllHeroBanner());
    dispatch(getAllPost());
  }, []);

  const handleClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="w-full h-[40vh] lg:h-[80vh] my-5">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover={false}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {/* <div>
          <img
            className="w-full h-[80vh] py-5 block"
            src="https://images.pexels.com/photos/91217/pexels-photo-91217.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            draggable={false}
          />
        </div>
        <div>
          <img
            className="w-full h-[80vh] py-5 block"
            src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            draggable={false}
          />
        </div> */}
        {post.posts.map((item) => (
          <div key={item.id}>
            <img
              className="w-full h-[40vh] lg:h-[80vh] py-5 block cursor-pointer"
              src={item.image}
              alt=""
              draggable={false}
              onClick={() => handleClick(item.id)}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
