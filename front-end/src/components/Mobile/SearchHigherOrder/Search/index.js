import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../../context/provider";

import "./styles.scss";

export const Search = ({ props }) => {
  const {displayedItems} = useContext(GlobalContext)

  const [search, setSearch] = useState("");

  //TODO get the items drilled down onto this component from the app.js
  const handleSearchChange = (value) => {
    setSearch(value);

    /*  if (search.length > 0) {
      setItems(items.filter((item) =>
        item.itemName.toLowerCase().match(search)
      ))
    } */
  };

  return (
    <div className="search">
      <input
        className="search-box"
        name="password"
        autoComplete="on"
        placeholder="Search..."
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </div>
  );
};
