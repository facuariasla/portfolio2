import React from "react";
import {
  Stack,
  Link,
  Icon,
  Text,
  Grid,
  SimpleGrid,
  Heading,
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
} from "react-icons/si";

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
    id: 6,
    name: "Chakra UI",
    icon: SiChakraui,
    link: "https://chakra-ui.com/",
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
];

export const Knowledge = () => {
  return (
    <Stack paddingY={8} borderBottom="1px white solid" >
      <Text textAlign="center" pb={3} fontSize={40}>
        Technologies
      </Text>
      <SimpleGrid columns={[3, null, null, 4, 5, 9]} gap={6} padding={4}>
        {technologies.map((tech) => (
          <Link
            key={tech.id}
            href={tech.link}
            isExternal
            color="tomato"
            textAlign="center"
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
