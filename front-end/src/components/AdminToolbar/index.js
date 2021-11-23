import React from "react";

import { Link } from "react-router-dom";
import "./styles.scss";

import { checkUserIsAdmin } from "../../services/AdminAuthService";

const AdminToolbar = ({ props }) => {
  const { currentUser } = props;

  const isAdmin = checkUserIsAdmin(currentUser);
  console.log(isAdmin);

  if (!isAdmin) return <></>;
  return (
    <div className="adminToolbar">
      <ul>
        <li>
          <Link to="/admin">Admin Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminToolbar;
