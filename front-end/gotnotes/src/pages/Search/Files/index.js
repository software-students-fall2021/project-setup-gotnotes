import React from 'react'

import { mockFileData } from '../../../assets/mocks/mockData'

import { ListItem } from '../../../components/Mobile/ListItem'

export const Files = () => {
    return (
        <div>

            <p>List Items for Files</p>

            {mockFileData.map(({ itemID, itemName, itemLogoPath, itemType, fileType, likeCount, commentCount, dislikeCount }) => (
                <ListItem key={itemID} props={{ itemID, itemName, itemLogoPath, itemType, fileType, likeCount, commentCount, dislikeCount }} />
            ))}

        </div>
    )
}
