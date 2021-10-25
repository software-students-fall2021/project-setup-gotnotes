import React from 'react'
import { NotificationBell } from '../NotificationBell';

import "./styles.scss"

export const ListItem = ({props}) => {

    const {itemID, itemName, itemLogoPath, itemType} = props; 

    return (
        <div className="list-item">
            <img className="list-item-logo" src={itemLogoPath} alt="" />
            <p className="list-item-name">{itemName}</p>
            {itemType === "class" && <NotificationBell props={{itemID}}/>}
        </div>
    )
}