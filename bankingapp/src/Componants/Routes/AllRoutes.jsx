import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import SingleServicePage from "../../Pages/SingleServicePage";
import PageNotFound from "../../Pages/PageNotFound";

function AllRoutes() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services/:id" element={<SingleServicePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  );
}

export default AllRoutes;
