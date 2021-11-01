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
<<<<<<< HEAD
    
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
=======
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Random"
          src="front-end/gotnotes/src/assets/randomUser.png"
          sx={{ width: 56, height: 56 }}
        />
      </Stack>
      <Stack spacing={1}>
        <Item>Change Profile Pic</Item>
        <Item>Uploaded Files</Item>
        <Item>Notifiactions</Item>
        <Item>Settings</Item>
        <Item>Delete Account</Item>
      </Stack>
    </div>
  );
};
>>>>>>> f2f006bc93569f4d3f1874f966d47718796707b0
