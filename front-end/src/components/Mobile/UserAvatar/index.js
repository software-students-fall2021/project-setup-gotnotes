import React from "react";
import "./styles.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const UserAvatar = ({ props }) => {
  const {
    userAvatarUrl,
    size,
    showEditButton,
    handleEditAction,
    isEditActive,
  } = props;

  const classes = size === "large" ? "large" : size === "med" ? "med" : "small";

  return (
    <div className="user-avatar-container">
      <div className={`user-avatar ${classes}`}>
        <img
          src={userAvatarUrl ? userAvatarUrl : "/no-avatar.png"}
          alt="user-avatar"
          className="user-avatar-img"
        />
        {showEditButton && (
          <div
            className={
              isEditActive
                ? "edit-icon-container active"
                : "edit-icon-container"
            }
            onClick={() => handleEditAction()}
          >
            <EditOutlinedIcon fontSize="large" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAvatar;
