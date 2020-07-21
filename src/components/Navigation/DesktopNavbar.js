import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';
import Arrow from '../../images/keyboard_arrow_left-black-18dp.svg';
import logo from '../../images/logo.svg';
import {Link} from 'react-scroll';

const MyDesktopNavbar = styled.nav`
display:flex;
flex-flow:row nowrap;
justify-content: space-between;
align-items:center;
position:fixed;

background:${ props => props.theme.blue };
color: white;
width:100vw;
height:12vh;

box-shadow:0 5px 15px ${ props => props.theme.black };

.logo{
  
    text-shadow: 3px 3px 3px black;
    margin-left:5vw;
    color:${ props => props.theme.orange };
    
}

.nav-links {
    display:flex;
    flex-flow:row nowrap;
    justify-content: space-evenly;
    align-items:center;
     
     width:35vw;
     list-style:none;

     @media screen and (max-width: 768px)
    {
    display:none;
    }

}


.link{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    height: 15vh;
    padding: 0 1rem;

    color:${ props => props.theme.primary};
    font-size:2.5vh;
    text-decoration:none;

    &:focus{
        background:rgba(0,0,0,0.1);
        outline:none;
    }

    &::after{
        content:'';
        height:2px;
        width:0;
        background:${ props => props.theme.orange };
        display:block;
        transition:width 0.5s;
    }
    &:hover::after{
        transform:width;
        width:125%;
    }


}

`;

const MyMobileNavButton= styled.button`
background:transparent;
height:6vh;
width:6vh;
border:none;
display:none;
margin-right:5vw;
transition:transform 1s ease-in-out;
transform:rotate(${ props => props.displayMobileNavbar ? ("540deg") : ("0deg") });

&:focus{
outline:none;
}

@media screen and (max-width: 768px)
{
    display:block;
}
`;


const DesktopNavbar = props => {
    return (
        
            <MyDesktopNavbar>
                <div className="logo">
               <Link to="home" smooth={true} duration={1000}><img src={logo} alt="P"/></Link>
                </div>
                 <Navlinks/>


                 <MyMobileNavButton  
                  displayMobileNavbar={props.displayMobileNavbar}
                   onClick= {props.toggleMobileNavbar }
                  >
                      <img src={Arrow} alt="openNav"/>
                  </MyMobileNavButton>
            </MyDesktopNavbar>

        
    );
};

export default DesktopNavbar;