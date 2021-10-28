import React from 'react'

import './styles.scss'

//data
import { uniSortParams, courseSortParams, fileSortParams } from './../../../../assets/constants/sortParams'

//service
import { sortResults } from '../../../../services/SortService'

export const Sort = ({ props }) => {

    const { items, setItems, currentPage } = props;

    const handleChange = (e) => {
        setItems(sortResults(e, items))
    }


    return (
        <div className="sort">

            <select className="sort-options" onChange={(e) => handleChange(e.target.value)}>

                {currentPage === "unis" && uniSortParams.map(values =>
                    <option value={values.value}>{values.label}</option>
                )}
                {currentPage === "courses" && courseSortParams.map(values =>
                    <option value={values.value}>{values.label}</option>
                )}
                {currentPage === "files" && fileSortParams.map(values =>
                    <option value={values.value}>{values.label}</option>
                )}

            </select>

        </div>
    )
}
