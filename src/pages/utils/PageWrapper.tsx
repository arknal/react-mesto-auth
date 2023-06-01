import React from "react";
import { Outlet } from "react-router-dom";
import Header from "widgets/header";

const PageWrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default PageWrapper;
