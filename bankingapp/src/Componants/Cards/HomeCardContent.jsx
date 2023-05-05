import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";

export default function HomeCardContent({
  id,
  image,
  description,
  title,
  Path,
}) {
  return (
    <>
      <Card maxW="sm" colorScheme="whatsapp" mr={"5"} key={id}>
        <CardBody>
          <Image src={image} alt={id} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <List>
              {description.map((item) => (
                <ListItem textAlign="left">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {item}
                </ListItem>
              ))}
            </List>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link to={Path}>
              <Button variant="outline" colorScheme="messenger">View more...</Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}
