import React from "react";
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

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
      <Stack spacing={2}>
        <Button variant="outlined" size="large" onClick={() => { console.log('Change PFP'); }}>Change Profile Pic</Button>
        <Button variant="outlined" size="large" onClick={() => { console.log('Upload Files'); }}>Uploaded Files</Button>
        <Button variant="outlined" size="large" onClick={() => { console.log('Notifications'); }}>Notifiactions</Button>
        <Button variant="outlined" size="large" onClick={() => { console.log('Settings'); }}>Settings</Button>
        <Button variant="outlined" size="large" onClick={() => { console.log('Delete Account'); }}>Delete Account</Button>
      </Stack>
    </div>
  );
};