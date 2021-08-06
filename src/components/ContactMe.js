import React from "react"
import styled from "styled-components"
import Typewriter from "typewriter-effect";


const ContactForm = () => {
    return (
        <ContactMe>
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
                .typeString("Email me and 📧")
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

             <span>Send your message</span>
             <div className="contact_img"></div>
             </ContactMeText>
             <ContactMeFormParent>
             <ContactMeForm>
               
                <label for="name">Name</label>
                <input type= "text"/>
                <label for="email">Email</label>
                <input type= "text"/>
                <label for="message">Message</label>
                <textarea type="text" name="Message" ></textarea>
                <button> Send📩</button>
               </ContactMeForm>
               </ContactMeFormParent>
             </ContactMeBox>
        </ContactMe>
    )
}

const ContactMe = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
min-height: fit-content;
margin: 120px 0;

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
width: 50%;
    span {
        margin-bottom: 20rem; 
}
`

const styledSpan = styled.div`

`


const ContactMeBox = styled.div` 
display: flex;
flex-direction: row;
height: 460px;
width: 1050px;
background-color: #1f2235;
border-radius: 15px;
box-shadow: 0 0 20px 5px black;
z-index:2;
`


const StyledTypeWriter = styled.div`
font-family: sans-serif;
font-weight:800;
font-size:4rem;

`


const ContactMeFormParent = styled.div `
display: flex;
align-items: center;
justify-content: center;
 min-height: 320px;
width: 50%;

`

const ContactMeForm = styled.div`
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
    outline: black;
    &:hover {
        border-color: orange;
    }
    &:focus {
        border-color: red;
    }
}
textarea {
    width: 80%;
    border: 2px solid ;
    margin-left: 1rem;
    border-radius: 5px ;
    outline: black;
    height: 50px;
    font-family: inherit;
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

`

export default ContactForm