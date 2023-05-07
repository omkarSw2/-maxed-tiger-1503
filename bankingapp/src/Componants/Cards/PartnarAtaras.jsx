import {
  SiApple,
  SiAdidas,
  SiSamsung,
  SiPuma,
  SiAmazon,
  SiFlipkart,
  SiStarbucks,
} from "react-icons/si";
import React from "react";
import { Avatar, Link } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

let partnerlogos = [
  {
    name: SiAdidas,
    to: "https://www.adidas.co.in",
  },
  {
    name: SiApple,
    to: "https://www.apple.com/in/",
  },
  {
    name: SiSamsung,
    to: "https://www.samsung.com/in/",
  },
  {
    name: SiAmazon,
    to: "https://www.amazon.in/",
  },
  {
    name: SiFlipkart,
    to: "https://www.flipkart.com/",
  },
  {
    name: SiStarbucks,
    to: "https://www.starbucks.in/dashboard",
  },
  {
    name: SiPuma,
    to: "https://in.puma.com/in/en",
  },
];

export default function PartnarAtaras() {
  return (
    <>
      {partnerlogos.map((item) => (
        <Link href={item.to} isExternal>
          <Avatar
            size="lg"
            bg={"white"}
            // name="Segun Adebayo"
            icon={<item.name color="black" />}
          />
        </Link>
      ))}
    </>
  );
}
