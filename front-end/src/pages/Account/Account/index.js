import React, { useContext, useEffect, useState } from "react";
import UserAvatar from "../../../components/Mobile/UserAvatar";

import { useQuery, useMutation } from "react-query";
import { GlobalContext } from "../../../context/provider";
//prettier-ignore
import {fetchUserData, postUserUpdates} from "../../../services/SearchTabServices/FetchCalls";

import "./styles.scss";
import { queryClient } from "../../../App";

export const Account = () => {
  //prettier-ignore
  const {globalState: { userToken },set_user,set_error} = useContext(GlobalContext);

  const [isEditActive, setIsEditActive] = useState(false);
  //prettier-ignore
  const [{ 
    firstName, 
    lastName, 
    userAvatarUrl 
  }, setSubmitData] = useState({firstName: "",lastName: "",userAvatarUrl: "",});

  //prettier-ignore
  const { data, error, isError, isLoading } = useQuery(["user", userToken], fetchUserData);
  //prettier-ignore
  const updateUser = useMutation(postUserUpdates, {
    onSuccess: () => queryClient.invalidateQueries(["user", userToken]),
    onError: (error) => {
      set_error(error.message);
      queryClient.invalidateQueries(["user", userToken]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser.mutate(firstName, lastName, userAvatarUrl);
  };

  //prettier-ignore
  useEffect(() => {
    if(data?._id){ 
      setSubmitData({
        firstName: data.firstName,
        lastName: data.lastName,
        userAvatarUrl: data.userAvatarUrl
      })
      set_user(data);
    }
  }, [data?.likes, data?.dislikes, data?.subscribed, data?.comments, data?.shared]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    set_error(error.message);
    return null;
  }

  return (
    data && (
      <div className="account-container">
        <UserAvatar
          props={{
            userAvatarUrl: data.userAvatarUrl,
            size: "large",
            showEditButton: true,
            handleEditAction: () => setIsEditActive((x) => !x),
            isEditActive,
          }}
        />
        <label htmlFor="input">First Name</label>
        <input
          className={isEditActive ? "account-input edit" : "account-input"}
          readOnly={!isEditActive}
          type="text"
          value={firstName}
          onChange={(e) =>
            setSubmitData((x) => ({ ...x, firstName: e.target.value }))
          }
        />
        <label htmlFor="input">Last Name</label>
        <input
          className={isEditActive ? "account-input edit" : "account-input"}
          readOnly={!isEditActive}
          type="text"
          value={lastName}
          onChange={(e) =>
            setSubmitData((x) => ({ ...x, lastName: e.target.value }))
          }
        />
        
      </div>
    )
  );
};
