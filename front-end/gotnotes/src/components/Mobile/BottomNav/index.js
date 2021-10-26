import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//icons
import SearchIcon from '@mui/icons-material/Search';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
//comment

const tabs = [{
    route: "/unis",
    icon: SearchIcon,
    label: "Unis"
},{
    route: "/chat",
    icon: ChatOutlinedIcon,
    label: "Chat"
},{
    route: "/addFile",
    icon: AddCircleOutlineOutlinedIcon,
    label: "AddFile"
},{
    route: "/account",
    icon: PersonOutlineOutlinedIcon,
    label: "Account"
}]

const BottomNav = (props) => {

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
        <div className="container-fluid">
            <a className="navbar-brand" href="/search/unis">Brand</a>
            <Nav className="ml-auto">
              <NavItem>
                <NavLink to="/chat" className="nav-link">
                  Chat
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/addFile" className="nav-link">
                  AddFile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/account" className="nav-link">
                  Account
                </NavLink>
              </NavItem>
            </Nav>
        </div>
      </nav>
    <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon}/>
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
        </div>
      </Nav>
    </nav>
    </div>
  )
};

export default BottomNav;