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
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { BiAlignRight } from "react-icons/bi";

export const MenuNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { toggleColorMode } = useColorMode();
  const iconMode = useColorModeValue(MoonIcon, SunIcon);

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <Icon as={BiAlignRight} height={6} width={6}></Icon>
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
              <Heading fontSize={28} href="#">
                Home
              </Heading>
              <Heading fontSize={28} href="#">
                About
              </Heading>
              <Heading fontSize={28} href="#">
                Portfolio
              </Heading>
              <Heading fontSize={28} href="#">
                Contact
              </Heading>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
