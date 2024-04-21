import React from "react";
import "./Main.css";
import { Typewriter, Cursor } from "react-simple-typewriter";
import animate from "./Animation - 1713443331137.json";
import animate2 from "./Animation - 1713468490802.json";
import Lottie from "lottie-react";

function Main() {
  return (
    <div className="main">
      <h1 className="heading">
        <h1 className="ml"> Hey, I'm</h1>
        <span className="name">Chirag Singh Chouhan</span>
        <h1 id="effect">
          <span id="anime">
            {" "}
            <Typewriter
              words={["Web Developer", "Electrical Engineer"]}
              loop
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={4000}
            />
            <Cursor />
          </span>
        </h1>
      </h1>
      <div className="btn">
        <button id="btn1">Download CV</button>
        <button id="btn2">
          <a href="#about" id="btn-2">
            About
          </a>
        </button>
      </div>

      {/* icon */}
      <div className="icons">
        <button className="linkedin">
          <a href="http://www.linkedin.com/in/chirag2220" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a796e2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </button>
        <button className="git">
          <a href="https://github.com/Chirag221020" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a796e2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />{" "}
            </svg>
          </a>
        </button>
        <button className="youtube">
          <a
            href="https://www.youtube.com/@c.sgaming3502/videos"
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a796e2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-youtube"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </a>
        </button>
        <div className="line"></div>
      </div>
      <div className="scroll">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a796e2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mouse"
        >
          <rect x="5" y="2" width="14" height="20" rx="7" />
          <path d="M12 6v4" />
        </svg>
        <h1 className="page-down">
          <a href="#about" id="scrl-dwn">
            Scroll Down
          </a>
        </h1>
      </div>

      <div className="img1">
        <Lottie animationData={animate2} className="character" />
      </div>
    </div>
  );
}

export default Main;
