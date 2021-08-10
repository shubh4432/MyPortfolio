import React , {forwardRef, useRef}from "react";
import "./App.css"
import FirstContainer from "./components/FirstContainer";
import GlobalStyle from "./components/GlobalStyles";
import AboutMe from "./components/AboutMe";
import Resume from "./components/resumeContainer";
import ContactForm from "./components/ContactMe";

function App() {
  const scrollResume = () => {
    resumeRef.current.scrollIntoView();
  }
  const resumeRef = forwardRef(scrollResume);
  const useScroll = () => {
    const elRef = useRef(null);
    const executeScroll = () => elRef.current.scrollIntoView();
  
    return [executeScroll, elRef];
  };
  return (
    <div className="App">
      <GlobalStyle />
      <FirstContainer scrollResume={scrollResume}/>
      <AboutMe />
      <Resume ref={resumeRef}/>
      <ContactForm />
    </div>
  );
}

export default App;
