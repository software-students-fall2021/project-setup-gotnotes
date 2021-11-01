import React from 'react'

import './styles.scss'

import { ListItem } from '../../../components/Mobile/ListItem'

import { mockClassData } from '../../../assets/mocks/mockData'


export const Courses = ({ ViewComponent, activeClass }) => {
    return (
        <div className={activeClass === "grid" ? "courses grid" : "courses"}>

            {mockClassData.map(({ itemID, itemName, itemLogoPath, itemType, enrolledStudents }) => (
                <ViewComponent
                    key={itemID}
                    props={{ itemID, itemName, itemLogoPath, itemType, enrolledStudents }}
                />
            ))}


        </div>
    )
}

