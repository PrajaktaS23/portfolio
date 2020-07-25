import React, { useEffect } from 'react';
import Navbar from './components/Navigation/Navbar';
import Aos from "aos";
import "aos/dist/aos.css";

import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])
  return (
    <div>
 
     
      <Navbar/>
      <Home/>
      <About data-aos="fade-up"/>
      <Education/>
      <Projects/>
      <Contact/>
      
      
      
      


   

    </div>
   
  );
}

export default App;
