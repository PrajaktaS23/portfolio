import React from 'react';
import styled from 'styled-components';


const MyProjects= styled.div`

flex-direction:column;
display:flex;
justify-content:space-around;


h1{
    color:#666666;
     padding:30px;
    font-size:45px;
    @media screen and (max-width:800px){
    font-size:30px;
}
}

`;
const Container=styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;

.line{
    background-color:red;
    height:3px;
}
.card{
    display:flex;
    flex-direction:column;
    width:500px;
    padding-bottom:3%;
      
    
    @media screen and (max-width:800px){
    width:80%;
    margin-left:15px;
    padding-bottom:2%;
    }
    

    .heading{
        color:white;
        padding:5px;
    }

    }
    .cardright{
        @media screen and (min-width:800px){
            align-self: flex-end;
          }
          a{
              color:white;
          }
       
    }

    .content{
        color:white;
        padding:3px;
        color:  #ffd6cc;
        
    }
    `;



const Projects = () => {
    return (
        <MyProjects id="projects"> 
             <center>  <h1>PROJECTS</h1> </center>
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
                    It was a mobile website for giving information about all events with important dates. 
                    </p></div>
                </div>

                <div class="card">
                    <div class="heading"><h2>Crime Reporting Map Application</h2></div>
                    <div className="line"></div>
                    <div class="content"><p>I have done this project at <b style={{color:"white"}}>Internal Hackathon 2020</b>.<br/>
                    It was 48 hours competation in which my team had secured 5th rank.
                    It was a android application through  which victims can imform their location to police by just shaking their mobile and generating specific frequency. </p></div>
                </div>
               
            </Container>
        </MyProjects>
    );
};

export default Projects;