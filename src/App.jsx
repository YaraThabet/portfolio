import NavBar from "./components/NavBar";
import Contact from "./sections/contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";

function App() {
  return (
    <div>
      <NavBar/>
      <Hero />
      <ShowcaseSection/>
      <TechStack />
      <Contact/>

    </div>
  );
}

export default App;
