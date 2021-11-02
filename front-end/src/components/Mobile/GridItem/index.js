import React from 'react'

//imports
import { useHistory, useLocation } from "react-router-dom";

//icon
import { NotificationBell } from '../NotificationBell';

import "./styles.scss"
export const GridItem = ({ props }) => {

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

        <div className="grid-item" onClick={() => handleClick()}>
            {(itemType === "uni" || itemType === "file") && <img className="grid-item-logo" src={itemLogoPath} alt="" />}

            <p className="grid-item-name">{itemName}</p>

            <div className="info">
                {itemType === "uni" && <p>{courseCount}</p>}
                {itemType === "class" && <div className="course-info"><p>{enrolledStudents}</p><NotificationBell props={{ itemID }} /></div>}
                {itemType === "file" && <p>{likeCount},{dislikeCount},{commentCount}</p>}
            </div>

        </div>


    )
}
