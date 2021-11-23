import React, { useEffect, useState } from "react";

import axios from "axios";
import { subscribeToCourse } from "../../../services/SearchTabServices/CourseInteractionHandler";

// import { useLocation } from "react-router-dom";

import "./styles.scss";

// import { mockClassData } from "../../../assets/mocks/mockData";

export const Courses = ({ ViewComponent, activeClass }) => {
  const [courseData, setCourseData] = useState(null);

  // const { pathname } = useLocation();

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4000${pathname}`, { crossdomain: true })
  //     .then((res) => {
  //       console.log(res.data);
  //       setCourseData(res.data);
  //     });
  // }, []);

  // another temporary fix as pathname is seemingly not being recognized
  useEffect(() => {
    axios
      .get(`http://localhost:4000/courses`, { crossdomain: true })
      .then((res) => {
        console.log(res.data);
        setCourseData(res.data);
      });
  }, []);

  return (
    <div className={activeClass === "grid" ? "courses grid" : "courses"}>
      {courseData &&
        courseData[0].uniCourses.map(
          ({
            courseID: itemID,
            courseName: itemName,
            courseSharedFileCount: enrolledStudents,
          }) => (
            <ViewComponent
              key={itemID}
              props={{
                itemID,
                itemName,
                itemLogoPath: "",
                itemType: "course",
                enrolledStudents,
                interactionHandler: subscribeToCourse,
              }}
            />
          )
        )}
    </div>
  );
};
