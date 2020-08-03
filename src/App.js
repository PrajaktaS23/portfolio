import React from 'react';
import Navbar from './components/Navigation/Navbar';


import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'normalize.css';
import './App.css';

function App() {

  
  return (
    <>
 
     
      <Navbar/>
      
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Contact/>
   </>

    
   
  );
}

export default App;
