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
  Button,
  //   Autocomplete,
  //   TextField,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useState } from "react";
const Layout = ({ children }) => {
  const dashboardItems = [
    {
      title: "New Orders",
      path: "/dashboard",
    },
    {
      title: "Assigned Orders",
      path: "/dashboard/assigned",
    },
    {
      title: "Picking in Progress",
      path: "/dashboard/picking",
    },
    {
      title: "In Substitution",
      path: "/dashboard/in-substitution",
    },
    {
      title: "Picking Completed",
      path: "/dashboard/completed",
    },
    {
      title: "Waiting For Driver",
      path: "/dashboard/completed",
    },
    {
      title: "Picked up",
      path: "/dashboard/picked-up",
    },
    {
      title: "Out For Delivery",
      path: "/dashboard/out-for-delivery",
    },
    {
      title: "Delivered",
      path: "/dashboard/delivered",
    },
  ];

  const [value, setValue] = useState(dashboardItems[0].title);
  const [inputValue, setInputValue] = useState("");
  return (
    <Box sx={{ flexGrow: 1, px: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Dashboard</h3>
        <Autocomplete
          id="combo-box-demo"
          disablePortal
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={dashboardItems.map((item) => item.title)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Filter" />}
        />
      </Box>
      {children}
    </Box>
  );
};

export default Layout;
