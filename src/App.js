import React from 'react';
import Navbar from './components/Navigation/Navbar'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
      </BrowserRouter>

   

    </div>
   
  );
}

export default App;
