import React from 'react'

import "./styles.scss"

export const ListItem = ({itemLogoPath, itemName}) => {

    return (
        <div className="list-item">
            <img className="list-item-logo" src={itemLogoPath} alt="" />
            <p className="list-item-name">{itemName}</p>
        </div>
    )
}