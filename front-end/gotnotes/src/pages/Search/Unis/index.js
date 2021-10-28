import React from 'react'
import './styles.scss'

//mock data
import { mockUniData } from '../../../assets/mocks/mockData'

export const Unis = ({ ViewComponent }) => {

    return (
        <div className="unis">

            {mockUniData.map(({ itemID, itemName, itemLogoPath, itemType, courseCount }) => (
                <ViewComponent
                    key={itemID}
                    props={{ itemID, itemName, itemLogoPath, itemType, courseCount }}
                />

            ))}

        </div>
    )
}
