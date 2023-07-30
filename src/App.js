import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/Pooja_Portfolio/">
          <Home />
        </Route>
        <Route path="/Pooja_Portfolio/about">
          <About />
        </Route>
        <Route path="/Pooja_Portfolio/education">
          <Education />
        </Route>
        <Route path="/Pooja_Portfolio/skills">
          <Skills />
        </Route>
        <Route path="/Pooja_Portfolio/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
