import {
  SimpleGrid,
  Stack,
  Text,
  Image,
  Link,
  Heading,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/proyect-screens/RPS-pvp2.png";
import img2 from "../assets/proyect-screens/RPS-single2.png";
import img3 from "../assets/proyect-screens/Crypto-info2.png";
import img4 from "../assets/proyect-screens/YuGiOh2.png";
import img5 from "../assets/proyect-screens/LandingPage2.png";
import img0 from "../assets/proyect-screens/realestate.png";
import img6 from "../assets/proyect-screens/icon-poke.png";

const projects = [
  {
    id: 6,
    title: "Who's that Pokemon?",
    img: img6,
    desc: "Who's that Pokemon!?. Created using React Hooks in Vite project, some CSS styles, and Piskel. Credits: goncypozzo challenges. Components from https://nostalgic-css.github.io/NES.css/  ",
    link: "https://pokemon-who.vercel.app/",
    repo: "https://github.com/facuariasla/pokemon-who",
  },
  {
    id: 0,
    title: "Real Estate - Properties",
    img: img0,
    desc: "WebApp that shows properties to rent & buy; you can apply a couple of filters. Created using NextJS, React Hooks, & ChakraUI",
    link: "https://realestate-properties.vercel.app/",
    repo: "https://github.com/facuariasla/realestate-properties",
  },
  {
    id: 1,
    title: "Rock, Paper & Scissors - pvp",
    img: img1,
    desc: "The classic rock, paper and scissors game, but you can play agains a friend! Created using VanillaJS/TypeScript, HTML & CSS. Firebase to manipulate and store data, ExpressJS and NodeJS to create the API REST.",
    link: "https://des6-2.herokuapp.com",
    repo: "https://github.com/facuariasla/des6-2",
  },
  {
    id: 2,
    title: "Rock, Paper & Scissors - Single",
    img: img2,
    desc: "The classic rock, paper and scissors game, user vs BOT. Created using VanillaJS/TypeScript, HTML & CSS. Usage of History API Web, sessionStorage & localStorage",    
    link: "https://facuariasla.github.io/8des-m5",
    repo: "https://github.com/facuariasla/8des-m5",
  },
  {
    id: 3,
    title: "Crypto-info",
    img: img3,
    desc: "Application where you can see the flow of different cryptocurrencies over time, in a graph. Created using ReactHooks, CoinGeko API, axios, and react-chartjs-2",
    link: "https://cryptodata001.netlify.app",
    repo: "https://github.com/facuariasla/crypto-info",
  },
  {
    id: 4,
    title: "YuGiOh Cards",
    img: img4,
    desc: "You can get random YuGiOh cards (Ygoprodeck API). In development...",
    link: "https://yugiohcards00.netlify.app ",
    repo: "https://github.com/facuariasla/yugioh-cards-cra",
  },
  {
    id: 5,
    title: "Landing Page",
    img: img5,
    desc: "Basic Landing Page using ReactJS (Create React App), and CSS Flexbox",
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

      <SimpleGrid
        // columns={[2, 2, 2, 3, 5, 5]}
        minChildWidth='150px'
        gap={5}
        justifyItems="center"
        paddingY={6}
      >
        {projects.map((el) => (
          <Tooltip
            key={el.id}
            label={el.desc}
            aria-label="A tooltip"
          >
            <Stack
              textAlign="center"
              transition="all 0.4s"
              filter="grayscale(75%)"
              _hover={{
                transform: "translateY(-5px)",
                filter: "none",
              }}
              _active={{
                filter: "none",
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
                <Image src={el.img} h="100%"></Image>
              </Link>
              <Stack justifyContent="center" h="40%">
                <Text fontWeight="bold" px={2}>{el.title}</Text>
                <Link href={el.repo} fontSize={14} isExternal>
                  Repository
                </Link>
              </Stack>
            </Stack>
          </Tooltip>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
