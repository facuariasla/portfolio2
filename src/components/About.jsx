import React from "react";
import { Stack, Text } from "@chakra-ui/react";

export const About = () => {
  return (
    <Stack direction='row' padding={6} id='about'>
      <Stack>
        <Text>Algunas descripciones sobre mi etc etc etc</Text>
        <Text>Algunas descripciones sobre mi etc etc etc</Text>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima assumenda natus beatae reiciendis, modi ipsam veritatis nulla neque, illo qui ea facere iste aspernatur delectus placeat. Voluptatem, minima odio? Provident.</Text>
      </Stack>

      <Stack>
        <Text> Algo random alguna imagen o algo</Text>
      </Stack>
    </Stack>
  );
};
