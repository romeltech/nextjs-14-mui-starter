import { Box, Card, CardContent } from "@mui/material";
import UserForm from "../partials/UserForm";
import { fetchUser } from "../../../actions/UserActions";
const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <Box sx={{ flexGrow: 1, px: 3 }}>
      <h3>Edit User</h3>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          {/* <UserForm data={JSON.stringify({ data: user, type: "edit" })} /> */}
          <UserForm user={JSON.stringify(user)} type={"edit"} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default SingleUserPage;
