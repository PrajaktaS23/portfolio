import React from 'react';
import styled from 'styled-components';
import  MyPic  from '../images/mypic.png';
import Fade from 'react-reveal/Fade';


const AboutMe= styled.div`
height:100vh;

display:flex;
flex-direction:column;
align-items:center;

justify-content:center;




`;
const Myself=styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;

@media screen and (max-width:700px){
    flex-direction:column;
    margin-top:5px;
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
@media screen and (max-width:700px){
    width:70vw;
   }

h1{
    
    padding:10px;
    color:#666666;

    font-size:45px;
    @media screen and (max-width:700px){
    font-size:30px;
   }
}



`;


const About = () => {
    return (

        <AboutMe id="about" >
          <Myself>
            <Fade bottom>
            <Photo>
             <img src={MyPic} alt="Prajakta Sonvane"></img>
            </Photo>
            </Fade>
            <Info>
            
            <Fade bottom>
                <center><h1>ABOUT</h1></center>
                </Fade>
                <Fade bottom>   
                <p>Hello, I am Prajakta Sonvane. I live in Maharashtra,India. 
                    <br/><br/>
                I am perceiving BTech degree in computer science at SGGS Nanded.
                I develope highly responsive websites and user friendly desktop applications ,also I am a machine learning enthusiast.
        
                </p>
                </Fade>
                

            </Info>
            </Myself>  
        </AboutMe>
    );
};

export default About;