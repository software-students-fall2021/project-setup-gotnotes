import React, { useContext } from "react";
import "./styles.scss";

import { GlobalContext } from "../../../context/provider";
import { fetchCourseByUni } from "../../../services/SearchTabServices/FetchCalls";

import { useQuery } from "react-query";
import { ListItem } from "../../../components/Mobile/ListItem";
import { GridItem } from "../../../components/Mobile/GridItem";
import { useParams } from "react-router-dom";

export const Courses = () => {
  const {
    globalState: { currentLayout },
  } = useContext(GlobalContext);

  const { uniId } = useParams();

  const { data, error, isError, isLoading } = useQuery(
    ["courses", uniId],
    fetchCourseByUni
  );

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error: {error}</div>;

  if (data) {
    return (
      <div className={currentLayout === "grid" ? "courses grid" : "courses"}>
        {data.map(({ _id: itemId, courseName: itemName, subscribed }) =>
          currentLayout == "list" ? (
            <ListItem
              key={itemId}
              props={{
                itemId,
                itemName,
                itemLogoPath: "",
                itemType: "course",
                subscribed,
              }}
            />
          ) : (
            <GridItem
              key={itemId}
              props={{
                itemId,
                itemName,
                itemLogoPath: "",
                itemType: "course",
                subscribed
              }}
            />
          )
        )}
      </div>
    );
  }
};
