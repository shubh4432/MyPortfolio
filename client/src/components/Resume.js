import React from "react"
import styled from "styled-components"
import { FaLaptopCode, FaChess} from 'react-icons/fa'
import { AiOutlineProject} from 'react-icons/ai'
import { GiBookshelf} from 'react-icons/gi'
import { IconContext } from "react-icons";
import { motion } from "framer-motion"
import {fade} from "../animation";
import { useScroll } from "./useScroll";

const Resume = () => {
  
  const [element, controls]  = useScroll();

    return(
      
        <StyledResume variants={fade} animate={controls} initial="hidden" ref= {element}>
         <div>
          <Heading>
           <PrimaryHeading>Resume</PrimaryHeading>
           <SecondaryHeading> My former bio details</SecondaryHeading>
           </Heading>
           <ResumeCard>
           <Navbar>
               <NavContainer>
            <IconContainer>
            <IconContext.Provider
            value={{ color: 'white', size: '25px' }}
          >
          <GiBookshelf />  
          <FaLaptopCode />
          <AiOutlineProject />
          <FaChess />
            </IconContext.Provider>
                
            </IconContainer>
            <NavbarDetails>
             <span>Education</span>
             <span>Programming Skills</span>
             <span>Projects</span>
             <span>interest</span>
             
             </NavbarDetails>
             </NavContainer>
            
           </Navbar>
            <Details>
               
            </Details>
            </ResumeCard>
          </div>
          </StyledResume>
    )
}

const StyledResume = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
min-height: fit-content;
margin: 120px 0;
`

const Navbar = styled(motion.div)` 
box-shadow: 15px 0 9px -15px #1f2235;
height: 100%;
width: 320px;


`
const NavContainer = styled(motion.div)`
display: flex;
align-items: center;
height: 100%;
width: 100%;
position: relative;

`
    

const NavbarDetails= styled(motion.div)` 
min-height: 100%;
width: 86%;
position: relative;
z-index: 2;
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin-left: 3rem;
span {
    color: black;
    font-size: 1.5rem;
    font-weight: 400;
    
}
` 



const Heading = styled(motion.div)` 
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin: 0 0 50px;

`
const PrimaryHeading = styled(motion.div)`
font-size: 32px;
color: #1f2235;
font-family: "Poppins";
font-weight: 800;
`
const SecondaryHeading = styled(motion.div)`
letter-spacing: 3px;
margin: 8px 0 18px;
font-size: 12px;
color: black;

`



const ResumeCard = styled(motion.div)` 
display: flex;
height: 360px;
width: 1000px;

` 

const Details= styled.div `
    

`

const IconContainer = styled(motion.div) `
display: flex;
min-height: 100%;
flex-direction:column ;
justify-content: space-evenly;
align-items: center;
width: 40px;
height: 100%;
z-index: 1;
background-color: #1f2235;
position: relative;
padding-bottom: 0.5rem;
`


export default Resume;