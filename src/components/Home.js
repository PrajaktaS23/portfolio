import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import ResumeP from '../data/Resume.pdf';

const MyHome= styled.div`
height:100vh;

color: white;
font-size:50px;
font-weight:2px;
display: -webkit-flex;
display: -moz-flex;
display: -ms-flex ;
display: -o-flex;
display:flex;
flex-direction:column;
`;
const Hero = styled.div`
display: -webkit-flex;
display: -moz-flex;
display: -ms-flex ;
display: -o-flex;
display:flex;
flex-direction:column;
flex:2;

@media screen and (min-width:800px){
    margin:0 auto;
    margin-top:180px;
   
}
@media screen and (max-width:800px){
    margin: 0 auto;
    margin-top:200px;
}
`;

const Welcome = styled.div`
justify-self:flex-end;
display: -webkit-flex;
display: -moz-flex;
display: -ms-flex ;
display: -o-flex;

display:flex;
flex-direction:row;

justify-content:flex-start;



.line{
    height: 140px;
    width:5px;
    background-color:${ props => props.theme.orange };
    justify-content:flex-start;
    top:20px;
    @media screen and (max-width:700px){
    
    height:100px;
    }

    
    
    
}

.intro{
    margin-left:1vw;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex ;
    display: -o-flex;
    display:flex;
    flex-direction:column;
    flex:2;
    
    align-content:flex-flex-end;
    
}


.textSmallspace{
    font-family: 'Space Mono', monospace;
    font-size:15px;
    color: ${ props => props.theme.faintWhite} ;
   
}
    .textSmall{
    font-family: 'Space Mono', monospace;
    font-size:25px;
    color:  ${ props => props.theme.faintWhite};
    @media screen and (max-width:700px){
    font-size:20px;
    }

}

.textLarge{
  padding:0;
  margin:0;
  font-size:55px;
  @media screen and (max-width:700px){
    font-size:35px;
}

}

`;

const Resume=styled.div`
  
flex:1;
margin-top:8px;
margin-left:0px;

a{
    text-decoration:none;
    
    font-size:24px;
    padding:8px;
    @media screen and (max-width:700px){
 
    font-size:20px;
    padding:8px;
    }
    color:${ props => props.theme.orange };
    background-color:${ props => props.theme.blue };
    border:solid 1px ${ props => props.theme.orange };

}
`;

const WaveContainer = styled.div`


@media screen and (max-width:800px){
   flex:1;
    margin-bottom:0;
}
svg{
    display:block;
}

`;



const Home = () => {
    return (
        
        <MyHome id="home">
            <Hero>
            <Welcome>
                
                <div className="line">
               
                </div>
                
                <Fade top>
                <div className="intro">
               <p className="textSmallspace">Hi , I am</p>
               <p className="textLarge">Prajakta Sonvane</p>
               <p className="textSmall">Computer science student</p>
               </div>
               </Fade>
             </Welcome>
             <Resume>
                <a href={ResumeP} download>Resume</a>
             </Resume>
            </Hero>

            <WaveContainer> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1160 500">
            <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor:"#fa022f",stopOpacity:"1"}}/>
      <stop offset="100%" style={{stopColor:"#141324",stopOpacity:"1"}}/>
    </linearGradient>
  </defs>
                
                <path fill="url(#grad1)" fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,213.3C480,213,600,171,720,133.3C840,96,960,64,1080,69.3C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
           </WaveContainer>
            
           
           
        </MyHome>
    );
};

export default Home;