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
import React, { useEffect } from "react";
import img1 from "../assets/proyect-screens/RPS-pvp2.png";
import img2 from "../assets/proyect-screens/RPS-single2.png";
import img3 from "../assets/proyect-screens/Crypto-info2.png";
import img4 from "../assets/proyect-screens/YuGiOh2.png";
import img5 from "../assets/proyect-screens/LandingPage2.png";
import img0 from "../assets/proyect-screens/realestate.png";
import img6 from "../assets/proyect-screens/icon-poke.png";
import img7 from "../assets/proyect-screens/lost-pets.png";
import img8 from "../assets/proyect-screens/movie-finder.png";
import img9 from '../assets/proyect-screens/pooltogether.png';
import img10 from '../assets/proyect-screens/basement.png'
import img11 from '../assets/proyect-screens/logopepes.png'
import img12 from '../assets/proyect-screens/pikachu.png'

import Aos from 'aos';
import "aos/dist/aos.css";

const projects = [
  {
    id: 7,
    title: "Mascotas Perdidas",
    img: img7,
    desc: "WebApp that helps people find their pets, using location with Mapbox. People can see the lost pets around them, and report them with the owner. Technologies: TypeScript, ReactJS & ChakraUI. MapBox and SendGrid. Backend with PostgreSQL - Sequelize and Algolia. ",
    link: "https://mascotasperdidas-iota.vercel.app/",
    repo: "https://github.com/facuariasla/lost-pets-vite",
  },
  {
    id: 10,
    title: "Basement Challenge",
    img: img10,
    desc: "Frontend challenge from basement.studio. State management with Zustand in NextJS, styled with Sass and Framer-motion",
    link: "https://basement-ch.vercel.app/",
    repo: "https://github.com/facuariasla/basement-ch-two",
  },
  {
    id: 11,
    title: "Almacén Pepe",
    img: img11,
    desc: "Simple store that sell a couple of products. You can buy products by communicating with the store seller via WhatsApp. The products come from a Google Sheets file that the seller can update whenever they want.",
    link: "https://pepealmacen.vercel.app/",
    repo: "https://github.com/facuariasla/almacen-next-chakra",
  },
  {
    id: 12,
    title: "Poke-buscador",
    img: img12,
    desc: "Pokemon searcher. You can search any pokemon (1152), filter by type (if you want), and see the details of each one. [React Hooks, Tailwind, React Router Dom, and PokeAPI].",
    link: "https://pokepoke-ten.vercel.app/",
    repo: "https://github.com/facuariasla/poke-tailwind",
  },
  {
    id: 8,
    title: "Movie Finder",
    img: img8,
    desc: "You can search movies, and see the details of each movie. Searching by filters as a year of release or/and series, episode, movie. Created with React Hooks, TypeScript, Styled-Components & AntDesign. API: omdbapi.com",
    link: "https://moviefinder-ch.vercel.app/",
    repo: "https://github.com/facuariasla/moviefinder-ch",
  },
  {
    id: 9,
    title: "Crypto Prices - Pooltoogether",
    img: img9,
    desc: "Pooltogether challenge. You can 'add' fake money to your account filling a form, and then buy crypto currencies. React Hooks, state management with Zustand, react-hook-form, styled with ChakraUI. ",
    link: "https://2-pooltogether-challenge.vercel.app/#/",
    repo: "https://github.com/facuariasla/2-pooltogether-challenge",
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
    id: 3,
    title: "Crypto-info",
    img: img3,
    desc: "Application where you can see the flow of different cryptocurrencies over time, in a graph. Created using React Hooks, CoinGeko API, Axios, and react-chartjs-2",
    link: "https://cryptodata001.netlify.app",
    repo: "https://github.com/facuariasla/crypto-info",
  },
  {
    id: 1,
    title: "Rock, Paper & Scissors - pvp",
    img: img1,
    desc: "The classic rock, paper and scissors game, but you can play against a friend! Created using VanillaJS/TypeScript, HTML & CSS. Firebase to manipulate and store data, ExpressJS and NodeJS to create the API REST. Stored in Heroku",
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
    id: 6,
    title: "Who's that Pokemon?",
    img: img6,
    desc: "Who's that Pokemon!?. Created using React Hooks in Vite project, some CSS styles, and Piskel. Credits: goncypozzo challenges. Components from https://nostalgic-css.github.io/NES.css/  ",
    link: "https://pokemon-who.vercel.app/",
    repo: "https://github.com/facuariasla/pokemon-who",
  },
  // {
  //   id: 4,
  //   title: "YuGiOh Cards",
  //   img: img4,
  //   desc: "You can get random YuGiOh cards (Ygoprodeck API). In development...",
  //   link: "https://yugiohcards00.netlify.app ",
  //   repo: "https://github.com/facuariasla/yugioh-cards-cra",
  // },
  // {
  //   id: 5,
  //   title: "Landing Page",
  //   img: img5,
  //   desc: "Basic Landing Page using ReactJS (Create React App), and CSS Flexbox",
  //   link: "https://62543e5b0e435b7f891a0ce1--stellar-profiterole-99e7c9.netlify.app",
  //   repo: "https://github.com/facuariasla/landing-page-react",
  // },

];

export const Projects = () => {
  const moodColor = useColorModeValue("tomato.500", "tomato.900");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <Stack paddingX={10} pt={20} pb={10} id="portfolio" data-aos='fade-up'>
      <Text textAlign="center" pb={3} fontSize={40}>
        Some Projects
      </Text>

      <SimpleGrid
        // columns={[2, 2, 2, 3, 5, 5]}
        minChildWidth='150px'
        gap={5}
        justifyItems="center"
        paddingY={6}
        paddingX={4}
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
                <Image src={el.img} backgroundSize='cover' borderTopRadius={8}/>
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
