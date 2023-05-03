import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleToast = ({ title, statusflag }) => {
    toast({
      title: title,
      // description: "You are welcome.",
      status: statusflag,
      position: "top",
      duration: 9000,
      isClosable: true,
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email requires please enter proper email.."),
      password: Yup.string()
        .required("Please enter a password.")
        .min(6, "Password must be at least 6 characters."),
    }),
    onSubmit: (values, action) => {
      console.log(values);
      axios({
          method: "get",
        baseURL: `${process.env.REACT_APP_JSON_SERVER_PORT}`,
        url: `/users`,
        data: {
          email: values.email,
          password: values.password,
        },
      })
        .then((res) => {
          console.log(res);
          let title = "";
          let statusflag = "";
          if (res.statusText === "Created") {
            title = "Account created.";
            statusflag = "success";
          } else {
            title = "Account not created. Please try again.";
            statusflag = "warning";
          }
          handleToast({ title, statusflag });
          action.resetForm();
        })
        .catch((error) => {
          console.error(error);
          handleToast({
            title: "An error occurred. Please try again later.",
            statusflag: "error",
          });
        });
    },
  });

  return (
    <>
      <Button onClick={onOpen} size={"sm"} colorScheme={"blue"}>
        Login
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody pb={6}>
              <FormControl
                isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Enter email"
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                mt={4}
                isInvalid={formik.errors.password && formik.touched.password}>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Last name"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
              <FormErrorMessage></FormErrorMessage>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                onClick={formik.handleSubmit}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
