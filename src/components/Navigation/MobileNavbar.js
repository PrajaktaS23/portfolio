import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-scroll';

const MyMobileNavbar = styled.nav`
width:70vw;
background:${ props => props.theme.blue };
position: fixed;
top:12vh;
margin-bottom: 15px;
box-shadow:-10px 5px 15px ${ props => props.theme.black};
align-self: flex-end;
height:90vh;
transition: transform 1s;
z-index:10;

transform: translateX( ${ props => props.displayMobileNavbar ? ("0%") : ("108%")}) ;


.nav-links {
    display:flex;
    flex:1;
    flex-flow:column nowrap;
    justify-content: space-evenly;
    align-items:center;
     
     height:400px;
     list-style:none;

}

.link{
   

    color:${ props => props.theme.white};
    font-size:2.8vh;
    padding:5px;
    text-decoration:none;

}
`;
const MobileNavbar = props => {
   
    return (
        <MyMobileNavbar displayMobileNavbar={props.displayMobileNavbar} onClick= {props.toggleMobileNavbar }>
             <ul className="nav-links">
                     <li>
                         <Link to="home" smooth={true} duration={1000} onClick= {props.toggleMobileNavbar }  className="link" >Home</Link>
                     </li>
                     <li>
                        <Link to="about" smooth={true} duration={1000}  offset={-20} onClick= {props.toggleMobileNavbar }  className="link" >About</Link>
                     </li>
                     <li>
                        <Link to="education" smooth={true} duration={1000}  offset={-100} onClick= {props.toggleMobileNavbar } className="link">Education</Link>
                     </li>
                     <li>
                       
                     <Link to="projects" smooth={true} duration={1000}  offset={-100} onClick= {props.toggleMobileNavbar } className="link">Projects</Link>
                     </li>
                     <li>
                        <Link to="contact" smooth={true} duration={1000}  offset={-70} onClick= {props.toggleMobileNavbar }  className="link">Contact</Link>
                     </li>
              </ul>
        </MyMobileNavbar>
    );
};

export default MobileNavbar;