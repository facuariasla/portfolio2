import { Stack, Link, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export const Footer = () => {
  return (
    <Stack width="100%" paddingTop={12} paddingBottom={4} fontSize={20}>
      <Stack justifyContent="center" alignItems="center" direction="column">
        <Stack
          direction="row"
          justifyContent="center"
          spacing={[12, null, null, 40]}
          w="100%"
        >
          <Link
            href="https://github.com/facuariasla"
            isExternal
            transition= "all 0.5s"
            _hover={{
              textDecoration: "none",
              color: "tomato",
            }}
          >
            <Icon as={SiGithub}></Icon>
          </Link>
          <Link
            href="https://www.linkedin.com/in/facuariasla/"
            isExternal
            transition= "all 0.5s"
            _hover={{
              textDecoration: "none",
              color: "tomato",
              
            }}
          >
            <Icon as={SiLinkedin}></Icon>
          </Link>
          <Link
            href="https://www.instagram.com/facuariasla/"
            isExternal
            transition= "all 0.5s"

            _hover={{
              textDecoration: "none",
              color: "tomato",
            }}
          >
            <Icon as={SiInstagram}></Icon>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
