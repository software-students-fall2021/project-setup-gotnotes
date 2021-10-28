import React from 'react'

import './styles.scss'

import { ListItem } from '../../../components/Mobile/ListItem'

import { mockClassData } from '../../../assets/mocks/mockData'


export const Courses = () => {
    return (
        <div className="courses">
            <p>List Items for Courses</p>

            {mockClassData.map(({ itemID, itemName, itemLogoPath, itemType, enrolledStudents }) => (
                <ListItem key={itemID} props={{ itemID, itemName, itemLogoPath, itemType, enrolledStudents }} />
            ))}


        </div>
    )
}
