import React, { useEffect, useState } from "react";
import axios from "axios";
import { subscribeToCourse } from "../../../services/SearchTabServices/CourseInteractionHandler";

//import list items so that you can show all the different course chats
export const ChatList = ({ ViewComponent, activeClass }) => {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.BASE_URL + `/courses`, { crossdomain: true })
      .then((res) => {
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

export default ChatList;
