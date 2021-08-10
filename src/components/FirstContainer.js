import React from "react";
import { Image} from "semantic-ui-react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
//Animation
import {motion} from 'framer-motion';
import {PageAnimation} from '../animation';
import {titleAnim} from '../animation'
import { Link } from "react-router-dom";
//Node
const express = require('express');

  
const FirstContainer = ({scrollResume}) => {
  function changecolor(event) {
    event.target.style.color = "red";
  }
  function changeback(event) {
    event.target.style.color = "white";
  }
    return (
      
        <PortfolioContainer >
          <div className="home_container">
          <div className="header_container">
        <div className="header_parent">
          <div className="header_logo">
            <motion.span variants={titleAnim} >Shubham's Portfolio</motion.span>
          </div>
          <div className="header_options">
            <div
              className="header_option header_option_separator"
              onMouseOver={changecolor}
              onMouseOut={changeback}
            >
              <span>Home</span>
            </div>
            <div
              className="header_option header_option_separator"
              onMouseOver={changecolor}
              onMouseLeave={changeback}
            >
              <span>About Me</span>
            </div>
            <div
              className="header_option header_option_separator"
              onMouseOver={changecolor}
              onMouseLeave={changeback}
              onClick={()=>scrollResume}
            >
              <span>Resume</span>
            </div>
            <div
              className="header_option"
              onMouseOver={changecolor}
              onMouseLeave={changeback}
            >
              <span>Contact Me</span>
            </div>
          </div>
        </div>
      </div>
          <PortfolioDetails>
            <div className="details">
            <motion.h1 variants={titleAnim} > Hello, I'M <span>SHUBHAM</span></motion.h1>
            <StyledTypeWriter>
            <Typewriter
  
              onInit={(typewriter)=> {
          
              typewriter
                
              .typeString("Enthusiastic Developer!😎")
                
              .pauseFor(1500)
              .deleteAll()
              .typeString("Mern Stack Developer")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Cross Platform Developer!💻")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Full Stack Developer")
              .pauseFor(1500)
              .deleteAll()
              .typeString("React/React Native Developer")
              .start()
              }}
              options={{
                loop: true
              }}
              />
              </StyledTypeWriter>
              <motion.h2 variants={titleAnim} > Knack of building applications with front and back end operations.
              </motion.h2>
              <StyledButton>
              <button > Hire Me</button>

              <button> Resume</button>
              </StyledButton>
            </div>
            <div className="profile_picture">
              <div className="profile_picture_background"></div>
            </div>
            </PortfolioDetails>
          <div className="portfolio_footer" >
              <div className="footer_parent">
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAB+CAMAAADyQ/wTAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMA9CPeCPsE2McMwa7SF6GF6PIzE/jjdlzMuj0uKB9B72w4l4wQtBpoTkbsp2JKepJXnH9xUgP+CQ8AAAxTSURBVHja7N3bTpNBFIDR3QqC+BMxBq1GRJRQSBuO2e//akAIGQ6lBMLscLHWA8ztl5nMzI7DAADK5edxAADFMrcuPgUAUCqvrO8FAFApr41mOwEA1MkbH6YBAJTJWxvOoQGgTDYnBwEAlMg7tqfuQwNAibxn/SgAgP7yvtHMvxwA0F8+tHu+HwBAX/nYcLoSAEBPucjGnwAAOsqFVs9+BwDQTT7h6xevggGgm3zS2l+vggGgk1xiOP0YAEAHudRPH3MAQA+53OrMjAYAeHv5nNE/F6IBoCzAze5/31MCQFmAm63zbwEAFAW42f4uwQBQFuBmMCwYAOoC3EzmEgwAZQFuJlNzkgCgLMDNYBcMAHUBbiY/JBgAygLcTOYOogGgLMDN2nwzAOhrpdkZL7L365HxIpttIRuo9yNfZzjeDwBe7JK9+8xWFAiiAKyAgOQgAiIoIiIKCGLvf2vTOjNncjz6HuF+Oyj/XIvuruLvuAfrIXcfWv2jRP5MEr8Q2J8xFz9gf0YRv0jlT/SPKvdhZd3Z3B1PYRnejzoSwISwSwyoBAD4VcaGVGBRR6peUlftThIpxXyYfUS6YPYwNSlDvNOo3ZKqaQE5LSSgFalI5i4EMCGsjggGgLGjiaSu1+vV7XZrq6pKaGzJPiVQmylFBoEWsqEVKbQymZZIK81oxbTwORL5HQKYMnfWBABgDGjQ2qrKBIEVRVGx3S53u10qSdLpdLrn7IKMES2c1i9Ikrzb6dttHUVxEISqilB+eQBTiyaaAAAM0p5h4rJ027a6h22aeorimOY4o/avmaagKGlKE7lq27KMGXwqfVEAUwu/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"
                alt="your browser doesn't support"
              />
            </div>
          </div>

         




       
       </div>
       </PortfolioContainer>
       

    )
};

const StyledTypeWriter = styled(motion.div)`
font-family: sans-serif;
font-weight:800;
font-size:4rem;
color: white;
`

const PortfolioContainer = styled(motion.div)`
  display: block;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  
  
`
const PortfolioHeader = styled(motion.div)`
min-height: 20vh;
display: flex;
h2 {
    margin-left: 15rem;
    margin-top: 5rem;
    font-weight:800;
    color: white;
}

`


const PortfolioDetails = styled.div `
min-height: 70vh;
display: flex;
justify-content: space-between;
padding: 10rem;
h1{
    font-size: 3rem;
    color: white
}
h2 {
    font-size: 2rem;
    color: white;
}
span {
  color: red;
}
`
const PortfolioImage = styled.div`
margin-right: 10rem;
`

const StyledButton = styled.div` 
margin-top: 2rem;
display: flex;
justify-content: flex-start;
`



export default FirstContainer;


/* pretier-ignore */
