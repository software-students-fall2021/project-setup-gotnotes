import React, { useContext } from "react";

import "./styles.scss";
//service
import { sortResults } from "../../../../services/SortService";
import {
  uniSortParams,
  courseSortParams,
  fileSortParams,
} from "./../../../../assets/constants/sortParams";

//ctx
import { GlobalContext } from "../../../../context/provider";

export const Sort = () => {
  const { displayedItems, setDisplayedItems, currentPage } = useContext(GlobalContext);

  const handleChange = (sortParam) => {
    setDisplayedItems(sortResults(sortParam, displayedItems));
  };

  return (
    <div className="sort">
      <select
        className="sort-options"
        onChange={(e) => handleChange(e.target.value)}
      >
        {currentPage === "unis" &&
          uniSortParams.map((values) => (
            <option value={values.value}>{values.label}</option>
          ))}
        {currentPage === "courses" &&
          courseSortParams.map((values) => (
            <option value={values.value}>{values.label}</option>
          ))}
        {currentPage === "files" &&
          fileSortParams.map((values) => (
            <option value={values.value}>{values.label}</option>
          ))}
      </select>
    </div>
  );
};
