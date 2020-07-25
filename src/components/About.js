import React from 'react';
import styled from 'styled-components';
import  MyPic  from '../images/mypic.png';

const AboutMe= styled.div`
height:100vh;
margin-top:5vh;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;

@media screen and (max-width:800px){
    flex-direction:column;
   }

`;

const Photo= styled.div`
 
 img{
     width:30vw;
     @media screen and (max-width:800px){
    width:50vw;
   }
 }
 
`;

const Info= styled.div`

display :flex;
flex-direction: column;
width:25vw;
margin-left:5vw;
color:white;
justify-content:flex-start;
font-size:17px;
@media screen and (max-width:800px){
    width:70vw;
   }

h1{
    
    padding:10px;
    color:#666666;

    font-size:45px;
    @media screen and (max-width:800px){
    font-size:30px;
   }
}



`;


const About = () => {
    return (
        <AboutMe id="about" >
            <Photo>
             <img src={MyPic} alt="Prajakta Sonvane"></img>
            </Photo>
            <Info>
                <center><h1>ABOUT</h1></center>
                <p>Hello, I am Prajakta Sonvane. I live in Maharashtra,India. 
                    <br/><br/>
                I am perceiving BTech degree in Computer Science at SGGS Nanded.
                I develope highly responsive websites and user friendly desktop applications ,also I am a Machine Learning enthusiast.
        
                </p>

            </Info>
            
        </AboutMe>
    );
};

export default About;