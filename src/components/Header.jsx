import React from "react";
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
  const colorComp = useColorModeValue('tomato.500', 'gray.800');
  const fontColor = useColorModeValue('black', 'tomato');
  const linesColor = useColorModeValue('white', 'tomato');


  return (
    <Stack
      as="header"
      position="fixed"
      width="100vw"
      fontSize={20}
      direction="row"
      justifyContent="space-between"
      padding={2.5}
      paddingRight='4%'
      backgroundColor={colorComp}
      zIndex={2}
      color={fontColor}
    >
      {/* <Text fontSize={20}>Nombre</Text> */}
      <LinkBox>
        <LinkOverlay href="#home" >
          <Heading
            fontSize={22}
            border="solid 1px"
            borderColor={linesColor}
            padding={2}
            textAlign="center"
            transition= "all 0.5s"

          >
            Arias Facundo
          </Heading>
        </LinkOverlay>
      </LinkBox>
      {/* Only in < 480px */}
      {isMobile ? (
        <MenuNav data-aos='fade-left'/>
      ) : (
        <Stack direction="row" alignItems="center" spacing={6}>
          {/* Agregar id con el mismo nombre de href a donde ir */}
          {links.map((el) => (
            <Link
              key={el.id}
              href={el.href}
              transition= "all 0.5s"
              _hover={{
                textDecoration: "none",
                color: "gray.100",
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
            transition= "all 0.5s"
            _hover={{
              textDecoration: "none",
              color: "gray.100",
            }}
          ></Icon>
        </Stack>
      )}
    </Stack>
  );
};
