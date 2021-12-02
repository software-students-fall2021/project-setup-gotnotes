import React from "react";
import { useHistory } from "react-router";
import "./styles.scss";

//icons
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

/*
    editActive will only work with large sizes, default size small
*/

const UserAvatar = ({ props }) => {
  const { userAvatarUrl, size, showEditButton, handleEditAction} = props;

  const classes = size === "large" ? "large" : size === "med" ? "med" : "small";

  //const history = useHistory();

  return (
    <div className="user-avatar-container">
      <div className={`user-avatar ${classes}`}>
        <img
          src={userAvatarUrl}
          alt="user-avatar"
          className="user-avatar-img"
        />
      </div>
      {showEditButton && (
        <div
          className="edit-icon-container"
          onClick={() => handleEditAction()}
        >
          <EditOutlinedIcon fontSize="large" />
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
