import BookingForm from "../components/BookingForm";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import React, { useState } from "react";

const Booking = () => {
  return (
    <>
      <Header></Header>
      <Main>
        <BookingForm />
      </Main>
      <Footer></Footer>
    </>
  );
};

export default Booking;
