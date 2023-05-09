import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function ServiceAccordian({ title, description }) {
  console.log(title);
  
  return (
    <>
      <Accordion allowToggle>
        {title?.map((item) => (
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "blue.500", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  <Text as={"b"}>Step :{item.id}</Text>
                  <Text as={"samp"} ml={2}>
                    {item.title}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4}>
              <Text as="abbr" fontSize="xl">
                {item.description}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
