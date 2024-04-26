import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Myself from "./Component/Indroduction/myself";
import Intro from "./Component/Intro/Intro";
import Projects from "./Component/Projects/Projects";
import Skill from "./Component/Skill/Skill";
import Navbar from "./Navbar/Navbar";
import Scroll from "./scroll/Scroll";


export default function Home() {


  return (
  <>
  <Scroll/>
  <Navbar />
  <Intro/>
  <Myself/>
  <About/>
  <Skill/>
  <Projects/>
  <Contact/>
  </>
  );
}
