import {
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
    // key={id + title + Path}
    <>
      <Card maxW="sm" colorScheme="whatsapp" mr={"5"} key={id + title + Path}>
        <CardBody>
          <Image src={image} alt={id} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            {description.map((item) => (
              <List key={item + Date.now()}>
                <ListItem textAlign="left">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {item}
                </ListItem>
              </List>
            ))}
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link to={`/services/${id}`}>
              <Button variant="outline" colorScheme="messenger">
                View more...
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}
