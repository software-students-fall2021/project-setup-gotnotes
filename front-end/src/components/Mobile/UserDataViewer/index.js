import React from 'react'

const UserDataViewer = ({ props }) => {

    const { fileSharedBy } = props;
    const { userID, userAvatarUrl, username } = fileSharedBy[0];

    console.log(fileSharedBy)

    return (
        <div>
            userID: {userID}
            userAvatarUrl: {userAvatarUrl}
            username: {username}
        </div>
    )
}

export default UserDataViewer
