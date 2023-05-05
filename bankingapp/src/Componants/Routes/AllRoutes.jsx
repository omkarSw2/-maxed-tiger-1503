import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import SingleServicePage from "../../Pages/SingleServicePage";

function AllRoutes() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="//:service" element={<SingleServicePage />} />
      </Routes>
    </Box>
  );
}

export default AllRoutes;
