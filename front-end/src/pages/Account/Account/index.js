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
  const {globalState: { userToken }, set_user, set_error} = useContext(GlobalContext);

  const [isEditActive, setIsEditActive] = useState(false);
  const [file, setFile] = useState("");
  //prettier-ignore
  const [{ 
    firstName, 
    lastName, 
    userAvatarUrl 
  }, setSubmitData] = useState({firstName: "",lastName: "",userAvatarUrl: "",});

  const { data, isError, isLoading } = useQuery(
    ["user", userToken],
    fetchUserData,
    {
      onSuccess: (data) => {
        set_user(data);
      },
      onError: (err) => {
        set_error(err.err);
      },
    }
  );

  //prettier-ignore
  const updateUser = useMutation(postUserUpdates, {
    onSuccess: () => queryClient.invalidateQueries(["user", userToken]),
    onError: (error) => {
      set_error(error.error);
      queryClient.invalidateQueries(["user", userToken]);
    },
  });

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

  return (
    data &&
    !isError && (
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
          <form className="file-form" onSubmit={(e) => uploadHandler(e)}>
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
        <div className="user-info">
          <div>
            <label htmlFor="input">First Name:</label>
            <input
              className={isEditActive ? "account-input edit" : "account-input"}
              readOnly={!isEditActive}
              type="text"
              value={data.firstName}
              onChange={(e) =>
                setSubmitData((x) => ({ ...x, firstName: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="input">Last Name:</label>
            <input
              className={isEditActive ? "account-input edit" : "account-input"}
              readOnly={!isEditActive}
              type="text"
              value={data.lastName}
              onChange={(e) =>
                setSubmitData((x) => ({ ...x, lastName: e.target.value }))
              }
            />
          </div>
        </div>
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
