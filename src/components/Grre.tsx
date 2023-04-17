import React from "react";

type GrretProps = {
    name:string
    messageCount:number
    isLoggedIn:boolean 
}

const Grre = (props:GrretProps) => {
  return <div>{props.name} unread meessage {props.messageCount} isLoggedIn {props.isLoggedIn}  </div>;
};

export default Grre;
