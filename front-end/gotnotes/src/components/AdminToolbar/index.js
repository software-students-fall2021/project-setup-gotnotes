import { React } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './styles.scss'

import { checkUserIsAdmin } from "../../services/AdminAuthService";

const mapState = ({user}) => ({
    currentUser: user.currentUser
})

const AdminToolbar = props => {
    const {currentUser} = useSelector(mapState);
    const isAdmin = checkUserIsAdmin(currentUser);

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