import { Box, Card, CardContent } from "@mui/material";
import UserForm from "../partials/UserForm";
const AddUserPage = ({}) => {
  return (
    <Box sx={{ flexGrow: 1, px: 3 }}>
      <h3>Add User</h3>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <UserForm />
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddUserPage;
