import React from 'react'
import './styles.scss'

//components

//icons

const CommentViewer = ({ props }) => {

    const { fileComments } = props;
    return (
        <div className="comment-viewer-container">
            Comment Viewer
        </div>
    )
}

export default CommentViewer
