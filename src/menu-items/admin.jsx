import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const fontSize = 18;

const adminManagement = {
  id: "group-admin",
  title: "ADMIN",
  type: "group",
  children: [
    {
      id: "manage-admin",
      title: "Manage Admin",
      type: "item",
      url: "/manage-admin",
      iconSelected: <FontAwesomeIcon icon={faUser} style={{ fontSize }} />,
      unSelectedIcon: <FontAwesomeIcon icon={faUser} style={{ fontSize }} />,
      breadcrumbs: false,
      isIcon: true,
    },
    {
      id: "admin-roles",
      title: "Admin Roles",
      type: "item",
      url: "/admin-roles",
      iconSelected: <FontAwesomeIcon icon={faGear} style={{ fontSize }} />,
      unSelectedIcon: <FontAwesomeIcon icon={faGear} style={{ fontSize }} />,
      breadcrumbs: false,
      isIcon: true,
    },
  ],
};

export default adminManagement;
