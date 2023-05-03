import { Toast } from "@chakra-ui/react";
import React from "react";

export const ToastMeassage = ({ title, statusflag }) => {
  Toast({
    title: title,
    // description: "You are welcome.",
    status: statusflag,
    position: "top",
    duration: 9000,
    isClosable: true,
  });
};
