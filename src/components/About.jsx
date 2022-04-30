import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";

const about = {
  en:{
    line1: "Hey there! im Facundo Arias",
    line2: "Frontend developer",
    line3: "Backend enthusiast",
    line4: "Analogic photography 🤠"
  }
}



export const About = () => {
  return (
    <Stack
      direction={["column", "column", "column", "row", "row"]}
      padding={6}
      pt={12}
      id="about"
      justifyContent='space-around'

    >
      <Heading textAlign="center" padding={3}>
        About me
      </Heading>
      <Stack width={['70%', null, null, '50%', '30%']} alignSelf='center'>
        <Text textAlign='center'>{about.en.line1}</Text>
        <Text textAlign='center'>{about.en.line2}</Text>
        <Text textAlign='center'>{about.en.line3}</Text>
        <Text textAlign='center'>{about.en.line4}</Text>

      </Stack>

      {/* <Stack>
        <Text> Algo random alguna imagen o algo</Text>
      </Stack> */}
    </Stack>
  );
};
