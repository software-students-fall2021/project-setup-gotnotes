import React from 'react'

//components
import PageTitle from '../../components/Mobile/PageTitle'

//data
import { mockUniData, mockClassData } from '../../assets/mocks/mockData'

export const AddFile = ({ props }) => {
    const title = "Add File"


    const handleChange = () => {

    }

    return (
        <div className="page-container">
            <PageTitle props={{ title }} />

            <div className="add-file-container">
                <div className="file-form-container">

                    <div className="select-container">

                        <label className="select-label">Select University</label>

                        <select className="select" onChange={(e) => handleChange(e.target.value)}>

                            {mockUniData.map(({ itemName }) =>
                                <option value={itemName}>{itemName}</option>
                            )}

                        </select>
                    </div>

                    <div className="select-container">

                        <label className="select-label">Select Class</label>

                        <select className="select" onChange={(e) => handleChange(e.target.value)}>

                            {mockClassData.map(({ itemName }) =>
                                <option value={itemName}>{itemName}</option>
                            )}

                        </select>
                    </div>


                </div>
                <button className="add-file-submit">Add File</button>

            </div>


        </div>
    )
}
