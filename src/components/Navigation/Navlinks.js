import React from 'react';
import {Link} from 'react-scroll';
const Navlinks = props => {
    let tempTabIndex
    if (props.isMobileLink) {
        tempTabIndex = "-1"
        
    }
    return (
             <ul className="nav-links">
                     <li>
                         <Link to="home" smooth={true} duration={1000} className="link" tabIndex= { tempTabIndex }>Home</Link>
                     </li>
                     <li>
                        <Link to="about" smooth={true} duration={1000} className="link" tabIndex= { tempTabIndex }>About</Link>
                     </li>
                     <li>
                        <Link to="education" smooth={true} duration={1000} className="link" tabIndex= { tempTabIndex }>Education</Link>
                     </li>
                     <li>
                       
                     <Link to="projects" smooth={true} duration={1000} className="link" tabIndex= { tempTabIndex }>Projects</Link>
                     </li>
                     <li>
                        <Link to="contact" smooth={true} duration={1000} className="link" tabIndex= { tempTabIndex }>Contact</Link>
                     </li>
              </ul>
    );
};

export default Navlinks;