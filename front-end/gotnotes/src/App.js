import "./default.scss";

import { Switch, Route, Redirect } from "react-router-dom";
import React, { useState } from "react";

import { currentUserID, mockUserData } from "./assets/mocks/mockData";

//Components
import AdminToolbar from "./components/AdminToolbar";
import BottomNav from "./components/Mobile/BottomNav";

//Pages
import { Unis } from "./pages/Search/Unis";
import { Courses } from "./pages/Search/Courses";
import { Files } from "./pages/Search/Files";
import { FileDetails } from "./pages/Search/FileDetails";
import ChatApp from "./pages/Chat/ChatMessages";
import { SignUp } from "./pages/Login/SignUp";
import { Login } from "./pages/Login/Login";
import { ResetPass } from "./pages/Login/ResetPass";

import { ChatSearch } from "./pages/Chat/ChatSearch";

import { AddFile } from "./pages/AddFile";

import { Admin } from "./pages/Admin";

import { Account } from "./pages/Account/Account";
import { MobileLayoutSelector } from "./layouts/Mobile/MobileLayoutSelector";

function App() {
  //ANCHOR: for now we are using the mock data imported above to test our designs
  //let's focus on overall functionality of individual components,
  //before we tie everything together and code up the app logic

  const [crumbs, setCrumbs] = useState(["Unis", "Uni", "Class"]); //"Uni" needs to be the university that they choose

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
        <Route path="/chat" render={() => <ChatApp />} />
        <Route path="/login" render={() => <Login />} />

        <Route path="/resetpass" render={() => <ResetPass />} />

        <Route path="/chat" render={() => <ChatSearch />} />

        <Route path="/addFile" render={() => <AddFile />} />

        <Route path="/account" render={() => <Account />} />

        <Route path="/admin" render={() => <Admin />} />
      </Switch>

      <BottomNav />
      {/*
        <Breadcrumbs/>
        <Search/>
        
        */}
    </div>
  );
}

export default App;
