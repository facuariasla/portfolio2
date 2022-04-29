import React, { useState } from "react";
import { MenuNav } from "../subcomponents/Menu";
import {
  Stack,
  Text,
  Heading,
  useMediaQuery,
  Icon,
  useColorMode,
  useColorModeValue,
  Flex,
  Link,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";

import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const Header = () => {
  const { toggleColorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const iconMode = useColorModeValue(MoonIcon, SunIcon);

  return (
    <Stack
      as="header"
      position="fixed"
      width="100vw"
      fontSize={20}
      direction="row"
      justifyContent="space-between"
      padding={4}
      paddingRight={10}
      backgroundColor="tomato"
      zIndex={2}
    >
      {/* <Text fontSize={20}>Nombre</Text> */}
      <LinkBox>
        <LinkOverlay href="#home">
          <Heading
            fontSize={22}
            border="solid 1px white"
            padding={2}
            textAlign="center"
          >
            Arias Facundo
          </Heading>
        </LinkOverlay>
      </LinkBox>
      {/* Only in < 480px */}
      {isMobile ? (
        <MenuNav />
      ) : (
        <Stack direction="row" alignItems="center" spacing={6}>
          {/* Agregar id con el mismo nombre de href a donde ir */}
          <Link href="#home">
            <Heading fontSize={[18, null, null, null, 25]} href="#">
              Home
            </Heading>
          </Link>

          <Link href="#about">
            <Heading fontSize={[18, null, null, null, 25]} href="#">
              About
            </Heading>
          </Link>

          <Link href="#portfolio">
            <Heading fontSize={[18, null, null, null, 25]} href="#">
              Portfolio
            </Heading>
          </Link>

          <Link href="#contact">
            <Heading fontSize={[18, null, null, null, 25]} href="#">
              Contact
            </Heading>
          </Link>

          <Icon
            as={iconMode}
            onClick={toggleColorMode}
            cursor="pointer"
            fontSize={[20, 25, 20, 25, 30]}
          ></Icon>
        </Stack>
      )}
    </Stack>
  );
};
