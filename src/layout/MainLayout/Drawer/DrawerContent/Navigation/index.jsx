import { Box, List, Typography } from "@mui/material";
import menuItem from "menu-items";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";

const NavGroup = ({ item }) => {
  const menu = useSelector((state) => state.menu);
  const { drawerOpen } = menu;

  return (
    <List
      subheader={
        item.title &&
        drawerOpen && (
          <Box sx={{ pl: 3, mb: 1.5 }}>
            <Typography variant="subtitle2" color="#8B909A" fontSize={11}>
              {item.title}
            </Typography>
          </Box>
        )
      }
      sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
    >
      {item.children?.map((menuItem) => {
        return <NavItem key={menuItem.id} item={menuItem} level={1} />;
      })}
    </List>
  );
};

const Navigation = () => {
  const navGroups = menuItem.items.map((item) => {
    return <NavGroup key={item.id} item={item} />;
  });

  return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default Navigation;
