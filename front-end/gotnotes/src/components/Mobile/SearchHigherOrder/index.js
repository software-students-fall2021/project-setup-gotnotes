import React from 'react'

import './styles.scss'


import { Search } from './Search'
import { Sort } from "./Sort";
import { GridListToggle } from './GridListToggle'


export const SearchHigherOrder = ({ props }) => {

  const { currentLayout, setCurrentLayout } = props;

  return (
    <div>
      <Search />
      <Sort />
      <GridListToggle props={{ currentLayout, setCurrentLayout }} />
    </div>
  )
}
