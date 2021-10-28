import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";


export const Search = () => {

  const [criteria, setCriteria] = useState("1");
  const [searchItem, setSearchItem] = useState("");

  //TODO service functionfor onRequestSearch needs to be created

  return (

    <div className="search">
      <SearchBar
        value={searchItem}
        onChange={value => {
          setSearchItem(value);
        }}
        onRequestSearch={() => console.log("onRequestSearch")}

      />
    </div>


  )
}
