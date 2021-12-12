import React, { useContext } from "react";
import "./styles.scss";

import { useQuery } from "react-query";
import { fetchUniData } from "../../../services/SearchTabServices/FetchCalls";
import { GlobalContext } from "../../../context/provider";

import { ListItem } from "./../../../components/Mobile/ListItem";
import { GridItem } from "./../../../components/Mobile/GridItem";

export const Unis = () => {
  const { globalState: {currentLayout} } = useContext(GlobalContext);
  const { data, error, isError, isLoading } = useQuery("unis", fetchUniData);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error: {error}</div>;
  return (
    <div className={currentLayout === "grid" ? "unis grid" : "unis"}>
      {data?.map(
          ({
            _id: itemId,
            uniName: itemName,
            uniLogoPath: itemLogoPath,
            uniCourses: courses,
          }) =>
            currentLayout === "grid" ? (
              <GridItem
                key={itemId}
                props={{
                  itemId,
                  itemName,
                  itemLogoPath,
                  itemType: "uni",
                  courses,
                }}
              />
            ) : (
              <ListItem
                key={itemId}
                props={{
                  itemId,
                  itemName,
                  itemLogoPath,
                  itemType: "uni",
                  courses,
                }}
              />
            )
        )}
    </div>
  );
};
