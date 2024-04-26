"use client";
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
import { fetchOrders } from "../../actions/OrderActions";
import * as NextLink from "next/link";
import DashboardFilter from "./partials/DashboardFilter";
import { use, useEffect } from "react";

const Dashboard = ({ searchParams }) => {
  // params
  const q = searchParams?.q || "";
  const filter = searchParams?.filter || "";
  const page = searchParams?.page || 1;
  // console.log("filter", filter);

  useEffect(() => {
    console.log("searchParams", searchParams);
  }, [searchParams]);

  // get orders
  async function getOrders(q, page) {
    return await fetchOrders(q, page);
  }

  const { count, orders } = getOrders(q, page);
  return (
    <Box sx={{ flexGrow: 1, px: 3 }}>
      <Box sx={{ flexGrow: 1, mb: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* <h3>Dashboard {filterValue && ` - ${filterValue}`}</h3> */}
          <h3>Dashboard</h3>
          <DashboardFilter
          // filterValue={filterValue}
          // setFilterValue={setFilterValue}
          />
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
