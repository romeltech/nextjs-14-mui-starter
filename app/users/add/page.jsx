"use client";

import { useState } from "react";
import {
  TextField,
  Box,
  Select,
  MenuItem,
  Card,
  CardContent,
  Stack,
  FormControl,
  InputLabel,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Submit from "../../components/ui/buttons/Submit";
import { addUser } from "../../../actions/UserActions";

const AddUserPage = ({}) => {
  const [loadingSave, setLoadingSave] = useState(false);
  const rolesList = ["admin", "normal"];
  const [role, setRole] = useState("normal");
  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1, px: 3 }}>
      <h3>Add User</h3>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <form action={addUser}>
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              useFlexGap
              flexWrap="wrap"
            >
              <TextField
                sx={{ width: "100%" }}
                id="fullname"
                label="Fullname"
                name="fullname"
                variant="outlined"
              />
              <TextField
                sx={{ width: "100%" }}
                id="email"
                label="Email"
                name="email"
                variant="outlined"
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
                  onChange={handleChangeRole}
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
              />
              <TextField
                sx={{ width: "100%" }}
                id="passowrd"
                label="Password"
                name="password"
                variant="outlined"
                type="password"
              />
              <TextField
                sx={{ width: "100%" }}
                id="confirm-passowrd"
                label="Confirm Password"
                name="confirm_password"
                variant="outlined"
                type="password"
              />
              {/* <LoadingButton
                loading={loadingSave}
                size="large"
                type="submit"
                variant="contained"
                color="primary"
              >
                Save
              </LoadingButton> */}
              <Submit />
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddUserPage;
