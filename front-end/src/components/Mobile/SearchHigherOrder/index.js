import React from "react";

import "./styles.scss";

import { Search } from "./Search";
import { Sort } from "./Sort";
import { GridListToggle } from "./GridListToggle";

export const SearchHigherOrder = () => {

  return (
    <div className="search-higher-order-container">
      <div className="search-container">
        <Search />
      </div>
      <div className="sort-container">
        <Sort />
      </div>
      <div className="grid-list-toggle-container">
        <GridListToggle />
      </div>
    </div>
  );
};
