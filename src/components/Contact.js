import React from 'react';
import styled from 'styled-components';
import { faFacebook,faInstagram,faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Spin from 'react-reveal/Spin';
import Fade from 'react-reveal/Fade';

const ContactMe= styled.div`
height:90vh;
display:flex;
flex-direction:column;



h1{
    color:#666666;
    padding:30px;
    font-size:45px;
    @media screen and (max-width:700px){
    font-size:30px;
    flex:1;
}
}

`;
const Mail=styled.div`
align-self:center;
justify-self:flex-end;
margin-top:30px;
flex:1;
a{
    text-decoration:none;
    width:150px;
    height:50px;
    font-size:20px;
    padding:10px;
    @media screen and (max-width:800px){
    width:120px;
    height:50px;
    font-size:20px;
    padding:10px;
    }
    color:${ props => props.theme.orange };
    background-color:${ props => props.theme.blue };
    border:solid 1px ${ props => props.theme.orange };

}
`;
const Message=styled.div`
display:flex;
flex-direction:column;
align-self:center;
align-items:center;

flex:1;
justify-content:space-around;

margin:auto;

.bigtxt{
    font-size:25px;
    color:white;
    @media screen and (max-width:700px){
    font-size:20px;
   }
}
.smalltxt{
    font-size:20px;
    font-family: 'Space Mono', monospace;
    color: ${ props => props.theme.faintWhite};
    @media screen and (max-width:700px){
    font-size:15px;
   
   }
}
`;

const Social= styled.div`
display:flex;
justify-content:flex-start;
flex-direction:column;
height:100%;
margin-top:10px;
flex:1;

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

   &:hover{
    background-color:${ props => props.theme.orange };
    i{
    color:#fff;
    }
   }


}

`;
const Footer=styled.footer`
align-self:flex-end;
background:black;
opacity:0.5;
width:100%;
color:white;

text-align:center;
text-justify:center;

p{
@media screen and (max-width:800px){
  font-size:12px;
   }}
`;

const Contact = () => {
    return (
        <ContactMe id="contact">
             <Fade bottom>
            <center><h1>CONTACT ME</h1></center>
            </Fade>
            
            <Mail>
              <a href="mailto:sonvane.p.r@gmail.com"> Drop mail</a>
            </Mail>
            
            <Fade bottom>
            <Message>
                <p className="bigtxt">LET'S GET <b>SOCIAL</b></p>
                <p className="smalltxt">I'm ready to connect with you!</p>
            </Message>
            </Fade>
            
            <Social>
                <ul>
                <Spin>
                    <li><a href="https://www.facebook.com/prajakta.sonvane.94" target="_blank" rel="noopener noreferrer"><i><FontAwesomeIcon icon={faFacebook}/></i> </a></li>
                </Spin>
                <Spin>
                    <li><a href="http://www.instagram.com/_prajakta_sonvane_" target="_blank" rel="noopener noreferrer"><i><FontAwesomeIcon icon={faInstagram}/></i> </a></li>
                </Spin>
                <Spin>
                    <li><a href="http://github.com/PrajaktaS23" target="_blank" rel="noopener noreferrer"><i><FontAwesomeIcon icon={faGithub} /></i> </a></li>
                </Spin>
                <Spin>
                    <li><a href="https://www.linkedin.com/in/prajakta-sonvane-7b64b81a4" target="_blank" rel="noopener noreferrer"><i><FontAwesomeIcon icon={faLinkedin}/></i> </a></li>
                </Spin>
                
                </ul>
            </Social>
            
            <Footer>
               <p>designed & developed by prajakta Sonvane</p>
               <p>sonvane.p.r@gmail.com</p>
            </Footer>

            
        </ContactMe>
    );
};

export default Contact;