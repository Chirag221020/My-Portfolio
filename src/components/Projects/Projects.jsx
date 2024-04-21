import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Projects.css";
// import cover2 from "./form.png"
const items = [
  {
    id: 1,
    title: "Responsive Portfolio",
    img: "public/Portfolio.png",
    desc: "Built a dynamic, fully responsive portfolio using React.js CSS, and Framer Motion. Seamlessly integrated interactive animations to enhance user engagement. Designed to display projects and skills in an attractive layout.",
    demo: "#main",
    liveCode: "https://github.com/Chirag221020/Portfolio",
  },
  {
    id: 2,
    title: "Multi-step Form",
    img: "public/form.png",
    desc: "Developed a fully responsive multi-step form using Tailwind CSS and React. Implemented smooth transitions and validations to guide users through the form steps. Created to ensure an intuitive and user-friendly experience.",
    demo: "https://multistep-form2220.netlify.app/",
    liveCode: "https://github.com/Chirag221020/Multi-Step-Form",
  },
  {
    id: 3,
    title: "Currency Converter",
    img: "public/currencyConverter.png",

    desc: "Built a fully responsive portfolio using HTML, CSS, and JavaScript. Incorporated responsive design for optimal display across various devices. Integrated an API to fetch real-time conversion rates, providing live data to the project.",
    demo: "https://chirag221020.github.io/currency-converter/",
    liveCode: "https://github.com/Chirag221020/currency-converter ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div className="img-container" ref={ref}>
            <img src={item.img} alt="" className="project-img" />
          </motion.div>
          <motion.div id="text-container" style={{ y }}>
            <h2 className="item-title">{item.title}</h2>
            <p className="item-desc">{item.desc}</p>
            <div className="live-btn">
              <button className="demo">
                <a href={item.demo} target="blank" className="a-demo">
                  {" "}
                  See Demo
                </a>
              </button>
              <button className="demo">
                <a href={item.liveCode} target="blank" className="a-code">
                  {" "}
                  Live Code
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
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
