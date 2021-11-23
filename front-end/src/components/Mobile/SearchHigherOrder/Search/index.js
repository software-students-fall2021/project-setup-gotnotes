import React, { useState } from "react";

import "./styles.scss";

export const Search = ({ props }) => {
  //const { items, setItems } = props;

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
      <p>{search}</p>
    </div>
  );
};
