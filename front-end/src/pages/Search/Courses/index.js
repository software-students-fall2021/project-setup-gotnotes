import React from "react";
import {useQuery} from "react-query"
import axios from "axios";
import { subscribeToCourse } from "../../../services/SearchTabServices/CourseInteractionHandler";

// import { useLocation } from "react-router-dom";

import "./styles.scss";

const fetchAllCourses = async () => {
  const {data} = await axios.get('localhost:4000/courses')
  return data
} 

export const Courses = ({ ViewComponent, activeClass }) => {

  const {data, error, isLoading,isError} = useQuery("courses", fetchAllCourses)

  return (
    <div className={activeClass === "grid" ? "courses grid" : "courses"}>
      {data &&
        data.map(
          ({
            _id: itemID,
            courseName: itemName,
            subscribed,
          }) => (
            <ViewComponent
              key={itemID}
              props={{
                itemID,
                itemName,
                itemLogoPath: "",
                itemType: "course",
                enrolledStudents: subscribed.length,
              }}
            />
          )
        )}
    </div>
  );
};
