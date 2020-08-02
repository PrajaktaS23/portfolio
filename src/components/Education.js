import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
const MyEducation= styled.div`
height:100vh;

*{
    box-sizing: border-box;
}
display:flex;
flex-direction:column;
justify-content:flex-start;

h1{
    color:#666666;
    padding:30px;
    font-size:45px;
    @media screen and (max-width:700px){
    font-size:30px;
}
}
`;

const Wrapper= styled.div`
display: -webkit-flex;
display: -moz-flex;
display: -ms-flex ;
display: -o-flex;
direction: flex;
flex-wrap : wrap;
max-width : 800px;
margin: 0 auto;

@media screen and (max-width:800px){
    margin-right:15px;
}




.box-area{
display: -webkit-flex;
display: -moz-flex;
display: -ms-flex ;
display: -o-flex;
direction: flex;
flex-wrap:nowrap;
justify-content:center;
width:100%;
}

.box-date{
display: -webkit-flex;
display: -moz-flex;
display: -ms-flex ;
display: -o-flex;
display: flex;
background:linear-gradient(to right, #141324 45%, #fa022f 45%, #fa022f 45%, #141324 50%);
order: 2;
text-align:center;
font-size:28px;
flex-basis:100px;
color: #fff;
}
.box-date > span{
    font-size: 20px;
    padding: 10px;
   
    background: ${ props => props.theme.orange };
    margin:auto;
}

.box-text{
    text-align:center;
    padding:20px;
    border-radius:25px;
    color: #fff;
    order:3;
    width:80%;
    padding-left:10px;
    background: ${ props => props.theme.blue};
    margin-bottom: 3%;
    border: solid 3px ${ props => props.theme.orange };
  

}
.box-text p{
color: ${ props => props.theme.faintWhite};
}
.box-text h2{
    margin:0;
    font-size:14px;
    text-transform:uppercase;
    color: ${ props => props.theme.faintWhite}
}

.box-text h3{
    margin:10px;
    font-size:14px;
    color:white;
}

@media (min-width: 640px){
     .box-text,
     .custom{
         width: 40%;
     }
    .box-right .box-text{
        order: 1;
        padding-right: 10px;
        border-radius:25px;
    }
    .box-right  .custom {
        order:3;


    }
}
`;

const Education = () => {
    return (
        
        <MyEducation id="education">
            <Fade bottom>
              <center>  <h1>EDUCATION</h1> </center>
            </Fade>
            <Fade bottom>
            <Wrapper>
                <div className="box-area box-right">
                    <div className="custom"></div>
                    <div className="box-date">
                        <span>2015</span>
                    </div>
                    <div className="box-text">
                        <h2>Mahatma Phule HighSchool,Nanded.</h2>
                        <h3>SSC</h3>
                        <p>with 94%</p>
                     </div>
                    
                </div>
          
                <div className="box-area ">
                    <div className="custom"></div>
                    <div className="box-date">
                        <span>2017</span>
                    </div>
                    <div className="box-text ">
                        <h2>Yeshwant Mahavidyalaya,Nanded.</h2>
                        <h3>HSC</h3>
                        <p>with 72.31%</p>
                     </div>
                </div>
           
                <div className="box-area box-right">
                         <div className="custom"></div>
                         <div className="box-date">
                             <span>2020</span>
                          </div>
                          <div className="box-text">
                              <p>(present)</p>
                             <h2>SGGSIE & T Nanded</h2>
                             <h3>BTech in computer science</h3>
                             <p>with CGPA 9.09</p>
                          </div>
                </div>
           
            </Wrapper>
            </Fade>
        </MyEducation>

    );
};

export default Education;