import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Account = () => {
    return (
        <div>
            <div>"Your Account"</div>
            <p>Account</p>
            <nav>
                <Link to= "/">PictureGrid</Link>
                <Link to= "/changeProfilePicture">ChangeProfilePicture</Link>
                <Link to= "/upload">Upload</Link>
                <Link to= "/notifications">Notifications</Link>
                <Link to= "/settings">Settings</Link>
                <Link to= "/deleteAccoutn">DeleteAccount</Link>
            </nav>
        </div>

    )
}