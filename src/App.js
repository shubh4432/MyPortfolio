import React from "react";
import "./App.css"
import FirstContainer from "./components/FirstContainer";
import GlobalStyle from "./components/GlobalStyles";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <FirstContainer />
      <AboutMe />
      <Resume />
    </div>
  );
}

export default App;
