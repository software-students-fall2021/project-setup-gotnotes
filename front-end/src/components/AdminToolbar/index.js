import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const AdminToolbar = () => {
  
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
