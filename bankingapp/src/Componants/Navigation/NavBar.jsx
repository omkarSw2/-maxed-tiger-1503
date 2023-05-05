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
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import SignInPage from "../../Pages/SigninPage";
import Login from "../../Pages/Login";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LoginAuth } from "../../Auth/LoginAuthContext/LoginAuth";

const navlinks = [
  {
    id: 1,
    to: "/",
    name: "Home",
  },
  {
    id: 2,
    to: "/cashloan",
    name: "Cash Loan",
  },
  {
    id: 3,
    to: "/creditcard",
    name: "Creadit Card",
  },
  {
    id: 4,
    to: "/instalmentcards",
    name: "Installment Cards",
  },
  {
    id: 5,
    to: "/unsubscribecalls",
    name: "Unsubscribe from Calls",
  },
  {
    id: 5,
    to: "/mortgage",
    name: "Mortgage",
  },
];

export default function NavBar() {
  const { isAuth, login, logout } = useContext(LoginAuth);
  const { colorMode, toggleColorMode } = useColorMode();
  /*
   *for logout button  use
   */
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  /*
   *For Button Use End
   */

  return (
    <Box p={5}>
      <Flex align="center" justify="space-between">
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
              size={"sm"}
            />
            {!isAuth ? (
              <>
                <SignInPage />
                <Login />
              </>
            ) : (
              <Box>
                <Flex alignItems="center">
                  {/*Logout Button Starts */}
                  <Button
                    onClick={onOpen}
                    colorScheme="blue"
                    size={"sm"}
                    mr={4}>
                    Logout
                  </Button>
                  <AlertDialog
                    motionPreset="slideInBottom"
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    isOpen={isOpen}
                    isCentered>
                    <AlertDialogOverlay />

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        Do You Want To Logout?
                      </AlertDialogHeader>
                      <AlertDialogCloseButton />
                      <AlertDialogBody>
                        Are you sure you want to Logout your Account ?
                      </AlertDialogBody>
                      <AlertDialogFooter>
                        <Button colorScheme="red" onClick={() => logout()}>
                          Yes
                        </Button>
                        <Button ml={3} ref={cancelRef} onClick={onClose}>
                          No
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  {/* Logout Button Ends  */}
                  {/* Avtar Strts */}
                  <Tooltip
                    label="omkar Walvalkar"
                    placement="bottom-end"
                    bg="blue.300"
                    fontSize="md">
                    <Avatar
                      name="Omkar walavlakr"
                      // src="https://bit.ly/code-beast"
                      size="sm"
                    />
                  </Tooltip>
                  {/* Avtar Ends */}
                </Flex>
              </Box>
            )}
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
