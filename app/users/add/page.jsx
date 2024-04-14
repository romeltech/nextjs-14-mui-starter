import { TextField } from "@mui/material";
// import { addUser } from "@/actions/UserActions";
import { Paper, Grid, Box, Fab } from "@mui/material";

const AddUserPage = ({}) => {
  return (
    <Grid sx={{ width: "100%" }}>
      <form>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </Grid>
  );
};

export default AddUserPage;
