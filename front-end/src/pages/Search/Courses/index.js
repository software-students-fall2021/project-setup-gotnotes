import React, { useEffect, useState } from "react";

import axios from "axios";
import { subscribeToCourse } from "../../../services/SearchTabServices/CourseInteractionHandler";

// import { useLocation } from "react-router-dom";

import "./styles.scss";

// import { mockClassData } from "../../../assets/mocks/mockData";

export const Courses = ({ ViewComponent, activeClass }) => {
  const [courseData, setCourseData] = useState(null);

//   const { pathname } = useLocation();

  useEffect(() => {
    // const result = await axios(`http://localhost:4000${pathname}`);
    // console.log(result.data);
    // setCourseData(result.data);
    axios
      .get("http://localhost:4000/unis", { crossdomain: true })
      .then((res) => {
        console.log(res.data);
        setCourseData(res.data);
      });
    console.log("reached");
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
