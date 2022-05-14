import React from "react";
import { Outlet } from "react-router-dom";
import PublicFooter from "./PublicFooter";

const PublicLayout = () => {
  return (
    <>
      <Outlet></Outlet>
      <PublicFooter></PublicFooter>
    </>
  );
};

export default PublicLayout;
