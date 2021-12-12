import React, { useContext } from "react";
import "./default.scss";
import { Switch, Route, Redirect } from "react-router-dom";

//react-query
import { QueryClient, QueryClientProvider } from "react-query";

//layoutSelector
import { MobileLayoutSelector } from "./layouts/Mobile/MobileLayoutSelector";

//Components
import AdminToolbar from "./components/AdminToolbar";
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
import { Account } from "./pages/Account/Account";

import { WithAdminAuth, WithAuth } from "./AuthHOC";
import { GlobalContext } from "./context/provider";
import Error from "./components/Mobile/Modal/Error";

export const queryClient = new QueryClient();

export const App = () => {
  const { globalState } = useContext(GlobalContext);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {globalState.isAdmin && <AdminToolbar />}
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
      </QueryClientProvider>
    </div>
  );
};
