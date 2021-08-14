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
    <div className="resume_container" id="resume">
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
                  <span className="bullet_label">Interests</span>
                </div>
              </div>
            </div>
          </div>
          <div className="resume_bullets_details">
            <div
              className="resume_details_carousal"
              style={{ transform: `translateY(${e}px)` }}
            >
              <div className="resume_screen_container">
                
              
                <div className="resume_details_heading">
                  <div className="resume_main_heading">
                    <div className="heading-bullet" />
                    <span className="resume_color">
                      Dr. Akhilesh Das Gupta Institute Of Technology And Management
                    </span>
                    <div className="heading_date">
                      2018-2022
                    </div>
                  </div>
                  <div className="resume_det_sub_heading">
                    B.TECH( Electrical and Electronics Engineering)
                  </div>
                </div>
                <div className="resume_details_heading">
                  <div className="resume_main_heading">
                    <div className="heading-bullet" />
                    <span className="resume_color">
                      Bharti Public School
                    </span>
                    <div className="heading_date">
                      2011-2017
                    </div>
                  </div>
                  <div className="resume_det_sub_heading">
                    Senior Secondary Education (CBSE)
                  </div>
                </div>
              </div>
              <div
                className="resume_screen_container programming_skills_container">
                <div className="skill_parent">
                  <div className="heading-bullet"/>
                  <span className="resume_color">
                    Javascript
                  </span>
                  <div className="skill_percentage">
                    <div style={{width:"70%"}}className="active_percentage_bar" />
                  </div>
                </div>
                <div className="skill_parent">
                  <div className="heading-bullet"/>
                  <span className="resume_color">
                    React Native
                  </span>
                  <div className="skill_percentage">
                    <div style={{width:"60%"}} className="active_percentage_bar" />
                  </div>
                </div>
                <div className="skill_parent">
                  <div className="heading-bullet"/>
                  <span className="resume_color">
                    React JS
                  </span>
                  <div className="skill_percentage">
                    <div style={{width:"65%"}}className="active_percentage_bar" />
                  </div>
                </div>
                <div className="skill_parent">
                  <div className="heading-bullet"/>
                  <span className="resume_color">
                    Node JS
                  </span>
                  <div className="skill_percentage">
                    <div style={{width:"55%"}}className="active_percentage_bar" />
                  </div>
                </div>
                <div className="skill_parent">
                  <div className="heading-bullet"/>
                  <span className="resume_color">
                    Express JS
                  </span>
                  <div className="skill_percentage">
                    <div style={{width:"60%"}} className="active_percentage_bar" />
                  </div>
                </div>
                <div className="skill_parent">
                  <div className="heading-bullet"/>
                  <span className="resume_color">
                    Mongo DB
                  </span>
                  <div className="skill_percentage">
                    <div style={{width:"70%"}}className="active_percentage_bar" />
                  </div>
                </div>
                <div className="skill_parent">
                  <div className="heading-bullet"/>
                  <span className="resume_color">
                    C++
                  </span>
                  <div className="skill_percentage">
                    <div style={{width:"70%"}}className="active_percentage_bar" />
                  </div>
                </div>
                <div className="skill_parent">
                  <div className="heading-bullet"/>
                  <span className="resume_color">
                    HTML
                  </span>
                  <div className="skill_percentage">
                    <div style={{width:"85%"}}className="active_percentage_bar" />
                  </div>
                </div>
                <div className="skill_parent">
                  <div className="heading-bullet"/>
                  <span className="resume_color">
                    CSS
                  </span>
                  <div className="skill_percentage">
                    <div style={{width:"85%"}} className="active_percentage_bar" />
                  </div>
                </div>
                
              </div>
              <div
                className="resume_screen_container"
                // style={{ backgroundColor: "green" }}
              >
              <div className="resume_details_heading">
                  <div className="resume_main_heading">
                    <div className="heading-bullet" />
                    <span className="resume_color">
                    Personal Portfolio Website
                    </span>
                  </div>
                  <div className="resume_det_sub_heading">
                  Technologies Used: React JS
                  </div>
                  <span style={{fontSize: 12,textAlign: "justify"}}> A Personal Portfolio website to showcase all my details and
                  projects at one place.</span>
                </div>
                
                <div className="resume_details_heading">
                  <div className="resume_main_heading">
                    <div className="heading-bullet" />
                    <span className="resume_color">
                    Natours: Your Tour guide
                    </span>
                  </div>
                  <div className="resume_det_sub_heading">
                  Technologies Used: Node JS
                  </div>
                  <span style={{fontSize: `${12}px`,textAlign: "justify"}}>A tour guide website to go on your favourite adventour place.</span>
                </div>

                
                <div className="resume_details_heading">
                  <div className="resume_main_heading">
                    <div className="heading-bullet" />
                    <span className="resume_color">
                    Wave music player
                    </span>
                  </div>
                  <div className="resume_det_sub_heading">
                  Technologies Used: React JS
                  </div>
                  <span style={{fontSize: `${12}px`,textAlign: "justify"}}> A Music player</span>
                </div>

                
              </div>
              <div
                className="resume_screen_container"
                // style={{ backgroundColor: "yellow" }}
              >
              <div className="resume_details_heading">
              <div className="resume_main_heading">
                <div className="heading-bullet" />
                <span className="resume_color">
                chess
                </span>
              </div>
              <div className="resume_det_sub_heading">
              Apart from being a tech enthusiast and a code writer, i also like to play chess.
              </div>
            </div>

            <div className="resume_details_heading">
              <div className="resume_main_heading">
                <div className="heading-bullet" />
                <span className="resume_color">
                Competitive Gaming
                </span>
              </div>
              <div className="resume_det_sub_heading">
              I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most
              </div>
            </div>
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
