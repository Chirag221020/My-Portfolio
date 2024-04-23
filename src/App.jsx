import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import BottomBar from "./components/BottomBar/BottomBar";

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState(true)
  const themeChange = () => {
    setLight(!light)
     document.body.style.backgroundColor =  light ? 'white' : '#11111f';
     document.body.style.transition = '0.5s'
    }


  return (
    <>
      <BottomBar Light = {light} />
      <section id="main">
        <Navbar Light = {light} setTheme = {themeChange}/>
        <Main Light = {light} />
      </section>

      <section id="about">
        <About Light = {light} />
      </section>

      <section id="work">
        <Work Light = {light}/>
      </section>
      {/* Projects */}
      <div id="projects">
        <Projects Light = {light}/>
      </div>
      <section id="contact">
        <Contact  Light = {light} />
      </section>
    </>
  );
}

export default App;
