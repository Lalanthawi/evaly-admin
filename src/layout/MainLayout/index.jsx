import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Box, Toolbar, useMediaQuery } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Drawer from "./Drawer";
import Header from "./Header";
import { openDrawer } from "store/reducers/menu";
import DashboardRoutes from "./dashboardRoutes";
// import Login from "pages/authentication/Login";

const MainLayout = () => {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down("xl"));
  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state) => state.menu);
  const [open, setOpen] = useState(drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  useEffect(() => {
    setOpen(!matchDownLG);
    dispatch(openDrawer({ drawerOpen: !matchDownLG }));
  }, [matchDownLG, dispatch]);

  useEffect(() => {
    if (open !== drawerOpen) setOpen(drawerOpen);
  }, [drawerOpen, dispatch, open]);

  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route
        path="/*"
        element={
          <Box sx={{ display: "flex", width: "100%" }}>
            <Header open={open} handleDrawerToggle={handleDrawerToggle} />
            <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
            <Box
              component="main"
              sx={{ width: 0, flexGrow: 1, p: { xs: 2, sm: 3 }}}
            >
              <Toolbar />
              <DashboardRoutes />
            </Box>
          </Box>
        }
      />
    </Routes>
  );
};

export default MainLayout;
