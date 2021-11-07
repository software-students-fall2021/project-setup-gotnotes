import React from 'react'
import { subscribeToCourse } from '../../../services/SearchTabServices/CourseInteractionHandler'

import './styles.scss'

import { mockClassData } from '../../../assets/mocks/mockData'


export const Courses = ({ ViewComponent, activeClass }) => {
    return (
        <div className={activeClass === "grid" ? "courses grid" : "courses"}>

            {mockClassData.map(({ itemID, itemName, itemLogoPath, itemType, enrolledStudents }) => (
                <ViewComponent
                    key={itemID}
                    props={{ itemID, itemName, itemLogoPath, itemType, enrolledStudents, interactionHandler: subscribeToCourse}}
                />

            ))}


        </div>
    )
}

