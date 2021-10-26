import { React } from "react";

import { Link } from "react-router-dom";
import './styles.scss'

import { checkUserIsAdmin } from "../../services/AdminAuthService";


const AdminToolbar = props => {

    const isAdmin = checkUserIsAdmin(props.currentUser);

    if(!isAdmin) return null;
    return (
        <div className="adminToolbar">
            <ul>
                <li>
                    <Link to="/admin">
                        Admin Dashboard
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default AdminToolbar;