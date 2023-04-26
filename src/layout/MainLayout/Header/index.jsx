import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import AppBarStyled from "./AppBarStyled";
import HeaderContent from "./HeaderContent";
import React from "react";
import { useLocation } from "react-router-dom";

const headerHeading = {
  color: "#23272E",
  fontSize: 24,
  fontWeight: 700,
};

const Header = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));
  const location = useLocation();

  const headerTitle = location?.pathname.replace(/[/|-]/g, " ");

  function capitalizeFirstLetter(string) {
    const words = string.split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  }

  const mainHeader = (
    <Toolbar>
      {!open && (
        <IconButton
          onClick={handleDrawerToggle}
          style={{ backgroundColor: "#f3f4f8" }}
          size="small"
        >
          <img
            src="/assets/menu-icon.svg"
            alt="menu-icon"
            style={{ cursor: "pointer", transform: "rotate(180deg)" }}
          />
        </IconButton>
      )}
      <Typography
        variant="h3"
        style={{ ...headerHeading, paddingLeft: !open ? 10 : 0, width: 531 }}
        className="customized-responsive-header-title"
      >
        {capitalizeFirstLetter(headerTitle)}
      </Typography>
      <HeaderContent />
    </Toolbar>
  );

  const appBar = {
    position: "fixed",
    color: "inherit",
    elevation: 0,
  };

  return (
    <>
      {!matchDownMD ? (
        <AppBarStyled open={open} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
};

export default Header;
