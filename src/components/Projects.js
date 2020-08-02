import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const MyProjects= styled.div`

flex-direction:column;
display:flex;
justify-content:space-around;


h1{
    color:#666666;
    
    font-size:45px;
    @media screen and (max-width:800px){
    font-size:30px;
}
}

`;
const Container=styled.div`
margin-top:30px;
display:flex;
flex-direction:column;
justify-content:space-around;

.line{
    background-color:${ props => props.theme.orange };
    height:3px;
}
.card{
    display:flex;
    flex-direction:column;
    width:500px;
    padding-bottom:3%;
    margin-left:70px;  
    
    @media screen and (max-width:800px){
    width:80%;
    margin-left:20px;
    padding-bottom:2%;
    }
    

    .heading{
        color:white;
        padding:5px;
        font-size:16px;
        @media screen and (max-width:800px){
      font-size:13px;
    }
    }

    }
    .cardright{
        @media screen and (min-width:800px){
            align-self: flex-end;
            margin-left:0;
            margin-right:70px;
          }
          a{
              color:white;
          }
       
    }

    .content{
        font-size:15px;
        padding:4px;
        color: ${ props => props.theme.faintWhite};
        
    }
    `;



const Projects = () => {
    return (
        <MyProjects id="projects"> 
        <Fade bottom> 
             <center>  <h1>PROJECTS</h1> </center>
        </Fade>
        <Fade bottom cascade> 
            <Container>
            
                <div class="card">
                    <div class="heading"><h2>Hostel Management</h2></div>
                    <div className="line"></div>
                    <div class="content"><p>I have done this project for Acadamic project submission.<br/>
                    Basically, it is a web application through which room allocation process in hostel can be managed.
                    This projets is developed using php with mysql database.</p></div>
                </div>
            
                <div class="card cardright">
                    <div class="heading"><h2>Pragyaa 2019 Website</h2></div>
                    <div className="line"></div>
                    <div class="content"><p><a href="http://m.pragyaa.org/" target="_blank">http://m.pragyaa.org/</a><br/>
                    Pragyaa is a National event organized by SGGSIE&T.As a volunteer of web development comity I was part of this project.
                    We have developed mobile website for giving information about all events with important dates. 
                    </p></div>
                </div>
                

                <div class="card">
                    <div class="heading"><h2>Crime Reporting Map Application</h2></div>
                    <div className="line"></div>
                    <div class="content"><p>I have done this project at <b style={{color:"white"}}>Internal Hackathon 2020</b>.<br/>
                    It was 48 hours competation in which my team had secured 3rd rank.
                    This project was an android application through  which victims can share their location to police by just shaking their mobile and generating specific frequency. </p></div>
                </div>
         
            </Container>
            </Fade> 
        </MyProjects>
    );
};

export default Projects;