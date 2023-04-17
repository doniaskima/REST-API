import React from "react";

type OscarPrps = {
    children: React.ReactNode
}

const Oscar = (props:OscarPrps) => {
  return <div> {props.children} </div>;
};

export default Oscar;
