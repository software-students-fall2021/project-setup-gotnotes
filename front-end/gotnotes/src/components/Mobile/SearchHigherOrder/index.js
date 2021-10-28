import React from 'react'

import './styles.scss'


import { Search } from './Search'
import { Sort } from "./Sort";
import { GridListToggle } from './GridListToggle'


export const SearchHigherOrder = ({ props }) => {

  const { currentLayout, setCurrentLayout, items, setItems, currentPage } = props;

  return (
    <div className="search-higher-order-container">
      <div className="search-container">
        <Search />
      </div>
      <div className="sort-container">
        <Sort props={{ items, setItems, currentPage }} />
      </div>
      <div className="grid-list-toggle-container">
        <GridListToggle props={{ currentLayout, setCurrentLayout }} />
      </div>

    </div>
  )
}
