import { useTheme } from "@mui/material/styles";
import { Stack, ButtonBase, Box } from "@mui/material";
import DrawerHeaderStyled, { logoTextStyle } from "./DrawerHeaderStyled";
import config from "config";
import { Link } from "react-router-dom";

const DrawerHeader = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent={!open ? 'center' : 'space-between'}
        width="100%"
      >
        <ButtonBase disableRipple component={Link} to={config.defaultPath}>
          <img src="/assets/logo.svg" alt="logo" />
          <Box sx={{display: !open && 'none'}}> 
          <span style={logoTextStyle}>evaly</span>
          </Box>
        </ButtonBase>
        <img
          src="/assets/menu-icon.svg"
          alt="menu-icon"
          style={{ cursor: "pointer", display: !open && 'none' }}
          onClick={handleDrawerToggle}
        />
      </Stack>
    </DrawerHeaderStyled>
  );
};

export default DrawerHeader;
