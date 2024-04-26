import { Box } from "@mui/material";

import DashboardFilter from "./partials/DashboardFilter";
const Layout = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1, px: 3 }}>
      <Box
        sx={{
          mb: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Dashboard</h3>
        <DashboardFilter />
      </Box>
      {children}
      {/* <Box sx={{ flexGrow: 1, px: 3 }}>{children}</Box> */}
    </Box>
  );
};

export default Layout;
