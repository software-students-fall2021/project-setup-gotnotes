import React from "react";
import "./styles.scss";

import { useQuery } from "react-query";
import { fetchUniData } from "../../../services/SearchTabServices/FetchCalls";

export const Unis = ({
  ViewComponent,
  activeClass,
  BreadCrumbData,
  SetBreadCrumbData,
}) => {
  const { data, error, isError, isLoading } = useQuery("unis", fetchUniData);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error: {error}</div>;

  return (
    <div className={activeClass === "grid" ? "unis grid" : "unis"}>
      {data &&
        data.map(
          ({
            _id: itemID,
            uniName: itemName,
            uniLogoPath: itemLogoPath,
            uniStudentCount: courseCount,
          }) => (
            <ViewComponent
              key={itemID}
              props={{
                itemID,
                itemName,
                itemLogoPath,
                itemType: "uni",
                courseCount,
              }}
            />
          )
        )}
    </div>
  );
};
