import React, { useEffect, useState } from "react";
import axios from "axios";
import UserAvatar from "../../../components/Mobile/UserAvatar";
import UserDataViewer from "../../../components/Mobile/UserDataViewer";
import "./styles.scss";
import { DonutLarge } from "@mui/icons-material";

const editUserData = () => {
  console.log("submit the edits to the server");
  return true;
};

export const Account = ({ props }) => {
  const userID = "cdies0@netlog.com";

  const [isEditActive, setIsEditActive] = useState(null);
  const [userData, setUserData] = useState(null);

  const [userInputState, setUserInputState] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    //post request with userID: userID to http://localhost/4000/account
    axios("http://localhost:4000/account", {
      method: "POST",
      data: {
        userID: userID,
      },
    })
      .then((res) => setUserData(res.data[0]))
      .catch((err) => console.log(err));

    //console.log(result);
    //setUserData(result.data[0]);
    console.log("test");
    //setUserData(result.data)
  }, []);

  return userData ? (
    <div>
      Account Page
      {isEditActive && (
        <div className="edit-page">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editUserData(userInputState);
              setUserInputState({
                firstName: "",
                lastName: "",
              });
            }}
          >
            <input
              type="text"
              placeholder={userData.firstName}
              value={userInputState.firstName}
              onChange={(e) =>
                setUserInputState({
                  ...userInputState,
                  firstName: e.target.value,
                })
              }
            />

            <input type="submit" value="Submit Edits" />
          </form>

          <div classname="submit-button">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editUserData(userInputState);
                setIsEditActive(false);
              }}>
              <input type="submit" value="Done" />
            </form>
          </div>
        </div>
      )}
      {!isEditActive && (
        <div className="account-list">
          <div className="user-avatar-component-container">
            <UserAvatar
              props={{
                userAvatarUrl: userData.userAvatarUrl,
                size: "large",
                editActive: isEditActive,
              }}
            />
          </div>

          <div className="user-data-viewer-container">
            <UserDataViewer props={{ userData: userID, avatarSize: "large" }} />
          </div>

          <div classname="submit-button">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editUserData(userInputState);
                setIsEditActive(true);
              }}>
              <input type="submit" value="Edit" />
            </form>
          </div>
        </div>
      )}
      {/*
            You might wanna have a look at the UserAvatar component that I wrote a while back
            skeleton of account page:
            <UserAvatar />
            <UserName />
            <UserLikes />
            */}
    </div>
  ) : (
    ""
  );
};
