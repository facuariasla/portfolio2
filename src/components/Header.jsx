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
  LinkOverlay,
} from "@chakra-ui/react";

import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const links = [
  {
    id: 1,
    content: "Home",
    href: "#home",
  },
  {
    id: 2,
    content: "About",
    href: "#about",
  },
  {
    id: 3,
    content: "Portfolio",
    href: "#portfolio",
  },
  {
    id: 4,
    content: "Contact",
    href: "#contact",
  },
];

export const Header = () => {
  const { toggleColorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const iconMode = useColorModeValue(MoonIcon, SunIcon);
  const colorComp = useColorModeValue('tomato.500', 'tomato.900');


  return (
    <Stack
      as="header"
      position="fixed"
      width="100vw"
      fontSize={20}
      direction="row"
      justifyContent="space-between"
      padding={2.5}
      paddingRight={10}
      backgroundColor={colorComp}
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
          {links.map((el) => (
            <Link
              key={el.id}
              href={el.href}
              _hover={{
                textDecoration: "none",
                color: "gray.500",
                transition: "all .4s",
              }}
            >
              <Heading fontSize={[18, null, null, null, 22]}>
                {el.content}
              </Heading>
            </Link>
          ))}

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
