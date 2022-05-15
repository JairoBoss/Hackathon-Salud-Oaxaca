import React from "react";
import { Outlet } from "react-router-dom";
import PrivateFooter from "./PrivateFooter";

const PrivateLayout = () => {
  return (
    <>
      <Outlet></Outlet>
      <PrivateFooter></PrivateFooter>
    </>
  );
};

export default PrivateLayout;
