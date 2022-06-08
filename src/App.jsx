import { Header } from "./components/Header";
import { About } from "./components/About";
import { Knowledge } from "./components/Knowledge";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cover } from "./components/Cover";
import './App.css'
import { Stack } from "@chakra-ui/react";

function App() {
  return (
    <Stack>
      <Header />

      <Cover />
      <About />
      <Knowledge />
      <Projects />
      <Contact />

      <Footer />
    </Stack>
  );
}

export default App;
