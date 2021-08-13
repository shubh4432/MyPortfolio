import React, { Component } from "react";
import styled from "styled-components"
import Typewriter from "typewriter-effect";
import {Image} from "semantic-ui-react";
import { motion } from "framer-motion"
import {fade} from "../animation";
import { useScroll } from "./useScroll";
import {SiFacebook} from "react-icons/si";
import {SiLinkedin} from "react-icons/si";
import {SiInstagram} from "react-icons/si";
import {VscGithub} from "react-icons/vsc";
import {MdCall} from "react-icons/md"
import {MdEmail} from "react-icons/md"
import axios from "axios";


class ContactForm extends Component {
    constructor() {
      super();
      this.state = {
        name: "",
        email: "",
        message: "",
      };
    }
  
    handleName = (event) => {
      this.setState({ name: event.target.value });
    };
    handleEmail = (event) => {
      this.setState({ email: event.target.value });
    };
    handleMessage = (event) => {
      this.setState({ message: event.target.value });
    };
  
    submitEmail(e) {
      e.preventDefault();
      axios({
        method: "POST",
        url: "http://localhost:3001/send",
        data: this.state,
      })
        .then((response) => {
          if (response.data.status === "success") {
            alert("Message Sent.");
            this.resetForm();
          } else if (response.data.status === "fail") {
            alert("Message failed to send.");
          }
        })
        .catch((req) => {
          console.log(req);
        });
    }
  
    resetForm() {
      this.setState({ name: "", email: "", subject: "", message: "" });
    }
render ()  {
    // const [element, controls]  = useScroll();
    
    return (
        
        <ContactMe id="contact_form"  >
            <ContactMeHeading>
             <h1>Contact Me</h1>
             <p> Let's Keep In Touch</p>
             </ContactMeHeading>
            <ContactMeBox>
             <ContactMeText>
             <StyledTypeWriter>
             <Typewriter
  
             onInit={(typewriter)=> {
         
                typewriter
                
                .typeString("Get in Touch 🤝")
                  
                .pauseFor(1500)
                .deleteAll()
                .typeString("Email me 📧 and ")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Get your job done 💯")
                .pauseFor(1500)
                .deleteAll()
                .start()
                }}
                options={{
                    loop: true
                  }}
             />
             </StyledTypeWriter>
            <ContactMeImage>
             <ContactDetails>
              <li>
              <MdCall size="1.8rem" color="cornflowerblue" /> <span>9354377330</span>
              </li>
              <li>
              <MdEmail size="1.8rem" color="cornflowerblue" /> <span>vermashubham1990@gmail.com</span>
              </li>
             </ContactDetails>
             
             </ContactMeImage>
             </ContactMeText>
             <ContactMeFormParent>
             
             <ContactMeForm onSubmit={this.submitEmail.bind(this)} method="POST" >
            
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleName.bind(this)}
                />
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleEmail.bind(this)}
                />
                <label for="message">Message</label>
                <textarea
                  type="text"
                  name="Message"
                  value={this.state.message}
                  onChange={this.handleMessage.bind(this)}
                ></textarea>
                <button type="submit" name="button">
                  {" "}
                  Send📩
                </button>
              
               </ContactMeForm>
               
               </ContactMeFormParent>
             </ContactMeBox>
              <StyledIcons>
              <a href="https://github.com/shubh4432" target="_blank"><SiFacebook size="3.5rem" color="cornflowerblue" /></a>
              <a href="https://www.linkedin.com/in/shubham-verma-566498146/" target="_blank"><SiLinkedin size="3.5rem" color="cornflowerblue"/></a>
              <a href="https://github.com/shubh4432" target="_blank"><SiInstagram size="3.5rem" color="cornflowerblue"/></a>
              <a href="https://github.com/shubh4432" target="_blank"><VscGithub size="3.5rem" color="cornflowerblue"/></a>
              </StyledIcons>
              <p>Copyright © 2021 Shubham Verma</p>
        </ContactMe>
    )
}
}

const ContactMe = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
min-height: fit-content;
margin: 120px 0;
p{
    color:black;
    font-weight: 500;
    letter-spacing: 0.11rem;
}
 
`

const ContactMeHeading= styled.div`
margin-bottom: 2rem;
    h1{
        color: #1f2235;
        font-size:32px;
        font-family: "Poppins";
        font-weight: 600;
    }
    p{
        margin-left: 1.8rem;
        letter-spacing: 0.08rem;
    }

`

const ContactMeText = styled.div` 
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 50%;
   
`

const ContactMeImage = styled.div`
margin-left: 2rem;
height: 50%;
span {
    font-size: 2rem;
    margin-left: 0.5rem;
    letter-spacing: 0.1rem;
    color: grey;
}
`


const ContactMeBox = styled.div` 
margin-top: 5rem;
display: flex;
flex-direction: row;
height: 460px;
width: 1050px;
background-color: #1f2235;
border-radius: 15px;
box-shadow: 0 0 20px 5px black;
z-index:2;
@media only screen and (max-width:767px) {
  height: 600px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
}
`


const StyledTypeWriter = styled.div`
font-family: sans-serif;
font-weight:800;
font-size:4rem;
height: 40%;
color: white;

@media only screen and (max-width:767px) {
  margin-left: 5rem;
  font-size: 3.5rem;
}


`


const ContactMeFormParent = styled.div `
display: flex;
align-items: center;
justify-content: center;
 min-height: 320px;
width: 50%;

`

const ContactMeForm = styled.form`
margin-top: 2.5rem;
height: 90%;
border-radius: 15px;
background-color: #dfdede;
width: 90%;
display: flex;
flex-direction: column;
align-items: flex-start;

label{
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    margin-left: 1rem;
    margin-top: 2.5rem;
}
input {
    margin-bottom: 1rem;
    margin-left: 1rem;
    border: 2px solid ;
    width: 80%;
    border-radius: 6px;
    height: 33px;
    font-family: inherit;
    outline: none;
    border: 0.02px solid;
    background-color: #dfdede;
    &:hover {
        border-color: orange;
    }
    &:focus {
        border-color: red;
    }
}
textarea {
    width: 80%;
    border: 0.02px solid ;
    margin-left: 1rem;
    border-radius: 5px ;
    outline: black;
    height: 50px;
    font-family: inherit;
    background-color: #dfdede;
    &:hover {
        border-color: orange;
    }
    &:focus {
        border-color: red;
    }
}
button {
    margin-top: 2.5rem ;
    
}

`;

const StyledIcons = styled.div ` 
width: 20%;
 margin-top: 3rem;
 margin-bottom: 2rem;
 display: flex;
 justify-content: space-evenly;
 @media only screen and (max-width:767px) {
   width: 40%;
   justify-content: space-evenly;
 }
`;

const ContactDetails = styled.div`
    span {
        color:white;
    }
    @media only screen and (max-width:  767px) {
      margin-top: 2rem;
      justify-content: space-evenly;
    }
`

export default ContactForm;