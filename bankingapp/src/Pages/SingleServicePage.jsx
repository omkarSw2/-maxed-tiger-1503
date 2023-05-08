import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { SingleUserCarousel } from "../Componants/Carousel/SingleUserCarousel";

export default function SingleServicePage() {
  const { id } = useParams();
  return (
    <Box>
      <Heading>{id}</Heading>
      
      <SingleUserCarousel/>
    </Box>
  );
}
