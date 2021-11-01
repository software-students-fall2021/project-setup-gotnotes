import React from 'react'
import './styles.scss'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";



export const Breadcrumbs = () => {

  const { pathname } = useLocation();
  const parsedArray = pathname.split("/");
  const depth = parsedArray.length - 1;


  const handleClick = () => {

  }


  return (
    <div className="breadcrumb-container" onClick={() => handleClick()}>

      {depth === 1 ? <Link className="active" to="/unis">Unis</Link> : <Link to="/unis">Unis</Link>}
      {depth === 2 ? <>&nbsp;{">"}&nbsp;<Link className="active" to={`/unis/${parsedArray[2]}`}>{`${parsedArray[2]}`}</Link> </>:
        depth === 3 ? (<>&nbsp;{">"}&nbsp;<Link to={`/unis/${parsedArray[2]}`}>{`${parsedArray[2]}`}</Link>&nbsp;{">"}&nbsp;
          <Link className="active" to={`/unis/${parsedArray[2]}/${parsedArray[3]}`}>{`${parsedArray[3]}`}</Link></>) :
          <></>
      }

    </div >
  )
}

export default Breadcrumbs;
