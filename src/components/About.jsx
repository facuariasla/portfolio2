import React, { useEffect } from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";
import Aos from 'aos';
import "aos/dist/aos.css";

const about = {
  en:{
    // line1: "Hey there! im Facundo Arias",
    line1: 'Hey there! im Facundo Arias. Passionate about web development, frontend development and introducing me to the backend, web3 enthusiast. I have carried out some personal projects, involving both the frontend, and the creation of APIs on the backend side, you can see in the projects section',
    line2: "Frontend developer",
    line3: "Backend enthusiast",
    line4: "Analogic photography 🤠"
  }
}


export const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, [])
  
  
  return (
    <Stack
      direction={["column", "column", "column", "row", "row"]}
      padding={6}
      pt={12}
      id="about"
      justifyContent='space-around'
      data-aos='fade-up'
    >
      <Text textAlign="center" padding={3} fontSize={40}>
        About me
      </Text>
      <Stack width={['70%', null, null, '50%', '30%']} alignSelf='center' pt={5}>
        <Text textAlign='center'>{about.en.line1}</Text>

      </Stack>

      {/* <Stack>
        <Text> Algo random alguna imagen o algo</Text>
      </Stack> */}
    </Stack>
  );
};
