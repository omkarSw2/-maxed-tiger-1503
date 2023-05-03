import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Services from "../../Pages/Services";

function AllRoutes() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Box>
  );
}

export default AllRoutes;
