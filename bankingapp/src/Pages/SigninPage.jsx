import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

function SignInPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
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
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      // image: "",
      dateOfBirth: "",
      phone: "",
      // gender: "",
    },
    validationSchema: Yup.object({
      // firstName validation
      firstName: Yup.string()
        .required("First Name Required *")
        .min(4, "First Name Is Too Short "),
      // lastName validation
      lastName: Yup.string()
        .required("Last Name Required *")
        .min(4, "Last Name Is Too Short "),
      // lastName validation
      userName: Yup.string()
        .required("Last Namre Required *")
        .min(6, "Last Name Is Too Short "),
      //password
      password: Yup.string()
        .required("Please enter a password.")
        .min(6, "Password must be at least 6 characters."),
      // confirmPassword
      confirmPassword: Yup.string()
        .required("Please confirm your password.")
        .oneOf([Yup.ref("password"), null], "Passwords must match."),
      // email validation
      email: Yup.string().matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        "Please enter a valid email address."
      ),
      // Phone validation
      phone: Yup.string().matches(
        /^([0-9]{3})([0-9]{3})([0-9]{4})$/,
        "Phone number must be 10 digits (e.g. 1234567890)."
      ),
      // DOB
      dateOfBirth: Yup.date().required("Date of birth is required"),
      // gender
      // phone: Yup.string()
      //   .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Invalid phone number")
      //   .required("Phone number is required"),
    }),

    onSubmit: (values, actions) => {
      // console.log(values);
      // alert(JSON.stringify(values, null, 2));
      axios({
        baseURL: `${process.env.REACT_APP_JSON_SERVER_PORT}`,
        url: `/users`,
        method: "post",
        data: values,
      })
        .then((res) => {
          console.log(res);
          let title = "";
          let statusflag = "";
          if (res.status === 200||201) {
            title = "Account created.";
            statusflag = "success";
          } else {
            title = "Account not created. Please try again.";
            statusflag = "warning";
          }
          handleToast({ title, statusflag });
        })
        .catch((error) => {
          console.error(error);
          handleToast({
            title: "An error occurred. Please try again later.",
            statusflag: "error",
          });
        });

      // actions.resetForm();
    },
  });
  // console.log(process.env.REACT_APP_JSON_SERVER_PORT);
  return (
    <>
      <Button colorScheme="blue" size={"sm"} onClick={onOpen}>
        Sign-in
      </Button>
      <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>Create your account</Center>
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody pb={6}>
              <HStack>
                <FormControl
                  isInvalid={
                    formik.errors.lastName && formik.touched.firstName
                  }>
                  <FormLabel>First name</FormLabel>
                  <Input
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                  />

                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>

                <FormControl
                  mt={4}
                  isInvalid={formik.errors.lastName && formik.touched.lastName}>
                  <FormLabel>Last name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                  />
                  <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                </FormControl>
              </HStack>
              <br />
              <FormControl
                mt={4}
                isInvalid={formik.errors.userName && formik.touched.userName}>
                <FormLabel>User Name</FormLabel>
                <Input
                  type="text"
                  placeholder="User name"
                  name="userName"
                  onChange={formik.handleChange}
                  value={formik.values.userName}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.userName}</FormErrorMessage>
              </FormControl>
              <br />
              <HStack>
                <FormControl
                  mt={4}
                  isInvalid={formik.errors.email && formik.touched.email}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                  mt={4}
                  isInvalid={formik.errors.phone && formik.touched.phone}>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    type="tel"
                    placeholder="phone"
                    name="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                  />
                  <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                </FormControl>
              </HStack>
              <br />
              <HStack>
                <FormControl
                  mt={4}
                  isInvalid={
                    formik.errors.dateOfBirth && formik.touched.dateOfBirth
                  }>
                  <FormLabel>Date Of Birth</FormLabel>
                  <Input
                    type="date"
                    placeholder="Date of birth"
                    name="dateOfBirth"
                    onChange={formik.handleChange}
                    value={formik.values.dateOfBirth}
                    onBlur={formik.handleBlur}
                  />
                  <FormErrorMessage>
                    {formik.errors.dateOfBirth}
                  </FormErrorMessage>
                </FormControl>

                {/* <FormControl
                  mt={4}
                  isInvalid={formik.errors.gender && formik.touched.gender}>
                  <FormLabel htmlFor="gender">Gender</FormLabel>
                  <RadioGroup
                    name="gender"
                    id="gender"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.gender}>
                    <Stack direction="row">
                      <Radio value="male" size="md" colorScheme="green">
                        Male
                      </Radio>
                      <Radio value="female" size="md" colorScheme="pink">
                        Female
                      </Radio>
                      <Radio value="other" size="md" colorScheme="blue">
                        Other
                      </Radio>
                    </Stack>
                  </RadioGroup>

                  <FormErrorMessage name="gender">
                    {formik.errors.gender}
                  </FormErrorMessage>
                </FormControl> */}
              </HStack>
              <FormControl
                mt={4}
                isInvalid={formik.errors.password && formik.touched.password}>
                <FormLabel>Password</FormLabel>

                <InputGroup size="md">
                  <Input
                    type={showPassword ? "password" : "text"}
                    placeholder="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      // h="1.75rem"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl
                mt={4}
                isInvalid={
                  formik.errors.confirmPassword &&
                  formik.touched.confirmPassword
                }>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type={showPassword ? "password" : "text"}
                  placeholder="confirm password"
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>
                  {formik.errors.confirmPassword}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>
          </form>
          <ModalFooter>
            <Button
              type="submit"
              onClick={formik.handleSubmit}
              colorScheme="blue"
              mr={3}>
              Register
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignInPage;
