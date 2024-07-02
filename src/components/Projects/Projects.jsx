import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Projects.css";
const items = [
  {
    id: 1,
    title: "Responsive E-commerce Website for Chips Purchase",
    img: "Ecommerce.png",
    desc: "Developed a fully responsive e-commerce website for purchasing chips using HTML, CSS, and JavaScript. The platform features a user-friendly interface, seamless navigation, and a modern design. It ensures optimal performance and accessibility across all devices.",
    demo: "https://e-commerce-chips-website.vercel.app/",
    liveCode: "https://github.com/Chirag221020/E-Commerce-Chips-Website",
  },
  {
    id: 2,
    title: "Responsive Portfolio",
    img: "Portfolio.png",
    desc: "Built a dynamic, fully responsive portfolio using React.js CSS, and Framer Motion. Seamlessly integrated interactive animations to enhance user engagement. Designed to display projects and skills in an attractive layout.",
    demo: "#main",
    liveCode: "https://github.com/Chirag221020/My-Portfolio",
  },
  {
    id: 3,
    title: "Multi-step Form",
    img: "form.png",
    desc: "Developed a fully responsive multi-step form using Tailwind CSS and React. Implemented smooth transitions and validations to guide users through the form steps. Created to ensure an intuitive and user-friendly experience.",
    demo: "https://multistep-form2220.netlify.app/",
    liveCode: "https://github.com/Chirag221020/Multi-Step-Form",
  },
  {
    id: 4,
    title: "Currency Converter",
    img: "currencyConverter.png",

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
        <div className="wrapper" >
          <motion.div className="img-container" ref={ref}>
            <img src={item.img} alt="" className="project-img" />
          </motion.div>
          <motion.div id="text-container" style={{ y }}>
            <h2 className="item-title">{item.title}</h2>
            <p className="item-desc">{item.desc}</p>
            <div className="live-btn">
              <a href={item.demo} target="blank" className="a-demo">
                <button className="demo"> See Demo</button>
              </a>
              <a href={item.liveCode} target="blank" className="a-code">
                <button className="demo" id="demo1"> Live Code</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Projects({ Light }) {
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
        <motion.div
          style={{ scaleX }}
          className={!Light ? "lightProgressBar" : "progressBar"}
        ></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Projects;
