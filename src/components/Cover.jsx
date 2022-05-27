import React, { useEffect } from "react";
import {
  Stack,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Aos from 'aos';
import "aos/dist/aos.css";


const svgStyle = {
  before: {
    position: "absolute",
    top: 0,
    left: 0,
    content: "",
    width: "100%",
    height: "100%",
    zIndex: -1,
    mixBlendMode: "multiply",
    background: "#000",
    filter: "url(#noiseFilter)",
  },

  after: {
    position: "absolute",
    top: 0,
    left: 0,
    content: "",
    width: "100%",
    height: "100%",
    zIndex: -1,
    mixBlendMode: "multiply",
    backgroundColor: "hsla(51,100%,49%,1)",
    backgroundImage:
      "radial-gradient(at 91% 16%, hsla(50,61%,30%,1) 0px, transparent 50%), radial-gradient(at 40% 20%, hsla(38,61%,27%,1) 0px, transparent 50%),radial-gradient(at 0% 50%, hsla(28,59%,27%,1) 0px, transparent 50%),radial-gradient(at 86% 87%, hsla(28,60%,33%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(28,45%,20%,1) 0px, transparent 50%),radial-gradient(at 80% 100%, hsla(50,45%,15%,1) 0px, transparent 50%),radial-gradient(at 0% 3%, hsla(28,19%,24%,1) 0px, transparent 50%)",
  },
};

export const Cover = () => {
  const colorComp = useColorModeValue('tomato.500', 'gray.800');
  const fontColor = useColorModeValue('black', 'tomato');

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, [])
  

  return (
    <Stack
      height="100vh"
      direction={["column", null, null, "row"]}
      width="100%"
      alignItems="center"
      justifyContent="center"
      id='home'
      backgroundColor={colorComp}
      color={fontColor}
    >
      <Stack
        width={["100%", null, null, "50%"]}
        height={["90vh", null, null, "90vh"]}
        display={["none", "", "", "block"]}
        alignItems="center"
      >
        {/* Cambiar TAG al poner IMG u otra cosa */}
        <Heading
          h="100%"
          alignItems="center"
          margin={0}
          fontSize={{ base: 300, md: 320, lg: 350, xl: 450 }}
          textAlign="center"
          isTruncated
          display="flex"
          justifyContent="center"
          data-aos='fade-right'
        
        >
          F
        </Heading>
      </Stack>
      <Stack
        width={["100%", null, null, "50%"]}
        height={["90vh", null, null, "90vh"]}
      >
        <Heading
          h="100%"
          alignItems="center"
          margin={0}
          fontSize={{ base: 300, md: 320, lg: 350, xl: 450 }}
          textAlign="center"
          isTruncated
          display="flex"
          justifyContent="center"
          data-aos='fade-left'
        >
          .A
        </Heading>
      </Stack>
    </Stack>
  );
};

// const breakpoints = {
//   sm: '30em',
//   md: '48em',
//   lg: '62em',
//   xl: '80em',
//   '2xl': '96em',
// }

// 30em --> 480px
// 48em --> 768px
// 62em --> 992px
// 80em --> 1280px
// 96em --> 1536px

// Internally, we transform to this
// const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em']
