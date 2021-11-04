import React from 'react'

import './styles.scss'

//components
import UserAvatar from '../UserAvatar';


const UserDataViewer = ({ props }) => {

    const { fileSharedBy } = props;
    const { userID, userAvatarUrl, username } = fileSharedBy[0];

    console.log(fileSharedBy)

    return (
        <div className="user-data-viewer-container">
            <UserAvatar props={{ userAvatarUrl }} />
            <span className="username">{username}</span>
        </div>
    )
}

export default UserDataViewer
