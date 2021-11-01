import React from 'react'


//imports
import { useHistory, useLocation } from "react-router-dom";

//icon
import { NotificationBell } from '../NotificationBell';

import "./styles.scss"

export const ListItem = ({ props }) => {

    //TODO in the future we will fetch these data from the api, for now we use mock data
    //with a similar format to the actual api that we will design
    const { itemID, itemName, itemLogoPath, itemType, enrolledStudents, courseCount, likeCount, commentCount, dislikeCount } = props;

    const history = useHistory();
    const { pathname } = useLocation();

    const handleClick = () => {
        history.push(`${pathname}/${itemName}`)
        console.log(pathname, itemName)
    }

    return (
        <div className="list-item" onClick={() => handleClick()}>
            {itemType === "uni" && <img className="list-item-logo" src={itemLogoPath} alt="" />}
            {itemType === "file" && <img className="list-item-logo" src={`./fileLogos/${props.fileType}.png`} alt="" />}

            <p className="list-item-name">{itemName}</p>
            {/*this is how you do comments inreactjs btw*/}
            {/*
                So the code below, the part in the curly braces, means that if the itemType prop
                inherited from the parent calling this component is equal to "class",
                then we know that we are dealing with a list of classes, so we should enable the 
                notification bell functionality

            
            */ }
            <div className="info">
                {itemType === "uni" && <p>{courseCount}</p>}
                {itemType === "class" && <div className="course-info"><p>{enrolledStudents}</p><NotificationBell props={{ itemID }} /></div>}
                {itemType === "file" && <p>{likeCount},{dislikeCount},{commentCount}</p>}
            </div>

        </div>
    )
}