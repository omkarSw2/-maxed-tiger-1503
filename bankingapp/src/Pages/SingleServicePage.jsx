import { Box, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleUserCarousel } from "../Componants/Carousel/SingleUserCarousel";
import ServiceAccordian from "../Componants/SingleServicepageCompomnants/serviceAccordian";
import axios from "axios";

const getData = async (id) => {
  let responce = await axios({
    method: "get",
    baseURL: `${process.env.REACT_APP_JSON_SERVER_PORT}`,
    url: `/sevices/${id}`,
  });
  let data = responce;
  return data;
};
export default function SingleServicePage() {
  const { id } = useParams();
  const [cardData, setCardData] = useState([]);
  console.log(cardData);

  const fetchData = (id) => {
    getData(id).then((res) => {
      // console.log(res);
      setCardData(res.data);
    });
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);
  return (
    <Box>
      <Container maxW="container.lg">
        {/* <Heading>{id}</Heading> */}

        <SingleUserCarousel />
        <Box mt={"9"}>
          <ServiceAccordian
            title={cardData.servicetitle}
            description={cardData.servicedescription}
          />
        </Box>
      </Container>
    </Box>
  );
}
