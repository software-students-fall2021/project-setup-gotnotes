import React, { useState } from "react";

//HOC
import { SearchHigherOrder } from "./../../components/Mobile/SearchHigherOrder";


import { ListItem } from '../../components/Mobile/ListItem';
import { GridItem } from '../../components/Mobile/GridItem'
import { Breadcrumbs } from '../../components/Mobile/Breadcrumbs';


export const MobileLayoutSelector = ({ Component }) => {
    const [currentLayout, setCurrentLayout] = useState("list");


    return (
        <div className="layout-container">
            <Breadcrumbs />
            <SearchHigherOrder props={{ currentLayout, setCurrentLayout }} />
            <Component activeClass={currentLayout === "list" ? "" : "grid"} ViewComponent={currentLayout === "list" ? ListItem : GridItem} />
        </div>
    )
}

