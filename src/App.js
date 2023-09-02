import React from "react";

import About from './routes/About';
import Contact from './routes/Contact.js';
import Home from './routes/Home.js';
import Project from './routes/Project.js';
import {BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

function App() {
  return (
    
      <div> 
      <Router>
      <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/about" element={ <About /> }/>
      <Route path="/contact" element={ <Contact /> }/>
      <Route path="/project" element={ <Project /> }/>
      </Routes>
      </Router>
  
      
    </div>
  );
}

export default App;
