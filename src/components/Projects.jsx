import {
  SimpleGrid,
  Stack,
  Text,
  Image,
  Link,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/proyect-screens/RPS-pvp2.png";
import img2 from "../assets/proyect-screens/RPS-single2.png";
import img3 from "../assets/proyect-screens/Crypto-info2.png";
import img4 from "../assets/proyect-screens/YuGiOh2.png";
import img5 from "../assets/proyect-screens/LandingPage2.png";
import img6 from "../assets/proyect-screens/FirstPortf2.png";

const projects = [
  {
    id: 1,
    title: "Rock, Paper & Scissors - pvp",
    img: img1,
    desc: "",
    link: "https://des6-2.herokuapp.com",
    repo: "https://github.com/facuariasla/des6-2",
  },
  {
    id: 2,
    title: "Rock, Paper & Scissors - Single",
    img: img2,
    desc: "",
    link: "https://facuariasla.github.io/8des-m5",
    repo: "https://github.com/facuariasla/8des-m5",
  },
  {
    id: 3,
    title: "Crypto-info",
    img: img3,
    desc: "",
    link: "https://cryptodata001.netlify.app",
    repo: "https://github.com/facuariasla/crypto-info",
  },
  {
    id: 4,
    title: "YuGiOh Cards",
    img: img4,
    desc: "In development...",
    link: "https://yugiohcards00.netlify.app ",
    repo: "https://github.com/facuariasla/yugioh-cards-cra",
  },
  {
    id: 5,
    title: "Landing Page",
    img: img5,
    desc: "",
    link: "https://62543e5b0e435b7f891a0ce1--stellar-profiterole-99e7c9.netlify.app",
    repo: "https://github.com/facuariasla/landing-page-react",
  },
];

export const Projects = () => {
  const moodColor = useColorModeValue("tomato.500", "tomato.900");

  return (
    <Stack paddingX={5} pt={20} pb={10} id="portfolio">
      <Text textAlign="center" pb={3} fontSize={40}>
        Some Projects
      </Text>

      <SimpleGrid columns={[2, 2, 2, 3, 5, 5]} gap={5} justifyItems='center' paddingY={6}>
        {projects.map((el) => (
          <Stack
            key={el.id}
            textAlign="center"
            transition="all 0.4s"
            filter='grayscale(75%)'
            _hover={{
              transform: "translateY(-5px)",
              filter:'none'
            }}
            _active={{
              filter:'none'
            }}
            boxShadow="dark-lg"
            rounded="md"
            bg={moodColor}
            h={220}
            maxW={200}
          >
            <Link
              href={el.link}
              isExternal
              h="60%"
              display="flex"
              justifyContent="center"
            >
              <Image
                src={el.img}
                h="100%"
              ></Image>
            </Link>
            <Stack justifyContent="center" h="40%">
              <Text fontWeight="bold">{el.title}</Text>
              <Link href={el.repo} fontSize={14} isExternal>
                Repository
              </Link>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
