import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Text,
  Heading,
  Stack,
  Button,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

const initialForm = {
  emailVal: "",
  message: "",
};

export const Contact = () => {
  const colorComp = useColorModeValue("tomato.500", "tomato.900");
  const formsColor = useColorModeValue("gray.300", "gray.800");
  const toast = useToast();

  const [email, setEmail] = useState(initialForm);

  const handleChange = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.emailVal || !email.message) {
      return toast({
        title: "Incomplete data.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
    // Aca metemos un fetch
    messageSend();
    setEmail(initialForm);
    alertSent();
  };

  const messageSend = async() => {
    return fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "facundolautaroarias@hotmail.com",
        message: `email ${email.emailVal}, ${email.message}`,
      }),
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
  };

  const alertSent = () => {
    toast({
      title: "Message sent.",
      description: "The message was sent successfully",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  const isError = email.emailVal === "";
  const isError2 = email.message === "";
  return (
    <Stack padding={6} id="contact">
      <Text textAlign="center" pb={3} fontSize={40}>
        Contact
      </Text>

      <FormControl
        onSubmit={handleSubmit}
        isRequired
        w={["100%", null, null, "50%"]}
        alignSelf="center"
      >
        <FormLabel htmlFor="email">From</FormLabel>
        <Input
          id="email"
          type="text"
          placeholder="Email"
          backgroundColor={formsColor}
          name="emailVal"
          value={email.emailVal}
          onChange={handleChange}
        />

        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea
          id="message"
          backgroundColor={formsColor}
          placeholder="Leave your message"
          maxLength="2000"
          name="message"
          value={email.message}
          onChange={handleChange}
        />

        <Button
          type="submit"
          marginY={5}
          width="100%"
          variant="outline"
          backgroundColor={formsColor}
          _hover={{ backgroundColor: colorComp, transition: "all .5s" }}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </FormControl>
    </Stack>
  );
};
