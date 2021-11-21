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

  useEffect(async () => {
    //post request with userID: userID to http://localhost/4000/account
    const result = await axios("http://localhost:4000/account", {
      method: "POST",
      body: {
        userID: userID
      }
    });

    console.log(result.data);
    setUserData(result.data);
    console.log("test");
    //setUserData(result.data)
  }, []);

  const {
    //userID,
    userAvatarUrl,
    username
  } = userID;

  //should not be !
  return !userData ? (
    <div>
      Account Page
      {isEditActive && <div className="random"></div>}
      {!isEditActive && (
        <div className="accountList">
          <UserAvatar props={{ userAvatarUrl, size: "large", editActive: isEditActive }} />
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
