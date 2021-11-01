import React from 'react'
import './styles.scss'
import { useLocation } from 'react-router-dom';
import { Link, Redirect } from "react-router-dom";



export const Breadcrumbs = props => {

  const { pathname } = useLocation();
  const parsedArray = pathname.split("/");
  const depth = parsedArray.length - 1;

  console.log(parsedArray);
  
  const handleClick = () => {

  }

  if(depth === 1){
    return (
      <div className="breadcrumb" onClick={() => handleClick()}>
        <nav>
          <Link to="/unis">Unis</Link>
        </nav>
      </div>
    )
  }
  else if(depth === 2){
    return (
      <div className="breadcrumb" onClick={() => handleClick()}>
        <nav>
          <Link to="/unis">Unis</Link>
          <Link to={`/unis/${parsedArray[2]}`}>/{`${parsedArray[2]}`}</Link>
        </nav>
      </div>
    )

  }
  else{
    return (
      <div className="breadcrumb" onClick={() => handleClick()}>
        <nav>
          <Link to="/unis">Unis</Link>
          <Link to={`/unis/${parsedArray[2]}`}>/{`${parsedArray[2]}`}</Link>
          <Link to={`/unis/${parsedArray[2]}/${parsedArray[3]}`}>/{`${parsedArray[3]}`}</Link>
        </nav>
      </div>
    )
  }


};


export default Breadcrumbs;
