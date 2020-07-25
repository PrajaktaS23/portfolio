import React from 'react';
import styled from 'styled-components';

const MyHome= styled.div`
height:100vh;

color: white;
font-size:50px;
font-weight:2px;
display:flex;
flex-direction:column;
`;

const Welcome = styled.div`
flex:5;
display:flex;
flex-direction:row;

justify-content:flex-start;

@media screen and (min-width:800px){
    margin-left:20vw;
    margin-top:35vh;
}
@media screen and (max-width:800px){
    margin-left:8vw;
    margin-top:35vh;
}

.line{
    height: 20vh;
    width:5px;
    background-color:${ props => props.theme.orange };
    justify-content:flex-start;
    top:20px;
    @media screen and (max-width:800px){
    
    height:15vh;
    }

    
    
    
}

.intro{
    margin-left:1vw;
    display:flex;
    flex-direction:column;
    
    align-content:flex-flex-end;
    
}


.textSmall{
   
    font-size:25px;
    color:  #ffd6cc;
    @media screen and (max-width:800px){
    font-size:22px;
    }

}

.textLarge{
  padding:0;
  margin:0;
  font-size:55px;
  @media screen and (max-width:800px){
    font-size:38px;
}

}

`;

const WaveContainer = styled.div`
flex:2;
justify-self:flex-end;
display:flex;
flex-direction:column;
svg{
    display:block;
    justify-self:flex-end
    
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
               <p className="textSmall">Computer Science Student</p>
               </div>
             </Welcome>


            <WaveContainer> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1160 500">
                <path fill="#fa022f" fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,213.3C480,213,600,171,720,133.3C840,96,960,64,1080,69.3C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
           </WaveContainer>
            
           
           
        </MyHome>
    );
};

export default Home;