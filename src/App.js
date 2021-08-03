import React from "react";
import "./App.css"
import FirstContainer from "./components/FirstContainer";
import GlobalStyle from "./components/GlobalStyles";
import AboutMe from "./components/AboutMe"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <FirstContainer />
      <AboutMe />
    </div>
  );
}

export default App;
