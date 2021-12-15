import React, { useContext, useEffect } from "react";
import "./default.scss";
import { Switch, Route, Redirect } from "react-router-dom";

//layoutSelector
import { MobileLayoutSelector } from "./layouts/Mobile/MobileLayoutSelector";

//Components
import BottomNav from "./components/Mobile/Navigations/BottomNav";
//Pages
import { Unis } from "./pages/Search/Unis";
import { Courses } from "./pages/Search/Courses";
import { Files } from "./pages/Search/Files";
import { FileDetails } from "./pages/Search/FileDetails";
import { ChatMessages } from "./pages/Chat/ChatMessages";
import { SignUp } from "./pages/Login/SignUp";
import { Login } from "./pages/Login/Login";
import { ResetPass } from "./pages/Login/ResetPass";
import { AddFile } from "./pages/AddFile";
import { Admin } from "./pages/Admin";
import { Account } from "./pages/Account";

//HOCs
import { WithAdminAuth, WithAuth } from "./AuthHOC";

//modals
import Error from "./components/Mobile/Modal/Error";

import { GlobalContext } from "./context/provider";

//react query
import { useQuery } from "react-query";
import { refresh } from "./services/SearchTabServices/FetchCalls";
import { queryClient } from "./index";

export const App = () => {
  const {
    globalState: { userToken, currentUser },
    login_user,
    logout_user,
  } = useContext(GlobalContext);

  const { data, error, isError, isLoading } = useQuery(
    "refresh_token",
    refresh,
    {
      refetchInterval: 1000 * 60 * 14, //refetch every fourteen minutes
      refetchOnWindowFocus: false,

      onSuccess: (data) => {
        login_user(data.token, data.user);
        console.log("success");
        queryClient.invalidateQueries(["user", data.token]);
      },
      onError: (data) => {
        console.log(data.error.toString());
        logout_user();
      },
    }
  );

  return (
    <div className="App">
      <Error />
      <Switch>
        <Redirect exact from="/" to="unis" />
        {/*prettier-ignore*/}
        <Route exact path={["/unis", "/unis/:uniId", "/unis/:uniId/:courseId"]}>
            <MobileLayoutSelector>
              <Route exact path="/unis" render={() => <Unis />} />
              <Route exact path="/unis/:uniId" render={() => <Courses />} />
              <Route exact path="/unis/:uniId/:courseId" render={() => <Files />} />
            </MobileLayoutSelector>
          </Route>
        {/*prettier-ignore*/}
        <Route path="/unis/:uniId/:courseId/:fileId" render={() => <FileDetails />}/>
        <Route
          path="/chat"
          render={() => (
            <WithAuth>
              <ChatMessages />
            </WithAuth>
          )}
        />
        <Route
          path="/addFile"
          render={() => (
            <WithAuth>
              <AddFile />
            </WithAuth>
          )}
        />
        <Route
          path="/account"
          render={() => (
            <WithAuth>
              <Account />
            </WithAuth>
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <Admin />
            </WithAdminAuth>
          )}
        />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/resetpass" render={() => <ResetPass />} />
      </Switch>
      <BottomNav />
    </div>
  );
};
