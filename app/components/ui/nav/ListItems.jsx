import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import * as NextLink from "next/link";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

const mainNavArray = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Users",
    path: "/users",
    icon: <PeopleIcon />,
  },
];

export const mainListItems = (
  <React.Fragment>
    {mainNavArray.map((item, index) => (
      <ListItemButton component={NextLink} href={item.path} key={index}>
        <ListItemIcon>
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
    ))}
  </React.Fragment>
);

const secondaryNavArray = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Users",
    path: "/users",
    icon: <PeopleIcon />,
  },
];

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Settings
    </ListSubheader>
    {secondaryNavArray.map((item, index) => (
      <ListItemButton component={NextLink} href={item.path} key={index}>
        <ListItemIcon>
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
    ))}
  </React.Fragment>
);
