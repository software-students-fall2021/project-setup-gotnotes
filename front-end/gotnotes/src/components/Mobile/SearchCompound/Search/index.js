import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";


export default function App() {
  const [criteria, setCriteria] = useState("1");
  const [searchItem, setSearchItem] = useState("");
  console.log(criteria);
  return (

      <div className="main-content">
        <SearchBar
          value={searchItem}
          onChange={value => {
            setSearchItem(value);
          }}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{
            margin: "0 auto",
            maxWidth: 800
          }}
        />
      </div>
  );
}
