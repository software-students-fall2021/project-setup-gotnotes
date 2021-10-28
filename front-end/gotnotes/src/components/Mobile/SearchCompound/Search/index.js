import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
//import { MenuItem, Select, Typography } from "@material-ui/core/";
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default function App() {
  const [criteria, setCriteria] = useState("1");
  const [searchItem, setSearchItem] = useState("");
  console.log(criteria);
  return (
    //<MuiThemeProvider>
      <div className="main-content">
        {/*<Select
          displayEmpty
          onChange={e => setCriteria(e.target.value)}
          defaultValue={criteria}
        >
          <MenuItem disabled value="">
            <em>Search By</em>
          </MenuItem>
          <MenuItem value={1}>First Name</MenuItem>
          <MenuItem value={2}>Last Name</MenuItem>
          <MenuItem value={3}>Phone Number</MenuItem>
          <MenuItem value={4}>Email</MenuItem>
        </Select>
        <br />
        <br />*/}
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
    //</MuiThemeProvider>
  );
}
