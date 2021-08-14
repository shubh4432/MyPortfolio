import React from "react"
import styled from "styled-components"
import shubham3 from "../img/shubham3.png"
import {motion} from 'framer-motion';
import {fade} from "../animation"
import { useScroll } from "./useScroll";
import {Link} from "react-scroll";

const AboutMe = () => {
    
    const [element, controls]  = useScroll();
    
    return(
        
        <AboutMeParent id="about_me" variants={fade} animate={controls} initial="hidden" ref= {element} >
            <AboutMeContainer>
              <AboutMeHeading>
               <motion.h2 > ABOUT ME</motion.h2>
               <p > why choose me?</p>
               </AboutMeHeading>
              <AboutMeCard>
                <AboutMePicture>
                 <img src= {shubham3} alt="image doesn't support your browser"/>
                </AboutMePicture>
                <AboutMeDetails>
                    <p>Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional willing to be an asset for an organization.</p>
                    <h1>Here are a few details</h1>
                    <ul>
                    <li>Full Stack web and mobile development</li>
                    <li>Interactive Front End as per the design</li>
                    <li>React and React Native</li>
                    <li>Redux for State Mnanagement</li>
                    <li>Building REST API</li>
                    <li>Managing database</li>
                    </ul>
                    <StyledButton>
                    <Link  to="contact_form" spy={true} smooth={true}>
              <button style={{backgroundColor: "black"}}> Hire Me</button>
        </Link>
        <a download="Resume" href="Resume.pdf" >
              <button style={{backgroundColor: "orangered"}}> Resume</button>
              </a>
              </StyledButton>
                </AboutMeDetails>
              </AboutMeCard>
            </AboutMeContainer>
        </AboutMeParent>
        
        
    )
}


const AboutMeParent = styled(motion.div)`
min-height: 100vh;
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   

`;

const AboutMeContainer = styled.div` 
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    @media only screen and (max-width:767px) {
        width: 70vw;
       
    }
`

const AboutMeHeading = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
font-size: 32px;
    color: #1f2235;
    font-family: "Poppins";
    font-weight: 800;

p{
    font-weight: 400;
    font-size: 20px;
}


`

const AboutMeCard = styled.div` 
margin-top: 5rem;
 justify-content: center;
 display: flex;
 width: 100%;
 box-shadow: 0 0 20px -2px black;
 @media only screen and (max-width:767px) {
    height: 80vh;
   

 
`



const AboutMeDetails  = styled.div`
width: 50%;
text-align: justify;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 80px;
p {
    color: black;
}

li {
    list-style-type: circle ;
    
}
@media only screen and (max-width:767px) {
    justify-content: center;
    align-items: center;
    width: 100%;

}
@media only screen and (max-width:557px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    
}





`

const AboutMePicture = styled.div`
    width: 50%;
    img {
        height: 100%;
        width: 100%;
         
    }
    @media (max-width: 767px) {
        display: none;
        width: 0px;
    }
`

const StyledButton = styled.div` 
margin-top: 2rem;
display: flex;
justify-content: flex-start;

@media only screen and (max-width:560px) {
    display: flex;
    flex-direction: column;
    height: 20vw;
}
`;


export default AboutMe