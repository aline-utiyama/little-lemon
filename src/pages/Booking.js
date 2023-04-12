import BookingForm from "../components/BookingForm";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/confirmed");
  };

  return (
    <>
      <Header></Header>
      <Main>
        <BookingForm submit={submitForm} />
        <Menu></Menu>
      </Main>
      <Footer></Footer>
    </>
  );
};

export default Booking;
