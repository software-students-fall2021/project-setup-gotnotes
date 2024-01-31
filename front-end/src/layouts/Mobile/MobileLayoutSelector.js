import React, { useContext } from "react";
import { GlobalContext } from "./../../context/provider";

//HOC
import { SearchHigherOrder } from "./../../components/Mobile/SearchHigherOrder";

//components
import { Breadcrumbs } from "../../components/Mobile/Navigations/Breadcrumbs";
import AdminToolbar from "./../../components/AdminToolbar";

export const MobileLayoutSelector = ({ children }) => {
  const { globalState } = useContext(GlobalContext);
  return (
    <div className="layout-container">
      <div className="sticky-top">
        {globalState.currentUser?.isAdmin && <AdminToolbar />}
        <Breadcrumbs />
        <SearchHigherOrder />
      </div>
      {children}
      <div className="clear"></div>
    </div>
  );
};
