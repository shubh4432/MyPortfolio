import React, { useState } from "react";
import { FaLaptopCode, FaChess } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { motion } from "framer-motion"
import {fade} from "../animation";
import { useScroll } from "./useScroll";

function ResumeContainer() {
  const [element, controls]  = useScroll();
  // let e = null;
  // function selection(event) {
  //   if (e !== null) {
  //     e.classList.remove("selected_bullet");
  //   }

  //   event.currentTarget.classList.add("selected_bullet");
  //   e = event.currentTarget;
  // }
  const [appState, changeState] = useState({
    objects: [
      { id: 1, toggled: true },
      { id: 2, toggled: false },
      { id: 3, toggled: false },
      { id: 4, toggled: false },
    ],
    activeObject: null,
  });
 
  function toggleActiveObject(index) {
    appState.objects[0].toggled = false;
    changeState({ ...appState, activeObject: appState.objects[index] });
  }

  let e = 0;
  function toggleclass(index) {
    if (
      appState.objects[index] === appState.activeObject ||
      appState.objects[index].toggled
    ) {
      e = index * -360;
      return "bullet selected_bullet";
    } else {
      return "bullet";
    }
  }
  function toggleStyle(index) {
    if (index === 0) return 0;
    else if (index === 1) return -360;
    else if (index === 2) return -720;
    else if (index === 3) return -1080;
  }

  return (
    <Resume variants={fade} animate={controls} initial="hidden" ref= {element}>
    <div className="resume_container">
      <div className="resume_content">
        <div className="resume_heading">
          <div className="res_heading">RESUME</div>
          <div className="res_heading_sub">My Formal Bio Details</div>
        </div>
        <div className="resume_card">
          <div className="resume_bullets">
            <div className="bullets_container">
              <div className="bullets_icons" />

              <div className="bullets">
                <div
                  className={toggleclass(0)}
                  onClick={() => toggleActiveObject(0)}
                >
                  <div className="bullet_logo">
                    <IconContext.Provider
                      value={{ color: "white", size: "25px" }}
                    >
                      <GiBookshelf />
                    </IconContext.Provider>
                  </div>
                  <span className="bullet_label">Education</span>
                </div>
                <div
                  className={toggleclass(1)}
                  onClick={() => toggleActiveObject(1)}
                >
                  <div className="bullet_logo">
                    <IconContext.Provider
                      value={{ color: "white", size: "25px" }}
                    >
                      <FaLaptopCode />
                    </IconContext.Provider>
                  </div>
                  <span className="bullet_label">Programming skills</span>
                </div>
                <div
                  className={toggleclass(2)}
                  onClick={() => toggleActiveObject(2)}
                >
                  <div className="bullet_logo">
                    <IconContext.Provider
                      value={{ color: "white", size: "25px" }}
                    >
                      <AiOutlineProject />
                    </IconContext.Provider>
                  </div>
                  <span className="bullet_label">Projects</span>
                </div>
                <div
                  className={toggleclass(3)}
                  onClick={() => toggleActiveObject(3)}
                >
                  <div className="bullet_logo">
                    <IconContext.Provider
                      value={{ color: "white", size: "25px" }}
                    >
                      <FaChess />
                    </IconContext.Provider>
                  </div>
                  <span className="bullet_label">Intrests</span>
                </div>
              </div>
            </div>
          </div>
          <div className="resume_bullets_details">
            <div
              className="resume_details_carousal"
              style={{ transform: `translateY(${e}px)` }}
            >
              <div
                className="resume_screen_container"
                // style={{ backgroundColor: "red" }}
              >
                <h1> ADGITM </h1>
                <p>BTECH (EEE)</p>
                <h1> Bharti Public School</h1>
                <p>CBSE</p>
              </div>
              <div
                className="resume_screen_container"
                // style={{ backgroundColor: "blue" }}
              >
                <span>javascript</span>
                <span>ReactNative</span>
                <span>Node JS</span>
                <span>C++</span>
                <span>Datastuctures & algorithms</span>
                <span>Css</span>
                <span>Hml</span>
                <span>React JS</span>
                <span>Express JS</span>
                <span>Mongo Db</span>
              </div>
              <div
                className="resume_screen_container"
                // style={{ backgroundColor: "green" }}
              >
                <a href="/">Personal Portfolio Website</a>
                <h4>Technologies Used: React JS</h4>
                <p>
                  A Personal Portfolio website to showcase all my details and
                  projects at one place.
                </p>

                <a href="/">Wave Music Player</a>
                <h4>Technologies Used: React JS</h4>
                <p>A Music player.</p>

                <a href="/">Natours: Your Tour guide</a>
                <h4>Technologies Used: NODE JS, Mongo Db</h4>
                <p>
                  A Personal Portfolio website to showcase all my details and
                  projects at one place.
                </p>
              </div>
              <div
                className="resume_screen_container"
                // style={{ backgroundColor: "yellow" }}
              >
                <h1>Chess</h1>
                <p>
                  Apart from being a tech enthusiast and a code writer, i also
                  like to play chess.
                </p>

                <h1>Working out</h1>
                <p>
                  Apart from being a tech enthusiast and a code writer, i also
                  like to play chess.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Resume>
  );
}

const Resume = styled(motion.div) `
  

`


export default ResumeContainer;
