import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";

export const Contact = () => {
  return (
    <Stack padding={6}>
      <Text textAlign="center" pb={3} fontSize={40}>
        Contact me
      </Text>

      <FormControl
        isRequired
        w={["100%", null, null, "50%"]}
        alignSelf='center'
      >
        <FormLabel htmlFor="email">From</FormLabel>
        <Input id="name" type="text" placeholder="Email" />
        <FormHelperText>Your information will never be shared.</FormHelperText>
        <FormLabel htmlFor="name">Message</FormLabel>
        <Textarea placeholder="Leave your message" />
        <Button marginY={5} width='100%'>Send</Button>
      </FormControl>
    </Stack>
  );
};
