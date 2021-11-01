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
