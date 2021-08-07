import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sa-serif;
    overflow-x: hidden;
}

html {
    @media  (max-width: 1700px) {
        font-size: 75%;
    }
}

button {
    font-weight:bold;
    font-size: 1.1rem;
    height: 5rem;
    width: 15rem;
    cursor: pointer;
    padding: 1rem 2rem ;
    margin: 1rem;
    border: 3px solid #f5310e;
    border-radius: 30px;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sa-serif;
    &:hover{
        background-color: orange;
        color: white
    }
    
}

h1 {
    color: white;
}

h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3 {
    color: white;
} 
h4 {
    font-weight: bold;
    font-size: 2rem;
} 
a {
    font-size: 1.1rem;
}
span {
    font-weight: bold;  
}
p {
    
    color: #ccc;
    font-size: 1.2rem;
    line-height: 150%;
}

`



export default GlobalStyle;