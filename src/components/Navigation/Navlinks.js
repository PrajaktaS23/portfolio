import React from 'react';
import {Link} from 'react-scroll';
const Navlinks = props => {
    
    return (
             <ul className="nav-links">
                     <li>
                         <Link to="home" smooth={true} duration={1000}  className="link">Home</Link>
                     </li>
                     <li>
                        <Link to="about" smooth={true} duration={1000}  offset={-70}  className="link" >About</Link>
                     </li>
                     <li>
                        <Link to="education" smooth={true} duration={1000}  offset={-100} className="link">Education</Link>
                     </li>
                     <li>
                         <Link to="projects" smooth={true} duration={1000}  offset={-100} className="link" >Projects</Link>
                     </li>
                     <li>
                        <Link to="contact" smooth={true} duration={1000}   className="link">Contact</Link>
                     </li>
              </ul>
    );
};

export default Navlinks;