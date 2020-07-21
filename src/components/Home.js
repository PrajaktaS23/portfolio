import React from 'react';
import styled from 'styled-components';

const MyHome= styled.div`
height:100vh;
padding-top:20vh;
color: white;
font-size:50px;
font-weight:2px;
display:flex;
flex-direction:column;
`;

const Welcome = styled.div`
flex:2;
display:flex;
flex-direction:row;

justify-content:flex-start;

@media screen and (min-width:800px){
    margin-left:20vw;
    margin-top:17vh;
}
@media screen and (max-width:800px){
    margin-left:8vw;
    margin-top:19vh;
}

.line{
    height: 25vh;
    width:5px;
    background-color:${ props => props.theme.orange };
    justify-content:flex-start;
    top:20px;
    @media screen and (max-width:800px){
    
    height:20vh;
    }

    
    
    
}

.intro{
    margin-left:1vw;
    display:flex;
    flex-direction:column;
    
    align-content:flex-flex-end;
    
}


.textSmall{
   
    font-size:5vh;

    @media screen and (max-width:800px){
    font-size:4vh;
    }

}

.textLarge{
  padding:0;
  margin:0;
  font-size:10vh;
  @media screen and (max-width:800px){
    font-size:6vh;
}

}

`;

const WaveContainer = styled.div`
flex:2;

svg{
    display:block;
    
}

`;



const Home = () => {
    return (
        
        <MyHome id="home">
            <Welcome>
                <div className="line">
               
                </div>
                <div className="intro">
               <p className="textSmall">H/ , I'm</p>
               <p className="textLarge">Prajakta Sonvane</p>
               <p className="textSmall">Web Developer</p>
               </div>

            

            </Welcome>


            <WaveContainer> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 380">
                <path fill="#fa022f" fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,213.3C480,213,600,171,720,133.3C840,96,960,64,1080,69.3C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            
            
            </WaveContainer>
            
           
           
        </MyHome>
    );
};

export default Home;