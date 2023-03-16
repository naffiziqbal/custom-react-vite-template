import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Header from "../Components/Shared/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
