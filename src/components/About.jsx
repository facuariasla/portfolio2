import React, { useEffect } from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";
import Aos from 'aos';
import "aos/dist/aos.css";

const about = {
  en:{
    // line1: "Hey there! im Facundo Arias",
    line1: "Hey there! I'm Facundo Arias from Argentina, a passionate self-taught Frontend developer with ReactJS. Pseudo Fullstack developer, with some knowledge in the Backend using NodeJS. Web3 enthusiast. Continually learning",
    line2: "I've carried out some personal projects, involving the Frontend and the Backend, which you can see in the projects section",
  }
}

export const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, [])
  
  
  return (
    <Stack
      direction={["column", "column", "column", "row", "row"]}
      pt={12}
      px={[null,null,null, 12]}
      id="about"
      justifyContent='space-around'
      data-aos='fade-up'
    >
      <Text textAlign="center" padding={3} fontSize={40}>
        About me
      </Text>
      <Stack width={['70%', null, null, '60%', '40%']} alignSelf='center' pt={5}>
        <Text textAlign='center'>{about.en.line1}</Text>
        <Text textAlign='center'>{about.en.line2}</Text>
      </Stack>

      {/* <Stack>
        <Text> Algo random alguna imagen o algo</Text>
      </Stack> */}
    </Stack>
  );
};
