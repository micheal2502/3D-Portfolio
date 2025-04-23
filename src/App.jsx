import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import FrontEndShowCase from "./sections/FrontEndShowCase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import FullStackShowCase from "./sections/FullStackShowCase";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <FrontEndShowCase/>
    <FullStackShowCase/>
    <FeatureCards />
    <Experience />
    <TechStack />
    <Contact />
    <Footer />
  </>
);

export default App;
