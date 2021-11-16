import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { subscribeToCourse } from '../../../services/SearchTabServices/CourseInteractionHandler'

import { useLocation } from 'react-router-dom';

import './styles.scss'

import { mockClassData } from '../../../assets/mocks/mockData'


export const Courses = ({ ViewComponent, activeClass }) => {


    const [courseData, setCourseData] = useState(null);

    const { pathname } = useLocation();

    console.log(pathname)

    useEffect(async () => {
        const result = await axios(
            `http://localhost:4000${pathname}`,
        );
        console.log(result.data)
        setCourseData(result.data);
    }, [])

    return (
        <div className={activeClass === "grid" ? "courses grid" : "courses"}>

            {mockClassData.map(({ itemID, itemName, itemLogoPath, itemType, enrolledStudents }) => (
                <ViewComponent
                    key={itemID}
                    props={{ itemID, itemName, itemLogoPath, itemType, enrolledStudents, interactionHandler: subscribeToCourse }}
                />

            ))}


        </div>
    )
}

