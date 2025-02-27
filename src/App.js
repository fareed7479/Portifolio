import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { HelmetProvider } from "react-helmet-async";
import MyComponent from "../src/components/MyComponent";

function App() {
  return (
    <div>
      <HelmetProvider>
      <MyComponent />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      </HelmetProvider>
    </div>
  );
}

export default App;
