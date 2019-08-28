import React from "react";
import Photo from "./Photo";
import Title from "./Title";
import Img from "./img/avatar.jpg"
function Wrapper() {
    return (
    <div>
      <Photo src={Img}/>
  
      <Title style ={{color:"red"}} name= 'My Name here'/>
  
       <Title small name ='My job here'/>
    </div>
    );
  }
  export default Wrapper;