import React from "react";
import "./App.css"
import FirstContainer from "./components/FirstContainer";
import GlobalStyle from "./components/GlobalStyles";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <FirstContainer />
      <AboutMe />
      <Resume />
      <ContactForm />
    </div>
  );
}

export default App;
