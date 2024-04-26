"use client";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const DashboardFilter = (props) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  // console.log("props.filterValue", props.value);
  const dashboardItems = [
    {
      title: "New Orders",
      param: "new-order",
      path: "/dashboard",
    },
    {
      title: "Assigned Orders",
      param: "assigned-order",
      path: "/dashboard/assigned",
    },
    {
      title: "Picking in Progress",
      param: "picking-in-progress",
      path: "/dashboard/picking",
    },
    {
      title: "In Substitution",
      param: "in-substitution",
      path: "/dashboard/in-substitution",
    },
    {
      title: "Picking Completed",
      param: "picking-completed",
      path: "/dashboard/completed",
    },
    {
      title: "Waiting For Driver",
      param: "waiting-for-driver",
      path: "/dashboard/completed",
    },
    {
      title: "Picked up",
      param: "picked-up",
      path: "/dashboard/picked-up",
    },
    {
      title: "Out For Delivery",
      param: "out-for-delivery",
      path: "/dashboard/out-for-delivery",
    },
    {
      title: "Delivered",
      param: "delivered",
      path: "/dashboard/delivered",
    },
  ];


  const changeFilter = (e, v) => {
    const selectedFilter = dashboardItems.find((item) => item.title === v);
    params.set("filter", selectedFilter?.param || "");
    replace(`${pathname}?${params}`);
  };
  return (
    <Autocomplete
      id="combo-box-demo"
      disablePortal
      // value={props.filterValue}
      // value={value}
      // onChange={(event, newValue) => {
      //   console.log("newValue", newValue);
      //   setValue(newValue);
      //   setInputValue(newValue);
      // }}
      onChange={changeFilter}
      // inputValue={props.filterValue}
      // inputValue={inputValue}
      // onInputChange={props.setFilterValue}
      onInputChange={changeFilter}
      // onInputChange={(event, newInputValue) => {
      //   console.log("newInputValue", newInputValue);
      //   setInputValue(newInputValue);
      //   props.handleChange;
      // }}
      options={dashboardItems.map((item) => item.title)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Filter" />}
    />
  );
};

export default DashboardFilter;
