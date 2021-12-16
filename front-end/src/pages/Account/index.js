import React, { useContext, useState } from "react";
import UserAvatar from "../../components/Mobile/UserAvatar";

import {  useMutation } from "react-query";
import { GlobalContext } from "../../context/provider";
//prettier-ignore
import { postUserUpdates, uploadFile, logout} from "../../services/SearchTabServices/FetchCalls";

import "./styles.scss";
import { queryClient } from "../../index";

export const Account = () => {
  //prettier-ignore
  const {globalState: { userToken, currentUser }, set_error, logout_user} = useContext(GlobalContext);

  const [isEditActive, setIsEditActive] = useState(false);
  const [file, setFile] = useState("");

  //prettier-ignore
  const [{ 
    firstName, 
    lastName, 
    userAvatarUrl 
  }, setSubmitData] = useState({firstName: "",lastName: "",userAvatarUrl: "",});

  //prettier-ignore
  const updateUser = useMutation(postUserUpdates, {
    onSuccess: () => queryClient.invalidateQueries(["user", userToken]),
    onError: (error) => {
      console.log("error in useMutation ", error)
      set_error(error.message);
      queryClient.invalidateQueries(["user", userToken]);
    },
  });

  const uploadHandler = async (e) => {
    e.preventDefault();
    if (!file[0]) {
      set_error("Please first choose a file");
      return;
    }
    const data = await uploadFile(file[0], userToken);
    if (!data.uri) {
      console.log("error in upload Handler ", data);
      set_error(data.error.message);
      return;
    }
    setSubmitData((x) => ({ ...x, userAvatarUrl: data.uri }));
    set_error("Photo Uploaded Succesfully!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser.mutate({ firstName, lastName, userAvatarUrl, userToken });
  };

  const logoutHandler = async () => {
    const data = await logout();
    logout_user();
    console.log(data);
  };

  return (
    currentUser && (
      <div className="account-container">
        <div className="user-detail-wrapper">
          <div className="user-detail-container">
            <div className="user-avatar-wrapper">
              <UserAvatar
                props={{
                  userAvatarUrl: currentUser.userAvatarUrl,
                  size: "large",
                  showEditButton: true,
                  handleEditAction: () => setIsEditActive((x) => !x),
                  isEditActive,
                }}
              />
              <button className="logout" onClick={() => logoutHandler()}>
                LOGOUT
              </button>
            </div>
            <div className="user-detail-text-wrapper">
              <div className="user-detail-text"></div>
              <div className="user-detail-text"></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="account-interaction-data-wrapper"></div>

        {isEditActive && (
          <form className="file-form" onSubmit={(e) => uploadHandler(e)}>
            <label htmlFor="input">Choose a Photo</label>
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
              value={isEditActive ? firstName : currentUser.firstName}
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
              value={isEditActive ? lastName : currentUser.lastName}
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
