import { Header } from "./components/Header";
import { About } from "./components/About";
import { Knowledge } from "./components/Knowledge";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cover } from "./components/Cover";

function App() {
  return (
    <>
      <Header />

      <Cover />
      <About />
      <Knowledge />
      <Projects />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
