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

const queryClient = new QueryClient();

export const App = () => {
  const { globalState } = useContext(GlobalContext);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {globalState.isAdmin && <AdminToolbar />}

        <Switch>
          <Redirect exact from="/" to="unis" />

          {/*prettier-ignore*/}
          <Route exact path={["/unis", "/unis/:uniName", "/unis/:uniName/:courseName"]}>
            <MobileLayoutSelector>
              <Route path="/unis" element={<Unis />} />
              <Route path="/unis/:uniName" element={<Courses />} />
              <Route path="/unis/:uniName/:courseName" element={<Files />} />
            </MobileLayoutSelector>
          </Route>

          {/*prettier-ignore*/}
          <Route path="/unis/:uniName/:courseName/:fileName" element={<FileDetails />}/>

          <Route exact path={["/addFile", "/account", "/chat", "/admin"]}>
            <WithAuth>
              <Route path="/chat" element={<ChatMessages />} />
              <Route path="/addFile" element={<AddFile />} />
              <Route path="/account" element={<Account />} />
            </WithAuth>
            <WithAdminAuth>
              <Route path="/admin" element={<Admin />} />
            </WithAdminAuth>
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpass" element={<ResetPass />} />
        </Switch>
        <BottomNav />
      </QueryClientProvider>
    </div>
  );
};

