import React, { useEffect, useState } from "react";
import axios from "axios";
import UserAvatar from "../../../components/Mobile/UserAvatar";
import UserDataViewer from "../../../components/Mobile/UserDataViewer";
import "./styles.scss";
import { DonutLarge } from "@mui/icons-material";

export const Account = ({ props }) => {
  const userID = "cdies0@netlog.com";

  const [isEditActive, setIsEditActive] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect( () => {
    //post request with userID: userID to http://localhost/4000/account
    axios("http://localhost:4000/account", {
      method: "POST",
      data: {
        userID: userID
      }
    }).then(res => setUserData(res.data[0]))
    .catch(err => console.log(err))

    //console.log(result);
    //setUserData(result.data[0]);
    console.log("test");
    //setUserData(result.data)
  }, []);

  

  return userData ? (
    <div>
      Account Page
      {isEditActive && <div className="random"></div>}
      {!isEditActive && (
        <div className="accountList">
          <UserAvatar props={{ userAvatarUrl: userData.userAvatarUrl, size: "large", editActive: isEditActive }} />
          <UserDataViewer props={{ userData: userID, avatarSize: "large" }} />

          {userID}
        </div>)}
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
