import React from 'react'

import { useHistory } from 'react-router-dom'


//styles
import './styles.scss'

const PageTitle = ({ props }) => {
    const { title, options, back } = props;

    const history = useHistory();


    return (
        <div className="page-title-container">
            {back ? (
                <div className="back-button" onClick={() => history.goBack()}>
                    <span className="back-arrow">{`${"<"}`}</span>
                </div>
            ) : (
                <div className="back-button">

                </div>
            )}
            <div className="page-title">
                <span className="title-text">
                    {title}
                </span>

            </div>
            {options && (

                <div className="page-options">

                </div>

            )}

        </div>
    )
}

export default PageTitle
