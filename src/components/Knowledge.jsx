import React, { useEffect } from "react";
import {
  Stack,
  Link,
  Icon,
  Text,
  Grid,
  SimpleGrid,
  Heading,
  useColorModeValue
} from "@chakra-ui/react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiFirebase,
  SiExpress,
  SiSass,
  SiChakraui,
  SiStyledcomponents,
  SiNodedotjs,
  SiPostgresql,
  SiSequelize,
  SiTailwindcss
} from "react-icons/si";
import Aos from 'aos';
import "aos/dist/aos.css";

// 13
const technologies = [
  {
    id: 1,
    name: "Javascript",
    icon: SiJavascript,
    link: "https://www.javascript.com/",
  },
  {
    id: 2,
    name: "ReactJS",
    icon: SiReact,
    link: "https://es.reactjs.org/",
  },
  {
    id: 3,
    name: "Typescript",
    icon: SiTypescript,
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 4,
    name: "HTML5",
    icon: SiHtml5,
    link: "https://www.w3.org/TR/2011/WD-html5-20110405/",
  },
  {
    id: 5,
    name: "CSS3",
    icon: SiCss3,
    link: "https://www.w3.org/TR/CSS/#css",
  },
  {
    id: 14,
    name: "Tailwind",
    icon: SiTailwindcss,
    link: "https://tailwindcss.com/",
  },
  {
    id: 6,
    name: "Chakra UI",
    icon: SiChakraui,
    link: "https://chakra-ui.com/",
  },
  {
    id: 10,
    name: "Styled-Components",
    icon: SiStyledcomponents,
    link: "https://styled-components.com/",
  },
  {
    id: 7,
    name: "Sass",
    icon: SiSass,
    link: "https://sass-lang.com/",
  },
  {
    id: 8,
    name: "Express",
    icon: SiExpress,
    link: "https://expressjs.com/",
  },
  {
    id: 9,
    name: "Firebase",
    icon: SiFirebase,
    link: "https://firebase.google.com/",
  },
  {
    id: 11,
    name: "NodeJS",
    icon: SiNodedotjs,
    link: "https://nodejs.org/en/",
  },
  {
    id: 12,
    name: "PostgreSQL",
    icon: SiPostgresql,
    link: "https://www.postgresql.org/",
  },
  {
    id: 13,
    name: "Sequelize",
    icon: SiSequelize,
    link: "https://sequelize.org/",
  },

];


export const Knowledge = () => {
  const colorTech = useColorModeValue('black', 'white');

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, [])
  

  return (
    <Stack paddingTop={24} data-aos='fade-up'>
      <Text textAlign="center" pb={3} fontSize={40} 
>
        Technologies
      </Text>
      <Grid ></Grid>

      {/* minChildWidth='90px'  */}
      <SimpleGrid columns={[2,3,3,4]}  gap={6} padding={4}>
        {technologies.map((tech) => (
          <Link
            key={tech.id}
            href={tech.link}
            isExternal
            color={colorTech}
            textAlign="center"
            transition='all 0.5s'
            _hover={{textDecoration: 'none', color: 'tomato.500'
          }}
          >
            <Icon
              as={tech.icon}
              h={[6, null, null, 8]}
              w={[6, null, null, 8]}
            ></Icon>
            <Text fontSize={[14, null, null, 16]} textAlign="center">
              {tech.name}
            </Text>
          </Link>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
