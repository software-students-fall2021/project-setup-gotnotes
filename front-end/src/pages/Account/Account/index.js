import React, { useEffect, useState } from "react";
import axios from "axios";
import UserAvatar from "../../../components/Mobile/UserAvatar";
import UserDataViewer from "../../../components/Mobile/UserDataViewer";
import "./styles.scss";

const userData = {
  //put outside the function
  userID: "cdies0@netlog.com",
  username: "cdies0",
  isAdmin: true,
  userAvatarUrl: "http://dummyimage.com/210x100.png/dddddd/000000",
  firstName: "Celia",
  lastName: "Dies",
  userSubscribed: [{ courseID: 11 }],
  userLiked: [{ fileID: 54 }, { fileID: 67 }, { fileID: 38 }, { fileID: 17 }],
  userDisliked: [{ fileID: 12 }, { fileID: 66 }, { fileID: 24 }],
};

const editUserData = () => {
  //dont need this, need the function instead, say true/false
  console.log("submit the edits to the server");
  return true;
};

export const Account = ({ props }) => {
  const userID = "cdies0@netlog.com";

  const [isEditActive, setIsEditActive] = useState(null);
  //const [userData, setUserData] = useState(null);

  const [userInputState, setUserInputState] = useState({
    firstName: "",
    lastName: "",
  });

  // useEffect(() => {
  //   //post request with userID: userID to http://localhost/4000/account
  //   axios("http://localhost:4000/account", {
  //     method: "POST",
  //     data: {
  //       userID: userID,
  //     },
  //   })
  //     .then((res) => setUserData(res.data[0]))
  //     .catch((err) => console.log(err));

  //   //console.log(result);
  //   //setUserData(result.data[0]);
  //   console.log("userData: ", userData);
  //   //setUserData(result.data)
  // }, []);

  return userData ? (
    <div>
      <div className="user-avatar-component-container">
        <UserAvatar
          props={{
            userAvatarUrl: userData.userAvatarUrl,
            size: "large",
            showEditButton: false,
          }}
        />
      </div>
      {isEditActive ? (
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
            <div className="first-name-box">
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
            </div>

            <div className="last-name-box">
              <input
                type="text"
                placeholder={userData.lastName}
                value={userInputState.lastName}
                onChange={(e) =>
                  setUserInputState({
                    ...userInputState,
                    lastName: e.target.value,
                  })
                }
              />

              <input type="submit" value="Submit Edits" />
            </div>

            <div className="email-box">
              <input
                type="text"
                placeholder={userData.username}
                value={userInputState.username}
                onChange={(e) =>
                  setUserInputState({
                    ...userInputState,
                    username: e.target.value,
                  })
                }
              />

              <input type="submit" value="Submit Edits" />
            </div>
            <div className="user-name-box">
              <input
                type="text"
                placeholder={userData.userID}
                value={userInputState.userID}
                onChange={(e) =>
                  setUserInputState({
                    ...userInputState,
                    userID: e.target.value,
                  })
                }
              />

              <input type="submit" value="Submit Edits" />
            </div>
          </form>

          <div classname="submit-button">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editUserData(userInputState);
                setIsEditActive(false);
              }}
            >
              <view>{console.log("done button: ", isEditActive)}</view>
              <input type="submit" value="Done" />
            </form>
          </div>
        </div>
      ) : (
        <div className="account-list">
          <div classname="display-user-data">
            <h4>{userData.firstName}</h4>
            <h4>{userData.lastName}</h4>
            <h4>{userData.username}</h4>
            <h4>{userData.userID}</h4>
            <h4>{userData.userLiked.fileID}</h4>
            
          </div>

          <div classname="submit-button">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsEditActive(true);
              }}
            >
              <input type="submit" value="Edit" />
            </form>
          </div>
          <div classname="user-likes-container">
              
          </div>
          <view>{console.log("userData: ", userData.firstName)}</view>
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
