import React from 'react'
import './styles.scss'

//mock data
import { mockUniData } from '../../../assets/mocks/mockData'

export const Unis = ({ ViewComponent, activeClass }) => {

    return (
        <div className={activeClass === "grid" ? "unis grid" : "unis"}>

            {mockUniData.map(({ itemID, itemName, itemLogoPath, itemType, courseCount }) => (
                <ViewComponent
                    key={itemID}
                    props={{ itemID, itemName, itemLogoPath, itemType, courseCount }}
                />

            ))}

        </div>
    )
}
