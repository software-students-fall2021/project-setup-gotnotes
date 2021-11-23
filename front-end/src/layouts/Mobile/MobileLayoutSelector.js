import React, { useState } from "react";

//HOC
import { SearchHigherOrder } from "./../../components/Mobile/SearchHigherOrder";

import { ListItem } from "../../components/Mobile/ListItem";
import { GridItem } from "../../components/Mobile/GridItem";
import { Breadcrumbs } from "../../components/Mobile/Navigations/Breadcrumbs";

export const MobileLayoutSelector = ({ Component }) => {
  const [currentLayout, setCurrentLayout] = useState("list");

  const [breadCrumbData, setBreadCrumbData] = useState(null);

  return (
    <div className="layout-container">
      <div className="sticky-top">
        <Breadcrumbs props={breadCrumbData} />
        <SearchHigherOrder props={{ currentLayout, setCurrentLayout }} />
      </div>
      <Component
        activeClass={currentLayout === "list" ? "" : "grid"}
        ViewComponent={currentLayout === "list" ? ListItem : GridItem}
        BreadCrumbData={breadCrumbData}
        SetBreadCrumbData={setBreadCrumbData}
      />
      <div className="clear"></div>
    </div>
  );
};
