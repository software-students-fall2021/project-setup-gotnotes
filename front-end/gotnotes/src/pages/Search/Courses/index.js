import React from 'react'

import { ListItem } from '../../../components/Mobile/ListItem'

import { mockClassData } from '../../../assets/mocks/mockData'

import { useLocation, useParams } from "react-router-dom";

export const Courses = () => {
    return (
        <div>
            <p>List Items for Courses</p>

            {mockClassData.map(({ itemID, itemName, itemLogoPath, itemType, enrolledStudents }) => (
                <ListItem key={itemID} props={{ itemID, itemName, itemLogoPath, itemType, enrolledStudents }} />
            ))}


        </div>
    )
}
