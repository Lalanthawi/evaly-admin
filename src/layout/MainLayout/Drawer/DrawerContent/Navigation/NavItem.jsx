import { forwardRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { activeItem } from "store/reducers/menu";

const NavItem = ({ item, level }) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const { drawerOpen, openItem } = menu;

  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link ref={ref} {...props} to={item.url} target={itemTarget} />
    )),
  };
  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget };
  }

  const itemHandler = (id) => {
    dispatch(activeItem({ openItem: [id] }));
  };

  const isSelected = openItem.findIndex((id) => id === item.id) > -1;

  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split("/")
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch(activeItem({ openItem: [item.id] }));
    }
  }, [dispatch, item]);

  const textColor = "#8B909A";
  const iconSelectedColor = "#23272E";

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      onClick={() => itemHandler(item.id)}
      selected={isSelected}
      style={{ borderRadius: 6 }}
      sx={{
        zIndex: 1201,
        mb: 1,
        mx: 1.5,
        py: !drawerOpen && level === 1 ? 1.25 : 1,
        ...(drawerOpen && {
          "&:hover": {
            bgcolor: "#F3F4F8",
          },
          "&.Mui-selected": {
            bgcolor: "#F3F4F8",
            color: iconSelectedColor,
            "&:hover": {
              color: iconSelectedColor,
              bgcolor: "#F3F4F8",
            },
          },
        }),
        ...(!drawerOpen && {
          "&:hover": {
            bgcolor: "transparent",
          },
          "&.Mui-selected": {
            "&:hover": {
              bgcolor: "transparent",
            },
            bgcolor: "transparent",
          },
        }),
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 28,
          color: isSelected ? iconSelectedColor : textColor,
          ...(!drawerOpen && {
            borderRadius: 1.5,
            width: 36,
            height: 36,
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              bgcolor: "secondary.lighter",
            },
          }),
          ...(!drawerOpen &&
            isSelected && {
              bgcolor: "primary.lighter",
              "&:hover": {
                bgcolor: "primary.lighter",
              },
            }),
        }}
      >
        {item.isIcon ? (
          isSelected ? (
            item.iconSelected
          ) : (
            item.unSelectedIcon
          )
        ) : (
          <img
            src={isSelected ? item.iconSelected : item.unSelectedIcon}
            alt={item.id}
          />
        )}
      </ListItemIcon>
      {(drawerOpen || (!drawerOpen && level !== 1)) && (
        <ListItemText
          primary={
            <Typography
              variant="h6"
              sx={{
                color: isSelected ? iconSelectedColor : textColor,
                fontSize: 15,
                fontWeight: isSelected ? 600 : 400,
              }}
            >
              {item.title}
            </Typography>
          }
        />
      )}
    </ListItemButton>
  );
};

export default NavItem;
