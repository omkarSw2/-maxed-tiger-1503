import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Divider,
  HStack,
  Heading,
  IconButton,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { SimpleSlider } from "../Componants/Carousel/Carousel";
import { useContext } from "react";
import { LoginAuth } from "../Auth/LoginAuthContext/LoginAuth";
import HomeCard from "../Componants/Cards/HomeCard";
import {
  SiApple,
  SiAdidas,
  SiSamsung,
  SiPuma,
  SiAmazon,
  SiFlipkart,
  SiStarbucks,
} from "react-icons/si";

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
              <Avatar
                size="lg"
                bg={"white"}
                // name="Segun Adebayo"
                icon={<SiAdidas color="black" />}
              />
              <Avatar
                bg={"white"}
                size="lg"
                // name="Segun Adebayo"
                icon={<SiApple color="black" />}
              />
              <Avatar
                size="lg"
                bg={"white"}
                icon={<SiSamsung color="black" />}
              />
              <Avatar size="lg" bg={"white"} icon={<SiPuma color="black" />} />
              <Avatar
                size="lg"
                bg={"white"}
                icon={<SiAmazon color="black" />}
              />
              <Avatar
                size="lg"
                bg={"white"}
                icon={<SiFlipkart color="black" />}
              />
              <Avatar
                size="lg"
                bg={"white"}
                icon={<SiStarbucks color="black" />}
              />
              <Divider borderWidth={"3px"} />
            </HStack>
          </Container>
        </Box>
      </Container>
    </>
  );
}
