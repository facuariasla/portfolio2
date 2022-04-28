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
      backgroundColor='tomato'
      zIndex={2}
    >
      {/* <Text fontSize={20}>Nombre</Text> */}
      <Heading
        fontSize={22}
        border="solid 1px white"
        padding={2}
        textAlign="center"
      >
        Arias Facundo
      </Heading>
      {/* Only in < 480px */}
      {isMobile ? (
        <MenuNav />
      ) : (
        <Stack direction="row" alignItems="center" spacing={6}>
          {/* Agregar id con el mismo nombre de href a donde ir */}
          <Heading fontSize={[18, null, null, null, 25]} href="#">
            Home
          </Heading>
          <Heading fontSize={[18, null, null, null, 25]} href="#">
            About
          </Heading>
          <Heading fontSize={[18, null, null, null, 25]} href="#">
            Portfolio
          </Heading>
          <Heading fontSize={[18, null, null, null, 25]} href="#">
            Contact
          </Heading>
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
