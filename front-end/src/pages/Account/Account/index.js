import React, { useContext, useEffect, useState } from "react";
import UserAvatar from "../../../components/Mobile/UserAvatar";

import { useQuery } from "react-query";
import { GlobalContext } from "../../../context/provider";
import { fetchUserData } from "../../../services/SearchTabServices/FetchCalls";

import "./styles.scss";

export const Account = () => {
  const {
    globalState: { userToken },
    set_user,
    set_error,
  } = useContext(GlobalContext);

  const [isEditActive, setIsEditActive] = useState(false);

  const { data, error, isError, isLoading } = useQuery(
    ["user", userToken],
    fetchUserData
  );

  useEffect(() => {
    data?._id && set_user(data);
  }, [
    data?.likes,
    data?.dislikes,
    data?.subscribed,
    data?.comments,
    data?.shared,
  ]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    set_error(error.message);
    return null;
  }
  console.log("here");

  return (
    data && (
      <div className="account-container">
        <UserAvatar
          props={{
            userAvatarUrl: data.userAvatarUrl,
            size: "large",
            showEditButton: true,
            handleEditAction: () => setIsEditActive(x => !x),
            isEditActive
          }}
        />
      </div>
    )
  );
};
