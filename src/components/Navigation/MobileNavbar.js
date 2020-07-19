import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';

const MyMobileNavbar = styled.nav`
width:50vw;
background:${ props => props.theme.faintGreen };
position: fixed;
top:15vh;
margin-bottom: 15px;
box-shadow:-10px 10px 5px ${ props => props.theme.darkGreen};
align-self: flex-end;

transition: transform 1s;


transform: translateX( ${ props => props.displayMobileNavbar ? ("0%") : ("108%")}) ;


.nav-links {
    display:flex;
    flex-flow:column nowrap;
    justify-content: space-evenly;
    align-items:center;
     
     height:60vh;
     list-style:none;

}

.link{
   

    color:${ props => props.theme.primary};
    font-size:2.8vh;
    
    text-decoration:none;

}
`;
const MobileNavbar = props => {
   
    return (
        <MyMobileNavbar displayMobileNavbar={props.displayMobileNavbar}>
            <Navlinks isMobileLink = { true }/>
        </MyMobileNavbar>
    );
};

export default MobileNavbar;