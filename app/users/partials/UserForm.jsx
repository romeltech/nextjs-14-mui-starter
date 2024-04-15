"use client";

import { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Stack,
  FormControl,
  InputLabel,
} from "@mui/material";
import Submit from "../../components/ui/buttons/Submit";
import { addUser, updateUser } from "../../../actions/UserActions";

const UserForm = ({ user, type }) => {
  // form type
  const formType = type ? type : "add";

  // user data
  const [userData, setUserData] = useState(user ? JSON.parse(user) : null);

  // roles
  const rolesList = ["admin", "normal"];
  const [role, setRole] = useState(userData?.role || "normal");

  return (
    <form action={formType === "add" ? addUser : updateUser}>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        <input type="hidden" name="id" value={userData?._id?.toString()} />
        <TextField
          sx={{ width: "100%" }}
          id="fullname"
          label="Fullname"
          name="fullname"
          variant="outlined"
          value={userData?.fullname}
          onChange={(e) => {
            setUserData((prev) => ({ ...prev, fullname: e.target.value }));
          }}
        />
        <TextField
          sx={{ width: "100%" }}
          id="email"
          label="Email"
          name="email"
          variant="outlined"
          value={userData?.email}
          onChange={(e) => {
            setUserData((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <FormControl sx={{ m: 0, width: "100%" }}>
          <InputLabel id="role">Role</InputLabel>
          <Select
            labelId="role"
            id="role"
            sx={{ width: "100%" }}
            name="role"
            value={role}
            label="Role"
            onChange={(e) => {
              setRole(e.target.value);
              setUserData((prev) => ({ ...prev, role: e.target.value }));
            }}
          >
            {rolesList.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          sx={{ width: "100%" }}
          id="username"
          label="Username"
          name="username"
          variant="outlined"
          value={userData?.username}
          onChange={(e) => {
            setUserData((prev) => ({ ...prev, username: e.target.value }));
          }}
        />
        {formType === "add" && (
          <TextField
            sx={{ width: "100%" }}
            id="passowrd"
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            value={userData?.password}
          />
        )}
        {formType === "add" && (
          <TextField
            sx={{ width: "100%" }}
            id="confirm-passowrd"
            label="Confirm Password"
            name="confirm_password"
            variant="outlined"
            type="password"
            value={userData?.confirm_password}
          />
        )}
        <Submit />
      </Stack>
    </form>
  );
};

export default UserForm;
