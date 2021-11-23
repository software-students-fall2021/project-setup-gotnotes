import React from "react";
import { useLocation } from "react-router-dom";

import "./styles.scss";

//data
import {
  uniSortParams,
  courseSortParams,
  fileSortParams,
} from "./../../../../assets/constants/sortParams";

//service
import { sortResults } from "../../../../services/SortService";

export const Sort = ({ props }) => {
  const { items, setItems } = props;

  const currentPage = (useLocation().pathname.match(/\//g) || []).length;

  const handleChange = (e) => {
    setItems(sortResults(e, items));
  };

  return (
    <div className="sort">
      <select
        className="sort-options"
        onChange={(e) => handleChange(e.target.value)}
      >
        {currentPage === 1 &&
          uniSortParams.map((values) => (
            <option value={values.value}>{values.label}</option>
          ))}
        {currentPage === 2 &&
          courseSortParams.map((values) => (
            <option value={values.value}>{values.label}</option>
          ))}
        {currentPage === 3 &&
          fileSortParams.map((values) => (
            <option value={values.value}>{values.label}</option>
          ))}
      </select>
    </div>
  );
};
