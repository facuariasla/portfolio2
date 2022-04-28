import { SimpleGrid, Stack, Text, Image, Link } from "@chakra-ui/react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Rock, Paper & Scissors - PVP",
    img: "",
    desc: "",
    link: "https://des6-2.herokuapp.com",
    repo: "https://github.com/facuariasla/des6-2",
  },
  {
    id: 2,
    title: "Rock, Paper & Scissors - SinglePlayer",
    img: "",
    desc: "",
    link: "https://facuariasla.github.io/8des-m5",
    repo: "https://github.com/facuariasla/8des-m5",
  },
  {
    id: 3,
    title: "Crypto-info",
    img: "",
    desc: "",
    link: "https://cryptodata001.netlify.app",
    repo: "https://github.com/facuariasla/crypto-info",
  },
  {
    id: 4,
    title: "YuGiOh Cards",
    img: "",
    desc: "In development...",
    link: "https://yugiohcards00.netlify.app ",
    repo: "",
  },
  {
    id: 5,
    title: "Landing Page - GPT3",
    img: "",
    desc: "",
    link: "https://62543e5b0e435b7f891a0ce1--stellar-profiterole-99e7c9.netlify.app",
    repo: "",
  },
  {
    id: 6,
    title: "My First Portfolio",
    img: "",
    desc: "",
    link: "https://facuariasla.github.io/facuariasla-des4/",
    repo: "",
  },
];

export const Projects = () => {
  return (
    <Stack padding={5}>
      <Text textAlign="center" pb={3} fontSize={40}>
       Some Projects
      </Text>

      <SimpleGrid columns={[2, 2, 3, 3]} gap={4}>
        {projects.map((el) => (
          <Stack key={el.id} border='1px solid tomato' textAlign='center'>
            <Link href={el.link} isExternal>
              <Image src="" h={100} w='100%'></Image>
            </Link>
            <Text>{el.title}</Text>
            <Text>{el.desc}</Text>
            <Link href={el.repo}>Repository</Link>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
