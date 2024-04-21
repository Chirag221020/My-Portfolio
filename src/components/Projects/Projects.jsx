import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Projects.css";
// import cover2 from "./form.png"
const items = [
  {
    id: 1,
    title: "Responsive Portfolio",
    img: "public/Portfolio.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, facilis totam deserunt aut odio iure dolore eveniet exercitationem ex, est nam eius recusandae qui reprehenderit veritatis hic cumque dolorum impedit!",
    demo:"https://www.youtube.com/ ",
    liveCode: " https://chat.openai.com/c/53696c07-2102-4e06-b894-e94657ca9d9c"
  },
  {
    id: 2,
    title: "CRUD Webiste",
    img: "public/form.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, facilis totam deserunt aut odio iure dolore eveniet exercitationem ex, est nam eius recusandae qui reprehenderit veritatis hic cumque dolorum impedit!",
    demo:"https://github.com/ ",
    liveCode: "https://chat.openai.com/c/53696c07-2102-4e06-b894-e94657ca9d9c"
  },
  {
    id: 3,
    title: "Responsive Currency Converter",
    img:"public/currencyConverter.png",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, facilis totam deserunt aut odio iure dolore eveniet exercitationem ex, est nam eius recusandae qui reprehenderit veritatis hic cumque dolorum impedit!",
    demo:" https://dribbble.com/",
    liveCode: "https://chat.openai.com/c/53696c07-2102-4e06-b894-e94657ca9d9c "
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0,1], [-300,300]);
  return <section >
    
    <div className="container">
      <div className="wrapper">

      <motion.div className="img-container" ref={ref}>



      <img src={item.img} alt="" className="project-img"/>
      </motion.div>
      <motion.div id="text-container" style={{y}} >

     
      <h2 className="item-title">{item.title}</h2>
      <p className="item-desc">{item.desc}</p>
      <div className="live-btn">
      <button className="demo"><a href={item.demo} target="blank" className="a-demo"> See Demo</a></button>
      <button className="demo"><a href={item.liveCode} target="blank" className="a-code"> Live Code</a></button></div>
      </motion.div>
      </div>
    </div>
  </section>;
};

function Projects() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
     
    </div>
  );
}

export default Projects;
