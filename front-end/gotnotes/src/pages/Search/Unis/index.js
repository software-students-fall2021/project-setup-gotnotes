import React from 'react'

//imports
import { useLocation, useParams } from "react-router-dom";

//mock data
import { mockUniData } from '../../../assets/mocks/mockData'

//components
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
