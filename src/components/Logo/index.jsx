import React from "react";
import { Link } from "react-router-dom";
import { ButtonBase } from "@mui/material";
import config from "../../config";

function LogoSection({ sx, to, color }) {
  return (
    <ButtonBase
      disableRipple
      component={Link}
      to={!to ? config.defaultPath : to}
      sx={sx}
    ></ButtonBase>
  );
}

export default LogoSection;
