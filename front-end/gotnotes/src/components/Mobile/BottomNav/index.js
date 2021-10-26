import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
=======

import './styles.scss'

//icons
>>>>>>> eef66d91805a20058dd9530c1bdeb0106cf61f25
import SearchIcon from '@mui/icons-material/Search';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
//comment

const tabs = [{
<<<<<<< HEAD
    route: "/search/unis",
    icon: SearchIcon,
    label: "Search"
},{
    route: "/chat",
    icon: ChatIcon,
    label: "Chat"
},{
    route: "/addFile",
    icon: AddIcon,
    label: "AddFile"
},{
    route: "/account",
    icon: PersonIcon,
    label: "Account"
=======
  route: "/unis",
  icon: <SearchIcon fontSize="large"/>,
  label: "Unis"
}, {
  route: "/chat",
  icon: <ChatOutlinedIcon fontSize="large"/>,
  label: "Chat"
}, {
  route: "/addFile",
  icon: <AddCircleOutlineOutlinedIcon fontSize="large"/>,
  label: "AddFile"
}, {
  route: "/account",
  icon: <PersonOutlineOutlinedIcon fontSize="large"/>,
  label: "Account"
>>>>>>> eef66d91805a20058dd9530c1bdeb0106cf61f25
}]

const BottomNav = (props) => {

  return (
    <div>
      
      <nav className="navbar  fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav p-0" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row w-100" >
            {
              tabs.map((tab, index) => (
                <NavItem className="border w-25" key={`tab-${index}`} >
                  <NavLink to={tab.route} className="nav-link bottom-nav-link w-100 py-3 " activeClassName="active">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <div className="text-center">{tab.icon}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
<<<<<<< HEAD
    <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    {/*<FontAwesomeIcon size="lg" icon={tab.icon}/>*/}
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
        </div>
      </Nav>
    </nav>
=======
>>>>>>> eef66d91805a20058dd9530c1bdeb0106cf61f25
    </div>
  )
};

export default BottomNav;