import React from 'react'
import { NotificationBell } from '../NotificationBell';

import "./styles.scss"

export const ListItem = ({props}) => {

    //TODO in the future we will fetch these data from the api, for now we use mock data
    //with a similar format to the actual api that we will design
    const {itemID, itemName, itemLogoPath, itemType} = props; 

    //TODO we will refactor this so that logic will be seperate from the components
    //TODO we will create another function that actually takes the User to the proper page after click
    const navigationHandler = ID => {
        console.log(`I am navigating to the course list of class with ID: ${ID}`)
    } 

    return (
        <div className="list-item" onClick={() => navigationHandler(itemID)}>
            {itemType === "uni" && <img className="list-item-logo" src={itemLogoPath} alt="" />}
            
            <p className="list-item-name">{itemName}</p>
            {/*this is how you do comments inreactjs btw*/ }
            {/*
                So the code below, the part in the curly braces, means that if the itemType prop
                inherited from the parent calling this component is equal to "class",
                then we know that we are dealing with a list of classes, so we should enable the 
                notification bell functionality

            
            */ }
            <div className="info">
                {itemType === "uni" && <p># of courses</p>}
                {itemType === "class" && <div><p># of subscribers</p><NotificationBell props={{itemID}}/></div>}
                {itemType === "file" && <p># of like download comment</p>}
            </div>
            
        </div>
    )
}