import React from 'react';
import styled from 'styled-components';
import { faFacebook,faInstagram,faLinkedin,faGoogle } from "@fortawesome/free-brands-svg-icons";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactMe= styled.div`
height:100vh;
display:flex;
flex-direction:column;

`;

const Social= styled.div`
display:flex;
justify-content:center;
flex-direction:column;
height:100%;


ul{
    margin:0;
    padding:0;
    display:flex;
    flex-direction:row;
    justify-content:center;
   
    
}
li{
    padding:5%;
    list-style:none; 
    @media screen and (max-width:800px){
    padding:15px;
   }
   
}

li:hover i{
    color:#fff;
}
li:hover a{
    background-color:red;
}

i{
    font-size:30px;
    line-height:60px;
    transition:.6s;
    color:#000;
    @media screen and (max-width:800px){
    font-size:15px;
    line-height:30px;
  
   }

}
a{
   
    display:block;
    width:60px;
    height:60px;
    border-radius:50%;
    background-color:#fff;
    text-align:center;
    transition: .6s;
    box-shadow: 0 5px 4px rgba(0,0,0,.5);
    @media screen and (max-width:800px){
    width:30px;
    height:30px;
   }


}

`;
const Footer=styled.footer`
align-self:flex-end;
background:black;
opacity:0.5;
width:100%;
color:white;
height:5vh;
text-align:center;
text-justify:center;
`;

const Contact = () => {
    return (
        <ContactMe id="contact">
            <Social>
                <ul>
                    <li><a href="https://www.facebook.com/prajakta.sonvane.94" target="_blank"><i><FontAwesomeIcon icon={faFacebook}/></i> </a></li>
                    <li><a href="http://www.instagram.com/_prajakta_sonvane_" target="_blank"><i><FontAwesomeIcon icon={faInstagram}/></i> </a></li>
                    <li><a href="http://www.gmail.com/sonvane.p.r" target="_blank"><i><FontAwesomeIcon icon={faGoogle} /></i> </a></li>
                    <li><a href="https://www.linkedin.com/in/prajakta-sonvane-7b64b81a4" target="_blank"><i><FontAwesomeIcon icon={faLinkedin}/></i> </a></li>
                </ul>
            </Social>
            <Footer>
               <p>designed & developed by prajakta Sonvane</p>
            </Footer>

            
        </ContactMe>
    );
};

export default Contact;