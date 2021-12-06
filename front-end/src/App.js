import "./default.scss";

import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";

import { currentUserID, mockUserData } from "./assets/mocks/mockData";

//Components
import AdminToolbar from "./components/AdminToolbar";
import BottomNav from "./components/Mobile/Navigations/BottomNav";

//Pages
import { Unis } from "./pages/Search/Unis";
import { Courses } from "./pages/Search/Courses";
import { Files } from "./pages/Search/Files";
import { FileDetails } from "./pages/Search/FileDetails";
// import ChatApp from "./pages/Chat/ChatMessages";
import ChatList from "./pages/Chat/ChatList";
import ChatMessages from "./pages/Chat/ChatMessages";
import { SignUp } from "./pages/Login/SignUp";
import { Login } from "./pages/Login/Login";
import { ResetPass } from "./pages/Login/ResetPass";

//import { ChatSearch } from "./pages/Chat/ChatSearch";

import { AddFile } from "./pages/AddFile";

import { Admin } from "./pages/Admin";

import { Account } from "./pages/Account/Account";
import { MobileLayoutSelector } from "./layouts/Mobile/MobileLayoutSelector";

function App() {
  return (
    <div className="App">
      <AdminToolbar
        props={{
          currentUser: mockUserData.filter(
            (user) => user.userID === currentUserID
          )[0],
        }}
      />
      <Switch>
        <Redirect exact from="/" to="unis" />

        <Route
          exact
          path="/unis"
          render={() => <MobileLayoutSelector Component={Unis} />}
        />

        <Route
          exact
          path="/unis/:uniName"
          render={() => <MobileLayoutSelector Component={Courses} />}
        />

        <Route
          exact
          path="/unis/:uniName/:courseName"
          render={() => <MobileLayoutSelector Component={Files} />}
        />

        <Route
          exact
          path="/unis/:uniName/:courseName/:fileName"
          render={() => <FileDetails />}
        />

        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/login" render={() => <Login />} />

        <Route path="/resetpass" render={() => <ResetPass />} />

        <Route path="/chat" render={() => <ChatMessages />} />

        <Route path="/addFile" render={() => <AddFile />} />

        <Route path="/account" render={() => <Account />} />

        <Route path="/admin" render={() => <Admin />} />
      </Switch>

      <BottomNav />
    </div>
  );
}

export default App;
