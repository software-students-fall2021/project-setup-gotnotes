import React from 'react'

import './styles.scss'
import { mockFileData } from '../../../assets/mocks/mockData'

import { ListItem } from '../../../components/Mobile/ListItem'

import { useLocation, useParams } from "react-router-dom";

export const Files = () => {
    return (
        <div className="files">

            <p>List Items for Files</p>

            {mockFileData.map(({ itemID, itemName, itemLogoPath, itemType, fileType, likeCount, commentCount, dislikeCount }) => (
                <ListItem key={itemID} props={{ itemID, itemName, itemLogoPath, itemType, fileType, likeCount, commentCount, dislikeCount }} />
            ))}

        </div>
    )
}
