import React from "react";

//HOC
import { SearchHigherOrder } from "./../../components/Mobile/SearchHigherOrder";

//components
import { Breadcrumbs } from "../../components/Mobile/Navigations/Breadcrumbs";

export const MobileLayoutSelector = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="sticky-top">
        <Breadcrumbs />
        <SearchHigherOrder />
      </div>
      {children}
      <div className="clear"></div>
    </div>
  );
};
