import { Box, Button, Heading, Toast, useToast } from "@chakra-ui/react";
import React from "react";


export default function Home() {
  const toast = useToast();

  const handleClick = () => {
    toast({
      title: "Account created.",
      // description: "You are welcome.",
      status: "success",
      position:"top",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <Heading>Ho me</Heading>
      <Button onClick={handleClick}>Show Toast</Button>
      {/* <Button onClick={ToastMessage}>ToastMessage Toast</Button> */}
    </>
  );
}
