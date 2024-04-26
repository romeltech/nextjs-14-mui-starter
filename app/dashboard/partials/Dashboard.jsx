"use client"
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
import { fetchOrders } from "../../../actions/OrderActions";
import * as NextLink from "next/link";
import { useState } from "react";

const Dashboard = ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
//   const [orders, setOrders] = useState([]);
  const { count, orders } = fetchOrders(q, page);
  const [filterValue, setFilterValue] = useState(null);
  return (
    <TableContainer component={Paper}>
      <TableContainer sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            {/* <TableCell>Fullname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell> */}
          </TableRow>
        </TableHead>
        {orders && (
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row.order_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.order_id}</TableCell>
                {/* <TableCell component="th" scope="row">
                  {row.fullname}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell align="right">
                  <IconButton
                    component={NextLink}
                    href={`/users/${row.id}`}
                    color="primary"
                    size="small"
                  >
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton color="primary" size="small">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        )}
      </TableContainer>
    </TableContainer>
  );
};

export default Dashboard;
