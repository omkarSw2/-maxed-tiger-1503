import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { SimpleSlider } from "../Componants/Carousel/Carousel";
import { useContext } from "react";
import { LoginAuth } from "../Auth/LoginAuthContext/LoginAuth";
import HomeCard from "../Componants/Cards/HomeCard";

import PartnarAtaras from "../Componants/Cards/PartnarAtaras";

export default function Home() {
  const { login, logout, isAuth } = useContext(LoginAuth);

  return (
    <>
      <Heading>{isAuth ? "Yes" : "No"}</Heading>
      {isAuth ? (
        <Button onClick={() => logout()} colorScheme="red">
          logout
        </Button>
      ) : (
        <Button onClick={() => login()} colorScheme="blue">
          login
        </Button>
      )}
      {/* <Button onClick={ToastMessage}>ToastMessage Toast</Button> */}
      <Container maxW="90%">
        <SimpleSlider />

        <Box mt={10}>
          <Divider
            mb={"5"}
            colorScheme="purple"
            borderWidth="3px"
            variant={"dashed"}
          />
          <Heading fontFamily={"initial"} mb={"5"}>
            Featured Products
          </Heading>

          <Divider
            mb={"5"}
            colorScheme="purple"
            borderWidth="3px"
            variant={"solid"}
            columnGap={"purple"}
          />
          <HomeCard />
        </Box>
        <Divider
          m={"5"}
          colorScheme="purple"
          borderWidth="3px"
          variant={"solid"}
          columnGap={"purple"}
        />

        <Heading fontFamily={"initial"} mb={"5"}>
          Your personal offers are ready
        </Heading>

        <Divider
          m={"5"}
          colorScheme="purple"
          borderWidth="3px"
          variant={"solid"}
          columnGap={"purple"}
        />
        <Box
          w="100%"
          h="400px"
          bgGradient={[
            "linear(to-tr, teal.300, yellow.400)",
            "linear(to-t, blue.200, teal.500)",
            "linear(to-b, orange.100, purple.300)",
          ]}>
          <Container maxW="100%">
            <Heading fontFamily={"heading"} as="h1" size={"md"} p={"5"}>
              Your personal offers are ready Enter the number and find out what
              we have prepared for you. We will not call - we will show
              everything online
            </Heading>
            <Center>
              <HStack p={5}>
                <Input
                  focusBorderColor="pink.400"
                  maxW={"400px"}
                  variant="filled"
                  placeholder="Enter Number to see offers"
                />
                <Button colorScheme="orange">To know</Button>
              </HStack>
            </Center>
            <Heading m={20} size={"md"}>
              Installment in partner stores
            </Heading>
            <HStack>
              <Divider borderWidth={"3px"} />
              <PartnarAtaras />
              <Divider borderWidth={"3px"} />
            </HStack>
          </Container>
        </Box>
        <Heading fontFamily={"initial"} mb={"5"} mt={"5"}>
          Cash loan
        </Heading>
        <Divider borderWidth={"3px"} />

        <Stack direction={["column", "row"]} spacing="24px" mt={"5"}>
          <Box>
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1682339292058-37fcc96d04c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              }
              alt="atmadd"
              objectFit="cover"
              borderRadius={"lg"}
            />
          </Box>
          <Box>
            <Image
              src={
                "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
              alt="atmadd"
              objectFit="cover"
              borderRadius={"lg"}
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
