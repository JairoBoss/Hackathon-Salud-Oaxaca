import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const PublicLayout = () => {
  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default PublicLayout;
