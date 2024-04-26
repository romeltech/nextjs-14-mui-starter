"use client";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const DashboardFilter = (props) => {
  console.log("props", props);
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

  // const [value, setValue] = useState(dashboardItems[0].title);
  // const [inputValue, setInputValue] = useState("");

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  const changeFilter = async (e) => {
    console.log("changeFilter", e.target.value);
    setValue(e.target.value);
    setInputValue(e.target.value);
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
      // onChange={props.handleChange}
      // inputValue={props.filterValue}
      // inputValue={inputValue}
      onInputChange={props.setFilterValue}
      // onInputChange={changeFilter}
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
