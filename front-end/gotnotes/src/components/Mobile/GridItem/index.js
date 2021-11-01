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
        <div>
            <div className="grid-item" onClick={() => handleClick()}>
                {itemType === "uni" && <img className="grid-item-logo" src={itemLogoPath} alt="" />}
                {itemType === "course" && <img className="grid-item-logo" src={itemLogoPath} alt="" />}
                {itemType === "file" && <img className="grid-item-logo" src={`./fileLogos/${props.fileType}.png`} alt="" />}

                <p className="grid-item-name">{itemName}</p>

                <div className="info">
                    {itemType === "uni" && <p>{courseCount}</p>}
                    {itemType === "class" && <div><p>{enrolledStudents}</p><NotificationBell props={{ itemID }} /></div>}
                    {itemType === "file" && <p>{likeCount},{dislikeCount},{commentCount}</p>}
                </div>

            </div>

        </div>
    )
}
