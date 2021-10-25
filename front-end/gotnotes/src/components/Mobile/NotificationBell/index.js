import React, {useState} from 'react'

import './styles.scss'

import { mockUserData, currentUserID } from '../../../assets/mocks/mockData'

import {NotificationsActiveOutlined, NotificationsNoneOutlined} from "@mui/icons-material"

export const NotificationBell = ({props}) => {

    const [isActive, setIsActive] = useState(0);
    const {itemID} = props

    mockUserData.filter((user) => 
    (user.userID === currentUserID)
    )[0].userSubscribed.includes(itemID) ? setIsActive(1) : setIsActive(0);
    
    
    //TODO create a middleware that adds the item to Subscribed lsit of the User
    //upon clicking on the bell
    return (
        <div className="notificationBell">
            {isActive ? <NotificationsActiveOutlined/> : <NotificationsNoneOutlined/>}
        </div>
    )
}
