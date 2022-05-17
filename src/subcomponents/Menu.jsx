import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Heading,
  Button,
  Icon,
  Stack,
  Link,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { BiAlignRight } from "react-icons/bi";

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

export const MenuNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { toggleColorMode } = useColorMode();
  const iconMode = useColorModeValue(MoonIcon, SunIcon);
  const colorComp = useColorModeValue('tomato.500', 'gray.800');

  return (
    <>
      <Button ref={btnRef} backgroundColor={colorComp} onClick={onOpen} w={14}>
        <Icon as={BiAlignRight} height={8} width={8}></Icon>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton fontSize={25} />
          <DrawerHeader></DrawerHeader>

          <DrawerBody paddingY={8}>
            <Stack direction="column" spacing={8} fontSize={24}>
              <Icon
                as={iconMode}
                onClick={toggleColorMode}
                cursor="pointer"
                height={8}
                width={8}
              ></Icon>

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
                  <Heading fontSize={28}>{el.content}</Heading>
                </Link>
              ))}

            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
