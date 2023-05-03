import React from "react";
import { MoonIcon, Search2Icon, SunIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Input,
  Heading,
  Button,
  WrapItem,
  Avatar,
  useColorMode,
  IconButton,
  HStack,
  Stack,
} from "@chakra-ui/react";
import SignInPage from "../../Pages/SigninPage";
import Login from "../../Pages/Login";
import { NavLink } from "react-router-dom";
const navlinks = [
  {
    id: 1,
    to: "/",
    name: "Home",
  },
  {
    id: 2,
    to: "/about",
    name: "About",
  },
  {
    id: 3,
    to: "/services",
    name: "Services",
  },
];

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  /*  const defaultstyle = {
    textDecoration: "none",
    color: "black",
  };
  const activestyle = {
    textDecoration: "none",
    color: "black",
  };
    style={({ isActive }) => {
                  return isActive ? activestyle : defaultstyle;
                }} */
  return (
    <Box>
      <Flex align="center" justify="space-between" py="4" px="6">
        <Box>
          <Heading as="h1" size="md">
            My Website
          </Heading>
        </Box>
        <Box>
          <Stack spacing={8} direction="row">
            {navlinks.map((link) => (
              <NavLink key={link.id} to={link.to}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
        <Box>
          <Flex>
            <Input placeholder="Search " size="sm" />
            <Button colorScheme="blue" size="sm">
              <Search2Icon />
            </Button>
          </Flex>
        </Box>
        <Box>
          <HStack>
            <IconButton
              icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              isRound="true"
            />
            <SignInPage />
            <Login />
          </HStack>
        </Box>
        <Box>
          <Flex alignItems="center">
            <WrapItem>
              <Avatar
                name="Omkar walavlakr"
                // src="https://bit.ly/code-beast"
                size="md"
              />
            </WrapItem>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
