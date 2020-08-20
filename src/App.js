import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <Header />
          <Skills />
          <Work />
          <Education />
          <Projects />
          <Certificates />
          <Contact />
        </div>
        <div className="col-sm-4">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
