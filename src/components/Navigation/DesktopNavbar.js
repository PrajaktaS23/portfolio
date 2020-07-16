import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';
import Arrow from '../../images/keyboard_arrow_left-black-18dp.svg';

const MyDesktopNavbar = styled.nav`
display:flex;
flex-flow:row nowrap;
justify-content: space-evenly;
align-items:center;

background: red;
color: white;

height:15vh;

.logo{
    font-size:7vh;
    
    text-shadow: 3px 3px 3px black;
}

.nav-links {
    display:flex;
    flex-flow:row nowrap;
    justify-content: space-evenly;
    align-items:center;
     
     width:35vw;
     list-style:none;

}

.link{
    color:white;
    font-size:2.5vh;
    text-decoration:none;

}

`;

const MyMobileNavButton= styled.button`
background:transparent;
height:6vh;
width:6vh;
border:none;
`;


const DesktopNavbar = () => {
    return (
        <div>
            <MyDesktopNavbar>
                <div className="logo">Logo</div>
                 <Navlinks/>
                  <MyMobileNavButton>
                      <img src={Arrow} alt="openNav"/>
                  </MyMobileNavButton>
            </MyDesktopNavbar>

        </div>
    );
};

export default DesktopNavbar;