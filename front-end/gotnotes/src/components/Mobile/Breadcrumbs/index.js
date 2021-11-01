import React from 'react'
import { useLocation } from 'react-router-dom';
import {Redirect } from "react-router-dom";

function handleClick(event) {
  <Redirect to="${pathname}"/>;
  //history.push(`${pathname}/${itemName}`)
  //console.log(pathname, itemName)
}

//create buttons
//redirect to correct path based on button pressed

export const Breadcrumbs = props => {
  const { pathname } = useLocation();
  const parsedArray = pathname.split("/");
  const depth = parsedArray.length - 1;
  console.log(depth);

  if(depth == 1){
    return (
      <div className="breadcrum" onClick={() => handleClick()}>
          
      </div>
    )
  }
  else if(depth == 2){
    return (
      <div className="breadcrum" onClick={() => handleClick()}>
          
      </div>
    )

  }
  else{
    return (
      <div className="breadcrum" onClick={() => handleClick()}>
          
      </div>
    )
  }


};


export default Breadcrumbs;