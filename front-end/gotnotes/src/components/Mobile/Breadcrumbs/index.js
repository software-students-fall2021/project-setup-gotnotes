import React from 'react'
import './styles.scss'
import { useLocation } from 'react-router-dom';
import { Link, Redirect } from "react-router-dom";


function handleClick(event) {
  <Redirect to="${pathname}"/>;
}

export const Breadcrumbs = props => {

  const { pathname } = useLocation();
  const parsedArray = pathname.split("/");
  const depth = parsedArray.length - 1;
  console.log(depth);

  if(depth == 2){
    return (
      <div className="breadcrumb" onClick={() => handleClick()}>
        <nav>
          <Link to="/unis">Uni</Link>
        </nav>
      </div>
    )
  }
  else if(depth == 3){
    return (
      <div className="breadcrumb" onClick={() => handleClick()}>
        <nav>
          <Link to="/unis">Uni</Link>
          <Link to="/unis/:uniName">/Courses</Link>
        </nav>
      </div>
    )

  }
  else{
    return (
      <div className="breadcrumb" onClick={() => handleClick()}>
        <nav>
          <Link to="/unis">Uni</Link>
          <Link to="/unis/:uniName">/Courses</Link>
          <Link to="/unis/:uniName/:courseName">/Files</Link>
        </nav>
      </div>
    )
  }


};


export default Breadcrumbs;