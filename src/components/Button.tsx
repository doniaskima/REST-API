import React from "react";

type ButtonProps = {
    handleCLick:(event:React.MouseEvent<HTMLButtonElement> , id:number)=> void
}

const Button = (props:ButtonProps) => {
  return (
    <button onClick={(event) => props.handleCLick(event,1)}>
      Click
     </button>
  )
 
};

export default Button;
