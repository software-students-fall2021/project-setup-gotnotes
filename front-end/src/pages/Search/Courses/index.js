import React from "react";
import { useLocation } from "react-router-dom";
import {
  subscribeToCourse,
  fetchUniData,
  fetchCourseData,
} from "../../../services/SearchTabServices/FetchCalls";

import "./styles.scss";
import { useQuery } from "react-query";

export const Courses = ({ ViewComponent, activeClass }) => {
  const uniId = useLocation().pathname.split("/").pop()
  const { data, error, isError, isLoading } = useQuery(["courses", uniId], fetchCourseData);


  console.log(isError, error)
  if (isError) return <div>Error: {error}</div>;
  if (isLoading) return <div>Loading</div>;

  if (data) {
    return (
      <div className={activeClass === "grid" ? "courses grid" : "courses"}>
        {data.map(
          ({ _id: itemID, courseName: itemName, subscribed }) => (
            <ViewComponent
              key={itemID}
              props={{
                itemID,
                itemName,
                itemLogoPath: "",
                itemType: "course",
                enrolledStudents: subscribed.length,
                interactionHandler: subscribeToCourse,
              }}
            />
          )
        )}
      </div>
    );
  }
};
