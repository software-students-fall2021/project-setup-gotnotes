import React from 'react'

//components
import PageTitle from '../../components/Mobile/PageTitle'

export const AddFile = ({ props }) => {
    const title = "Add File"
    return (
        <div className="page-container">
            <PageTitle title={title} />

            <div className="add-file-container">
                <div className="file-form-container">

                </div>
                <button>Add File</button>

            </div>


        </div>
    )
}
