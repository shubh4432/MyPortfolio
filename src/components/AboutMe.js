import React from "react"
import styled from "styled-components"
import shubham3 from "../img/shubham3.png"

const AboutMe = () => {
    return(
        <AboutMeParent>
            <AboutMeContainer>
              <AboutMeHeading>
               <h2> ABOUT ME</h2>
               <p > why choose me?</p>
               </AboutMeHeading>
              <AboutMeCard>
                <AboutMePicture>
                 <img src= {shubham3} alt="image doesn't support your browser"/>
                </AboutMePicture>
                <AboutMeDetails>
                    <p> Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.</p>
                    <h1> Here are a few details</h1>
                    <li>Full Stack web and mobile development</li>
                    <li>Interactive Front End as per the design</li>
                    <li>React and React Native</li>
                    <li>Redux for State Mnanagement</li>
                    <li>Building REST API</li>
                    <li>Managing database</li>
                    <StyledButton>
              <button style={{backgroundColor: "orange"}}> Hire Me</button>

              <button> Resume</button>
              </StyledButton>
                </AboutMeDetails>
              </AboutMeCard>
            </AboutMeContainer>
        </AboutMeParent>
    )
}


const AboutMeParent = styled.div`
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
`;

const AboutMeDetails  = styled.div`
width: 50%;
text-align: justify;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 80px;

`

const AboutMePicture = styled.div `
    width: 50%;
    img {
        height: 100%;
        width: 100%;
         
    }
`

const StyledButton = styled.div` 
margin-top: 2rem;
display: flex;
justify-content: flex-start;
`;


export default AboutMe