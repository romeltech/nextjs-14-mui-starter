import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Fab,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { fetchUsers } from "../../actions/UserActions";
import * as NextLink from "next/link";

const Dashboard = ({}) => {
  return (
    <Box sx={{ flexGrow: 1, px: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <h3>Dashboard</h3>
      </Box>
    </Box>
  );
};

export default Dashboard;
