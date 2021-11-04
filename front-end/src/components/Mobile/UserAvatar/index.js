import React from 'react'
import './styles.scss'

//icons
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const UserAvatar = ({ props }) => {

    const { userAvatarUrl, size, editActive } = props;


    const classes = size === "large" ? "large" : (size === "med" ? "med" : "small");
    return (
        <div className="user-avatar-container">

            <div className={`user-avatar ${classes}`} >
                <img
                    src={userAvatarUrl}
                    alt="user-avatar"
                    className="user-avatar-img"
                />
            </div>
            {editActive && (
                    <div className="edit-icon-container">
                        <EditOutlinedIcon fontSize="large" />
                    </div>
                )}
        </div>
    )
}

export default UserAvatar
