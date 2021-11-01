import React from 'react'

const PageTitle = ({ props }) => {
    const { title } = props;
    return (
        <div className="page-title-container">
            <div className="back-button"></div>
            <div className="page-title">
                {title}
            </div>
            <div className="page-options"></div>
        </div>
    )
}

export default PageTitle
