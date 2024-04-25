"use client";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
const DashboardFilter = () => {
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
    <Autocomplete
      id="combo-box-demo"
      disablePortal
      value={value}
      onChange={(event, newValue) => {
        console.log("newValue", newValue);
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        console.log("newInputValue", newInputValue);
        setInputValue(newInputValue);
      }}
      options={dashboardItems.map((item) => item.title)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Filter" />}
    />
  );
};

export default DashboardFilter;
