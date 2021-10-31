import React, { useState } from "react";

//HOC
import { SearchHigherOrder } from "./../../components/Mobile/SearchHigherOrder";

import { ListItem } from "../../components/Mobile/ListItem";
import { GridItem } from "../../components/Mobile/GridItem";

export const MobileLayoutSelector = ({ Component }) => {
  const [currentLayout, setCurrentLayout] = useState("list");

  return (
    <div className="layout-container">
      <SearchHigherOrder props={{ currentLayout, setCurrentLayout }} />
      <Component
        ViewComponent={currentLayout === "list" ? ListItem : GridItem}
      />
    </div>
  );
};
