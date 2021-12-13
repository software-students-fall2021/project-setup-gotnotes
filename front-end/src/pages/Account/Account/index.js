import React, { useContext, useEffect, useState } from "react";
import UserAvatar from "../../../components/Mobile/UserAvatar";

import { useQuery, useMutation } from "react-query";
import { GlobalContext } from "../../../context/provider";
//prettier-ignore
import {fetchUserData, postUserUpdates, uploadFile} from "../../../services/SearchTabServices/FetchCalls";

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
      set_error(error.error);
      queryClient.invalidateQueries(["user", userToken]);
    },
  });
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

  const [file, setFile] = useState("");

  const uploadHandler = async (e) => {
    e.preventDefault();
    const uri = await uploadFile(file[0], userToken);
    setSubmitData((x) => ({ ...x, userAvatarUrl: uri }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser.mutate({ firstName, lastName, userAvatarUrl, userToken });
  };

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
        {isEditActive && (
          <form onSubmit={(e) => uploadHandler(e)}>
            <label htmlFor="input">Photo URL</label>
            <input type="text" readOnly value={userAvatarUrl} />
            <label htmlFor="input">Choose Photo File</label>
            <input
              className="file"
              type="file"
              name="file"
              onChange={(e) => setFile(e.target.files)}
            />

            <label className="file-output">
              {file
                ? file[0]?.name
                  ? file[0].name
                  : "No File Chosen"
                : "No File Chosen"}
            </label>
            <input className="upload-btn" type="submit" value="Upload!" />
          </form>
        )}
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
        {isEditActive && (
          <input
            type="submit"
            value="Submit Changes"
            onClick={(e) => handleSubmit(e)}
          />
        )}
      </div>
    )
  );
};
