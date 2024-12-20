import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../Component/Auth/Auth";
import Booking from "../Component/Booking/Booking";
import Footer from "../Component/Footer/Footer";
import Home from "../Component/Home/Home";
import Navbar from "../Component/Navbar/Navbar";
import Feedback from "../Component/Feedback/Feedback";
import PersonalInfo from "../Component/Infomation/PersonalInfo";
import PrintTicket from "../Component/Ticket/PrintTicket";
import Preview from "..//Component/Preview/Preview";
import MyFlight from "../Component/MyFlight/MyFlight";
import Profile from "../Component/Profile/Profile";
import BookingInbound from "../Component/Booking/BookingInbound";
import Seat from "../Component/Seat/Seat";
import Post from "../Component/Post/Post";

const CustomerRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/booking-inbound" element={<BookingInbound />}></Route>
        <Route path="/seat" element={<Seat />}></Route>
        <Route path="/info" element={<PersonalInfo />}></Route>
        <Route path="/ticket" element={<PrintTicket />}></Route>
        <Route path="/preview" element={<Preview />}></Route>
        <Route path="/myflight" element={<MyFlight />}></Route>
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <Auth />
      <Footer />
    </div>
  );
};

export default CustomerRoute;
