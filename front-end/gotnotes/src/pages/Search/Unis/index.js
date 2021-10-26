import React from 'react'
//mock data
import { mockUniData } from '../../../assets/mocks/mockData'

import { ListItem } from '../../../components/Mobile/ListItem'

export const Unis = () => {
    return (
        <div>

            <p>List Items for Universities</p>

            {mockUniData.map(({ itemID, itemName, itemLogoPath, itemType, courseCount }) => (
                <ListItem key={itemID} props={{ itemID, itemName, itemLogoPath, itemType, courseCount }} />
            ))}




        </div>
    )
}
